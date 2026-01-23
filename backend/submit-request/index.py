import json
import os
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Обработка заявок на бурение скважин и отправка в Telegram"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }

        # Отправка на email
        email_to = '89180445186@mail.ru'
        email_from = os.environ.get('SMTP_EMAIL', 'noreply@poehali.dev')
        email_password = os.environ.get('SMTP_PASSWORD', '')
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка на бурение от {name}'
        msg['From'] = email_from
        msg['To'] = email_to
        
        text = f"""Новая заявка на бурение скважин!

Имя: {name}
Телефон: {phone}

Заявка отправлена с сайта профессионального бурения.
"""
        
        html = f"""<html>
<head></head>
<body>
<h2 style="color: #2563eb;">🔔 Новая заявка на бурение скважин!</h2>
<p><strong>👤 Имя:</strong> {name}</p>
<p><strong>📞 Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
<hr>
<p style="color: #666; font-size: 12px;">Заявка отправлена с сайта профессионального бурения</p>
</body>
</html>
"""
        
        part1 = MIMEText(text, 'plain')
        part2 = MIMEText(html, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        email_sent = False
        email_error = None
        
        print(f'Попытка отправки email с {email_from} на {email_to}')
        print(f'Пароль установлен: {bool(email_password)}, длина: {len(email_password) if email_password else 0}')
        
        if email_password:
            try:
                with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
                    server.login(email_from, email_password)
                    server.send_message(msg)
                    email_sent = True
                    print(f'Email успешно отправлен на {email_to}')
            except Exception as e:
                email_error = str(e)
                print(f'Ошибка отправки email: {email_error}')
        
        # Telegram уведомление (опционально)
        telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')

        if telegram_token and chat_id:
            message = f"🔔 Новая заявка на бурение скважин!\n\n👤 Имя: {name}\n📞 Телефон: {phone}"
            
            url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
            data = urllib.parse.urlencode({
                'chat_id': chat_id,
                'text': message,
                'parse_mode': 'HTML'
            }).encode('utf-8')
            
            try:
                req = urllib.request.Request(url, data=data)
                urllib.request.urlopen(req)
            except Exception:
                pass

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка принята'
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }