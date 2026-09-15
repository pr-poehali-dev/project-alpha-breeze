import json
import os
import urllib.request
import urllib.parse
import urllib.error

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


def handler(event: dict, context) -> dict:
    """Приём заявок с сайта: сохраняет заявку в базу и отправляет уведомление в Telegram"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

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

    try:
        notify_telegram(message)
    except Exception as e:
        print(f'Telegram error: {e}')

    return {
        'statusCode': 200,
        'headers': CORS_HEADERS,
        'body': json.dumps({'success': True, 'message': 'Заявка принята', 'saved': saved}),
    }