import json
import os
import urllib.request
import urllib.parse
import re


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

        # Telegram уведомление
        telegram_token_raw = os.environ.get('TELEGRAM_BOT_TOKEN', '').strip()
        chat_id = os.environ.get('TELEGRAM_CHAT_ID', '').strip()
        
        print(f'Исходный токен (первые 50 символов): {telegram_token_raw[:50]}')
        
        # Очистка токена от возможного лишнего текста
        telegram_token = telegram_token_raw
        if telegram_token:
            token_match = re.search(r'\d+:[A-Za-z0-9_-]+', telegram_token)
            if token_match:
                telegram_token = token_match.group(0)
                print(f'Токен после очистки найден: {telegram_token[:20]}...')
            else:
                print(f'Не удалось извлечь токен по паттерну')
        
        # Очистка chat_id от возможного текста
        if chat_id:
            chat_id = re.sub(r'[^\d]', '', chat_id)
        
        print(f'Telegram токен установлен: {bool(telegram_token)}, Chat ID: {chat_id}')

        if telegram_token and chat_id:
            message = f"🔔 Новая заявка на бурение скважин!\n\n👤 Имя: {name}\n📞 Телефон: {phone}"
            
            url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
            data = urllib.parse.urlencode({
                'chat_id': chat_id,
                'text': message
            }).encode('utf-8')
            
            try:
                req = urllib.request.Request(url, data=data)
                response = urllib.request.urlopen(req)
                print(f'Telegram уведомление отправлено успешно')
            except Exception as e:
                print(f'Ошибка отправки в Telegram: {str(e)}')

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