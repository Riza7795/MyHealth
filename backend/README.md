# Backend - HealthMate AI API Server

Node.js + Express.js backend for HealthMate AI application with PostgreSQL database.

## Setup

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create `.env` file from `.env.example` in the root directory.

### Database Setup
```bash
# Create PostgreSQL database
createdb healthmate_db

# Run migrations
npm run migrate

# Seed sample data (optional)
npm run seed
```

### Start Development Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## Project Structure

```
src/
├── config/           # Database & environment config
├── controllers/      # Request handlers
├── routes/          # API routes
├── models/          # Sequelize ORM models
├── middleware/      # Authentication, validation, error handling
├── services/        # Business logic
├── utils/           # Helper functions
└── index.js         # Application entry point

database/
├── migrations/      # Database migrations
└── seeds/          # Sample data
```

## API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh-token` - Refresh JWT
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `POST /api/users/health-data` - Save health data

### Health Analysis
- `POST /api/health/analyze` - AI analysis
- `GET /api/health/risks` - Risk predictions

### Workers (Doctors/Dietitians)
- `GET /api/workers` - List all workers
- `GET /api/workers/:id` - Get worker profile
- `POST /api/workers/register` - Register as worker

### Consultations
- `POST /api/consultations` - Create consultation
- `GET /api/consultations` - Get user consultations
- `POST /api/consultations/:id/message` - Send message

More routes in `src/routes/`

## Development Guidelines

### Code Structure
- Use async/await for asynchronous operations
- Implement proper error handling
- Validate all user inputs
- Use prepared statements for SQL queries
- Log important actions

### Database
- Models in `src/models/`
- Keep models responsible for data structure
- Use services for business logic
- Controllers handle HTTP requests/responses

### Error Handling
- Custom AppError class for consistent error responses
- Proper HTTP status codes
- Detailed error messages in development, generic in production

### Security
- JWT-based authentication
- Password hashing with bcryptjs
- CORS configuration
- Input validation
- SQL injection prevention
- Rate limiting (to be implemented)

## Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

## Linting

```bash
# Check code style
npm run lint

# Fix issues automatically
npm run lint:fix
```

## Database Operations

### Create Migration
```bash
# Add to database/migrations/ folder
```

### Run Migrations
```bash
npm run migrate
```

### Rollback Migration
```bash
npm run migrate:undo
```

### Seed Database
```bash
npm run seed
```

## Environment Variables

See `../.env.example` for complete list. Key variables:

- `DATABASE_URL` - PostgreSQL connection string
- `BACKEND_PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - JWT signing secret
- `CORS_ORIGIN` - Allowed origin for CORS

## Production Deployment

1. Set `NODE_ENV=production`
2. Use environment-specific configuration
3. Enable HTTPS
4. Setup database backups
5. Configure reverse proxy (nginx/Apache)
6. Enable rate limiting
7. Setup monitoring & logging

## Dependencies Overview

- **express**: Web framework
- **sequelize**: ORM for PostgreSQL
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **express-validator**: Input validation
- **socket.io**: Real-time communication
- **multer**: File upload handling
- **aws-sdk**: AWS S3 integration
- **nodemailer**: Email sending
- **cors**: CORS middleware
- **helmet**: Security headers
- **morgan**: HTTP logging

## Troubleshooting

### Database Connection Issues
- Check DATABASE_URL in .env
- Verify PostgreSQL is running
- Ensure database exists

### Port Already in Use
- Change BACKEND_PORT in .env
- Or kill process: `lsof -ti:5000 | xargs kill -9`

### JWT Authentication Fails
- Check JWT_SECRET is set in .env
- Verify token format in headers
- Token may have expired

## Next Steps

1. Create database models for all entities
2. Implement authentication routes
3. Setup middleware for auth, validation, error handling
4. Create service layer for business logic
5. Write API documentation
6. Setup automated testing

## Support

For issues or questions, refer to the main README.md or create an issue.
