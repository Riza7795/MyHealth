# HealthMate AI - Workspace Instructions for GitHub Copilot

## Project Overview

HealthMate AI is a comprehensive full-stack health management platform built with:
- **Backend**: Node.js + Express.js + PostgreSQL
- **Frontend**: React 18 + Tailwind CSS
- **Mobile**: React Native (Expo)

The application supports three user roles (Users, Workers/Healthcare Professionals, Admins) with 30+ features for health tracking, AI analysis, doctor consultations, and personalized health planning.

## Key Project Conventions

### Backend
- Use Express.js middleware for authentication, validation, and error handling
- Follow MVC architecture with separate controllers, services, and models
- Use Sequelize ORM for database operations
- Implement JWT-based authentication
- Use async/await for asynchronous operations
- RESTful API design with proper HTTP status codes
- Implement request validation using joi or express-validator
- Error handling with custom AppError class

### Frontend
- Use functional components with React Hooks
- Context API for state management (consider Redux for complex state)
- Tailwind CSS for styling
- Component organization: one component per file
- Create custom hooks for reusable component logic
- Use Axios for API calls with proper interceptors
- Follow BEM-like naming conventions for CSS classes

### Mobile
- Use React Native with Expo for cross-platform development
- React Navigation for routing
- Separate screens from components
- Native modules for device features (camera, contacts, etc.)
- Follow React Native conventions and best practices

## Coding Standards

### Naming Conventions
- **Files**: kebab-case (user-profile.jsx, auth-service.js)
- **Folders**: kebab-case (user-management, health-analysis)
- **Components**: PascalCase (UserProfile, AuthForm)
- **Functions/Variables**: camelCase (getUserData, isHealthy)
- **Constants**: UPPER_SNAKE_CASE (MAX_FILE_SIZE, API_TIMEOUT)
- **Database Tables**: snake_case (user_health_data, health_analysis)

### File Organization
- Components: src/components/{ComponentName}/ComponentName.jsx + ComponentName.css
- Pages: src/pages/{PageName}/PageName.jsx
- Services: src/services/{serviceName}.js
- Hooks: src/hooks/use{HookName}.js

### JavaScript/React Standards
- Use ES6+ features (arrow functions, destructuring, template literals)
- No var, use const/let
- Proper error handling with try-catch
- Comments for complex logic
- PropTypes or TypeScript for component props
- Don't use inline styles, use CSS files

## Development Workflow

### Getting Started
1. Install dependencies: `npm run install-all`
2. Setup .env file from .env.example
3. Create/migrate PostgreSQL database
4. Start development: `npm run dev`

### Adding New Features
1. Create relevant folder structure
2. Write backend endpoint first (API contract)
3. Implement frontend component
4. Add mobile screen if needed
5. Write tests

### Database Changes
1. Create migration file in `backend/database/migrations/`
2. Run migration: `npm run db:migrate`
3. Update model files in `backend/src/models/`

### Git Workflow
- Feature branches: `feature/{feature-name}`
- Bug fixes: `fix/{bug-description}`
- Commit messages: `type(scope): description` (e.g., `feat(auth): add login validation`)

## Current Project Status

- ✅ Project structure scaffolded
- ✅ Environment configuration setup
- ⏳ Backend API development
- ⏳ Frontend UI development
- ⏳ Mobile app development
- ⏳ Database schema creation
- ⏳ Integration testing

## Next Steps

1. **Backend Setup**: Initialize package.json, setup Express server, create database models
2. **Frontend Setup**: Initialize React app, setup routing, create layout components
3. **Database**: Create PostgreSQL schema and migrations
4. **Authentication**: Implement JWT-based auth for all roles
5. **API Integration**: Connect frontend and mobile to backend

## Important Notes

- Always validate user input on both frontend and backend
- Use environment variables for sensitive data (never commit .env)
- Implement proper error handling and logging
- Follow "principle of least privilege" for user permissions
- Regular database backups in production
- CORS configuration must be secure
- API rate limiting recommended for production

## Useful Commands

```bash
# Install all dependencies
npm run install-all

# Development
npm run dev              # Start backend + frontend
npm run dev:backend     # Start only backend
npm run dev:frontend    # Start only frontend
npm run dev:mobile      # Start mobile (Expo)

# Building
npm run build           # Build all apps
npm run build:backend   # Build backend
npm run build:frontend  # Build frontend

# Database
npm run db:migrate      # Run migrations
npm run db:seed        # Seed sample data

# Testing
npm run test           # Run all tests
npm run test:backend   # Run backend tests

# Docker
npm run docker:up      # Start with Docker
npm run docker:down    # Stop Docker services
```

## Resources & Documentation

- Backend: `backend/README.md`
- Frontend: `frontend/README.md`
- Mobile: `mobile/README.md`
- API Docs: `docs/API.md` (to be created)
- Database Schema: `database/schema.sql` (to be created)

## Tips for Copilot Usage

When working on this project, helpful queries include:
- "Create a new API endpoint for [feature]"
- "Add form validation for [form-name]"
- "Create a custom hook for [functionality]"
- "Generate test case for [function]"
- "Optimize [component-name] performance"
- "Setup pagination for [data-list]"

## Contact & Support

For questions about the project structure or conventions, refer to:
- README.md for overview
- Individual component READMEs for specific modules
- Code comments for implementation details
