import json
import os
import urllib.request
import urllib.parse
import urllib.error
import smtplib
from email.mime.text import MIMEText

import psycopg2

CORS_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}


def save_to_db(name: str, phone: str, service: str, visit_time: str) -> None:
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return
    conn = psycopg2.connect(dsn, connect_timeout=3)
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO requests (name, phone, service, visit_time) VALUES (%s, %s, %s, %s)",
                (name[:200], phone[:50], service[:200], visit_time[:100]),
            )
        conn.commit()
    finally:
        conn.close()


def notify_telegram(text: str) -> None:
    token = (os.environ.get('TELEGRAM_BOT_TOKEN') or '').strip()
    chat_id = (os.environ.get('TELEGRAM_CHAT_ID') or '').strip()
    if not token or not chat_id:
        print(f'TG skip: token={bool(token)} chat_id={bool(chat_id)}')
        return
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode('utf-8')
    req = urllib.request.Request(url, data=data)
    try:
        resp = urllib.request.urlopen(req, timeout=5)
        print(f'TG ok: {resp.status}')
    except urllib.error.HTTPError as e:
        print(f'TG HTTPError {e.code}: {e.read().decode("utf-8", "ignore")[:300]}')
    except Exception as e:
        print(f'TG fail: {type(e).__name__}: {e}')


SMTP_HOSTS = {
    'mail.ru': 'smtp.mail.ru', 'inbox.ru': 'smtp.mail.ru', 'list.ru': 'smtp.mail.ru', 'bk.ru': 'smtp.mail.ru',
    'yandex.ru': 'smtp.yandex.ru', 'ya.ru': 'smtp.yandex.ru', 'yandex.com': 'smtp.yandex.ru',
    'gmail.com': 'smtp.gmail.com', 'rambler.ru': 'smtp.rambler.ru',
}


def send_email(subject: str, text: str) -> dict:
    email = (os.environ.get('SMTP_EMAIL') or '').strip()
    password = (os.environ.get('SMTP_PASSWORD') or '').strip()
    if not email or not password or '@' not in email:
        return {'ok': False, 'error': 'SMTP_EMAIL или SMTP_PASSWORD не заданы или неверны'}
    domain = email.split('@')[1].lower()
    host = SMTP_HOSTS.get(domain, f'smtp.{domain}')
    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = subject
    msg['From'] = email
    msg['To'] = email
    try:
        with smtplib.SMTP_SSL(host, 465, timeout=8) as server:
            server.login(email, password)
            server.sendmail(email, [email], msg.as_string())
        return {'ok': True, 'host': host}
    except Exception as e:
        return {'ok': False, 'host': host, 'error': f'{type(e).__name__}: {str(e)[:200]}'}


def tg_call(token: str, api_method: str, params: dict = None) -> dict:
    url = f'https://api.telegram.org/bot{token}/{api_method}'
    data = urllib.parse.urlencode(params).encode('utf-8') if params else None
    try:
        resp = urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=4)
        return json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        try:
            return json.loads(e.read().decode('utf-8'))
        except Exception:
            return {'ok': False, 'description': f'HTTP {e.code}'}
    except Exception as e:
        return {'ok': False, 'description': f'{type(e).__name__}: {getattr(e, "reason", e)}'}


def tg_check() -> dict:
    token = (os.environ.get('TELEGRAM_BOT_TOKEN') or '').strip()
    chat_id = (os.environ.get('TELEGRAM_CHAT_ID') or '').strip()
    result = {
        'token_set': bool(token),
        'token_format_ok': bool(token) and ':' in token and token.split(':')[0].isdigit(),
        'chat_id_set': bool(chat_id),
        'chat_id_format_ok': chat_id.lstrip('-').isdigit(),
    }
    if not result['token_format_ok']:
        return result
    me = tg_call(token, 'getMe')
    result['bot_ok'] = me.get('ok', False)
    result['bot_username'] = (me.get('result') or {}).get('username')
    if not me.get('ok'):
        result['bot_error'] = me.get('description')
        return result
    updates = tg_call(token, 'getUpdates')
    chats = {}
    for u in updates.get('result') or []:
        msg = u.get('message') or u.get('my_chat_member') or {}
        chat = msg.get('chat') or {}
        if chat.get('id'):
            chats[chat['id']] = chat.get('first_name') or chat.get('title') or chat.get('username') or ''
    result['chats_who_wrote_bot'] = [{'id': k, 'name': v} for k, v in chats.items()]
    if result['chat_id_format_ok']:
        sent = tg_call(token, 'sendMessage', {'chat_id': chat_id, 'text': '✅ Проверка связи: бот заявок работает'})
        result['test_message_sent'] = sent.get('ok', False)
        if not sent.get('ok'):
            result['send_error'] = sent.get('description')
    return result


def handler(event: dict, context) -> dict:
    """Приём заявок с сайта: сохраняет заявку в базу и отправляет уведомление в Telegram"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    qs = event.get('queryStringParameters') or {}
    if method == 'GET' and qs.get('action') == 'email_check':
        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps(
                send_email('Проверка связи', 'Уведомления о заявках с сайта настроены и работают.'),
                ensure_ascii=False,
            ),
        }
    if method == 'GET' and qs.get('action') == 'tg_check':
        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps(tg_check(), ensure_ascii=False),
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': CORS_HEADERS,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()
    service = (body.get('service') or 'Бурение скважин под воду').strip()
    visit_time = (body.get('visitTime') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': CORS_HEADERS,
            'body': json.dumps({'error': 'Имя и телефон обязательны'}),
        }

    saved = False
    try:
        save_to_db(name, phone, service, visit_time)
        saved = True
    except Exception as e:
        print(f'DB error: {e}')

    message = f'🔔 Новая заявка: {service}\n\n👤 Имя: {name}\n📞 Телефон: {phone}'
    if visit_time:
        message += f'\n🕒 Когда удобно: {visit_time}'

    mail = send_email(f'Новая заявка: {name}, {phone}', message)
    print(f'Email: {mail}')

    return {
        'statusCode': 200,
        'headers': CORS_HEADERS,
        'body': json.dumps({'success': True, 'message': 'Заявка принята', 'saved': saved}),
    }