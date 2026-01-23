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

        # Telegram уведомление - используем правильные значения
        telegram_token = '8388920938:AAE8MJPJMYvZXCJUBsCZjatFIwwhQLKnY10'
        chat_id = '5055798508'
        
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