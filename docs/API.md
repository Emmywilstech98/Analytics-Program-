# Analytics Program API

## Base URL

https://api.analytics-program.com

---

## POST /events

Receives analytics events from the JavaScript SDK.

### Request

```json
{
  "websiteId": "string",
  "event": "page_view",
  "url": "/",
  "timestamp": "ISO-8601"
}
```

### Response

```json
{
  "success": true
}
```

---

## Future Endpoints

POST /auth/login

POST /auth/register

GET /dashboard

GET /websites

POST /websites

DELETE /websites/{id}