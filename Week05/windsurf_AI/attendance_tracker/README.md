# Attendance Tracker API

A FastAPI-based backend system for tracking student attendance with MySQL database and Docker containerization.

## Features

- **Student Registration**: Students can register with name, email, and password
- **Student Login**: Login system with attendance tracking (increments login count)
- **Admin Authentication**: First registered user becomes admin
- **JWT Security**: Secure endpoints using JWT tokens
- **Admin Endpoints**:
  - Get all students
  - Get attendance records
  - Get attendance for specific student
- **Database Migrations**: Alembic for database schema management
- **Docker Support**: Full containerization with docker-compose

## Tech Stack

- **Backend**: FastAPI (Python)
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: SQLAlchemy
- **Migrations**: Alembic
- **Containerization**: Docker & Docker Compose

## Project Structure

```
attendance_tracker/
├── app/
│   ├── auth/           # Authentication utilities
│   ├── database/       # Database configuration
│   ├── models/         # SQLAlchemy models
│   ├── routers/        # API endpoints
│   └── schemas/       # Pydantic models
├── migrations/         # Alembic migration files
├── main.py            # FastAPI application entry point
├── requirements.txt   # Python dependencies
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose configuration
└── .env              # Environment variables
```

## Setup Instructions

### Using Docker (Recommended)

1. Clone the repository
2. Run with Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. The API will be available at `http://localhost:8000`
4. API Documentation: `http://localhost:8000/docs`

### Manual Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up MySQL database and update `.env` file with your credentials

3. Run database migrations:
   ```bash
   alembic upgrade head
   ```

4. Start the application:
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints

### Authentication Endpoints

- `POST /auth/register` - Register a new student
- `POST /auth/login` - Login student and track attendance

### Admin Endpoints (Requires JWT token and admin privileges)

- `GET /admin/students` - Get all students
- `GET /admin/attendance` - Get all attendance records
- `GET /admin/attendance/{student_id}` - Get attendance for specific student

### Other Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Usage Examples

### Register First User (becomes admin)
```bash
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "admin123"
  }'
```

### Register Regular Student
```bash
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "student123"
  }'
```

### Login (tracks attendance)
```bash
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123"
  }'
```

### Get All Students (Admin only)
```bash
curl -X GET "http://localhost:8000/admin/students" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Database Schema

### Students Table
- id (Primary Key)
- name
- email (Unique)
- hashed_password
- is_admin (Boolean)
- login_count
- created_at
- updated_at

### Attendance Table
- id (Primary Key)
- student_id (Foreign Key)
- login_time

## Environment Variables

Create a `.env` file with the following variables:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=attendance_tracker
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Database Migrations

### Create new migration
```bash
alembic revision --autogenerate -m "Description of changes"
```

### Apply migrations
```bash
alembic upgrade head
```

### Downgrade migration
```bash
alembic downgrade -1
```

## Security Notes

- The first registered user automatically becomes an admin
- JWT tokens are used for authentication
- Passwords are hashed using bcrypt
- Admin endpoints are protected with role-based access control
- Change the SECRET_KEY in production

## Development

To run in development mode with auto-reload:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API documentation will be available at `http://localhost:8000/docs`
