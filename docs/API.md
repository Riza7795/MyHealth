/**
 * API Documentation
 * Complete list of HealthMate API endpoints
 */

# HealthMate AI - API Documentation

Base URL: `http://localhost:5000/api`

## Authentication Endpoints

### Register New User
**POST** `/auth/register`

Request body:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

Response:
```json
{
  "status": "success",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user"
  },
  "token": "jwt_token_here"
}
```

### Login
**POST** `/auth/login`

Request body:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "status": "success",
  "user": { ... },
  "token": "jwt_token_here"
}
```

### Logout
**POST** `/auth/logout`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

### Refresh Token
**POST** `/auth/refresh-token`

Headers: `Authorization: Bearer {refresh_token}`

Response:
```json
{
  "status": "success",
  "token": "new_jwt_token"
}
```

---

## User Endpoints

### Get User Profile
**GET** `/users/profile`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "status": "success",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "height": 175,
    "weight": 75,
    "role": "user"
  }
}
```

### Update User Profile
**PUT** `/users/profile`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "height": 175,
  "weight": 70
}
```

### Submit Health Data
**POST** `/users/health-data`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "bloodPressure": "120/80",
  "bloodSugar": 100,
  "cholesterol": 200,
  "heartRate": 72
}
```

---

## Health Analysis Endpoints

### Get AI Health Analysis
**POST** `/health/analyze`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "status": "success",
  "analysis": {
    "healthScore": 85,
    "summary": "Overall health is good",
    "risks": {
      "diabetes": "low",
      "heartDisease": "moderate",
      "hypertension": "low"
    },
    "recommendations": [
      "Increase exercise",
      "Reduce salt intake"
    ]
  }
}
```

### Get Risk Predictions
**GET** `/health/risks`

Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "status": "success",
  "risks": {
    "diabetes": { "score": 0.3, "level": "low" },
    "heartDisease": { "score": 0.5, "level": "moderate" },
    "hypertension": { "score": 0.2, "level": "low" }
  }
}
```

---

## Worker (Doctor/Dietitian) Endpoints

### Get All Workers
**GET** `/workers`

Query Parameters:
- `specialization` - Filter by specialization (doctor, dietitian, trainer)
- `page` - Page number (default: 1)
- `limit` - Results per page (default: 10)

Response:
```json
{
  "status": "success",
  "workers": [
    {
      "id": 1,
      "firstName": "Jane",
      "lastName": "Smith",
      "specialization": "doctor",
      "rating": 4.5,
      "experience": 10
    }
  ],
  "pagination": { "page": 1, "limit": 10, "total": 50 }
}
```

### Get Worker Profile
**GET** `/workers/:id`

Response:
```json
{
  "status": "success",
  "worker": {
    "id": 1,
    "firstName": "Jane",
    "lastName": "Smith",
    "specialization": "doctor",
    "bio": "Experienced cardiologist",
    "rating": 4.5,
    "reviews": [...]
  }
}
```

### Register as Worker
**POST** `/workers/register`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "specialization": "doctor",
  "qualification": "MD",
  "experience": 10,
  "licenseNumber": "MD123456"
}
```

---

## Consultation Endpoints

### Create Consultation
**POST** `/consultations`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "workerId": 1,
  "consultationType": "chat"
}
```

Response:
```json
{
  "status": "success",
  "consultation": {
    "id": 1,
    "workerId": 1,
    "status": "active"
  }
}
```

### Get User Consultations
**GET** `/consultations`

Headers: `Authorization: Bearer {token}`

### Send Message in Consultation
**POST** `/consultations/:id/message`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "message": "How are you feeling today?"
}
```

---

## Plans Endpoints

### Get Personalized Plan
**GET** `/plans/personalized`

Headers: `Authorization: Bearer {token}`

### Create Plan
**POST** `/plans`

Headers: `Authorization: Bearer {token}`

Request body:
```json
{
  "planType": "fitness",
  "title": "30-Day Fitness Plan",
  "duration": 30,
  "goals": ["lose weight", "build muscle"]
}
```

---

## More Endpoints Coming

- Food Scanner
- Progress Tracking
- Wearable Integration
- Mental Health Tracking
- Appointments
- Admin endpoints
- And more...

---

## Error Responses

All error responses follow this format:

```json
{
  "status": "error",
  "message": "Error description",
  "statusCode": 400
}
```

Common status codes:
- `400` - Bad Request / Validation Error
- `401` - Unauthorized / Missing Token
- `403` - Forbidden / Insufficient Permissions
- `404` - Not Found
- `409` - Conflict (e.g., Email already exists)
- `500` - Internal Server Error

---

## Authentication

All protected endpoints require `Authorization` header:
```
Authorization: Bearer {jwt_token}
```

Tokens expire in 7 days. Use refresh token endpoint to get new token.

---

## Rate Limiting

API implements rate limiting:
- 100 requests per 15 minutes per IP
- Exceeding limit returns `429 Too Many Requests`

---

## Pagination

Paginated endpoints support:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)

Response includes pagination metadata:
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "pages": 15
  }
}
```
