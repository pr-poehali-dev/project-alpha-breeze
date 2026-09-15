import json
import os

import psycopg2

CORS_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
}

DEFAULT_PASSWORD = 'voda2024'


def handler(event: dict, context) -> dict:
    """Список заявок с сайта для владельца: отдаёт заявки из базы по паролю"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    headers = {k.lower(): v for k, v in (event.get('headers') or {}).items()}
    provided = headers.get('x-admin-password', '')
    expected = os.environ.get('ADMIN_PASSWORD') or DEFAULT_PASSWORD

    if provided != expected:
        return {
            'statusCode': 401,
            'headers': CORS_HEADERS,
            'body': json.dumps({'error': 'Неверный пароль'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'], connect_timeout=3)
    try:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT id, name, phone, service, visit_time, created_at "
                "FROM requests ORDER BY id DESC LIMIT 300"
            )
            rows = cur.fetchall()
    finally:
        conn.close()

    requests = [
        {
            'id': r[0],
            'name': r[1],
            'phone': r[2],
            'service': r[3] or '',
            'visitTime': r[4] or '',
            'createdAt': r[5].isoformat() if r[5] else '',
        }
        for r in rows
    ]

    return {
        'statusCode': 200,
        'headers': CORS_HEADERS,
        'body': json.dumps({'success': True, 'requests': requests, 'total': len(requests)}),
    }
