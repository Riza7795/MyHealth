# HealthMate AI - Smart Health & Lifestyle Assistant

A comprehensive health management platform that combines AI-powered analysis, doctor consultations, personalized health plans, and fitness tracking in one intuitive application.

## 🎯 Project Overview

HealthMate AI is a full-stack application supporting three user roles:
- **👤 Users** - Track health, get AI analysis, consult doctors, follow personalized plans
- **👨‍⚕️ Workers** - Doctors, Dietitians, Trainers provide consultations and guidance
- **🛠️ Admins** - System management, worker verification, content management

## 📋 Features

### User Features (31 Steps)
- Multi-role login system
- AI health analysis & risk prediction
- Doctor/Dietitian consultation
- Personalized plan generation
- Food scanner with AI nutrition analysis
- Mental health tracking & meditation
- Wearable integration (Fitbit, Apple Health, Google Fit)
- Daily task tracking & adaptive AI
- Progress dashboard with charts
- Alerts & notifications
- AI chatbot assistant
- Grocery suggestions
- Nearby services finder
- Family profiles
- PDF report export

### Worker Features
- Professional registration & verification
- Rating & review system
- Patient interaction & consultation
- Health monitoring dashboard
- Appointment management

### Admin Features
- User management
- Worker management & verification
- System monitoring
- Content management
- Security & data control

## 🏗️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Real-time**: Socket.io
- **API**: RESTful API

### Frontend (Web)
- **Framework**: React 18
- **State Management**: Context API / Redux
- **Styling**: Tailwind CSS
- **Charts**: Chart.js / Recharts
- **HTTP Client**: Axios
- **Routing**: React Router v6

### Mobile (iOS & Android)
- **Framework**: React Native (Expo)
- **Navigation**: React Navigation
- **State**: Redux / Context API
- **UI Components**: React Native Paper

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL 15+
- **File Storage**: AWS S3
- **Email**: SendGrid / Gmail SMTP
- **Real-time Communication**: WebSockets

## 📁 Project Structure

```
MyHealth/
├── backend/                    # Node.js Express API
│   ├── src/
│   │   ├── config/            # Database & app config
│   │   ├── controllers/       # Request handlers
│   │   ├── routes/            # API routes
│   │   ├── models/            # Database models
│   │   ├── middleware/        # Auth, validation, error handling
│   │   ├── services/          # Business logic
│   │   └── utils/             # Helper functions
│   ├── database/
│   │   ├── migrations/        # Database migrations
│   │   └── seeds/             # Sample data
│   └── package.json
│
├── frontend/                   # React Web Application
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API client services
│   │   ├── context/           # Context providers
│   │   ├── hooks/             # Custom hooks
│   │   ├── styles/            # Global styles
│   │   ├── utils/             # Helper functions
│   │   └── App.jsx
│   ├── public/                # Static assets
│   └── package.json
│
├── mobile/                     # React Native Mobile App
│   ├── src/
│   │   ├── screens/           # Screen components
│   │   ├── components/        # Reusable components
│   │   ├── navigation/        # Navigation configuration
│   │   ├── services/          # API client & device services
│   │   ├── context/           # Context providers
│   │   └── utils/             # Helper functions
│   ├── app.json               # Expo configuration
│   └── package.json
│
├── .env.example               # Environment variables template
├── docker-compose.yml         # Docker configuration
├── README.md                  # This file
└── package.json               # Root workspace package
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- PostgreSQL (v15 or higher)
- Docker & Docker Compose (optional)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd MyHealth
```

2. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Install dependencies**
```bash
npm run install-all
```

4. **Setup Database** (PostgreSQL)
```bash
# Create database
createdb healthmate_db

# Run migrations
npm run db:migrate

# Seed sample data (optional)
npm run db:seed
```

5. **Start development servers**

```bash
# Start both backend and frontend
npm run dev

# OR start individually
npm run dev:backend    # Runs on http://localhost:5000
npm run dev:frontend   # Runs on http://localhost:3000
npm run dev:mobile     # Expo app on port 19000
```

### Using Docker

```bash
# Start all services with Docker
npm run docker:up

# Stop all services
npm run docker:down
```

## 📚 API Documentation

API endpoints are organized by role and functionality:

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh-token` - Refresh JWT token
- `POST /api/auth/logout` - Logout user

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/health-data` - Submit health data

### Health Analysis
- `POST /api/health/analyze` - Get AI health analysis
- `GET /api/health/risks` - Get risk predictions

### Doctor/Consultation
- `GET /api/workers/doctors` - List available doctors
- `POST /api/consultations/create` - Book consultation
- `GET /api/consultations` - Get user consultations

### Plans & Recommendations
- `GET /api/plans/personalized` - Get personalized plan
- `POST /api/plans/accept` - Accept/save plan

### Food Scanner
- `POST /api/food-scanner/analyze` - Analyze food image

### More endpoints coming...

Full API documentation: [See docs/API.md](docs/API.md)

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Data encryption for sensitive information
- SQL injection prevention with parameterized queries
- CORS configuration
- Input validation & sanitization
- Rate limiting
- Secure password hashing with bcrypt

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run with coverage
npm run test:coverage
```

## 📊 Database Schema

Key database tables:
- `users` - User accounts
- `user_health_data` - Health metrics storage
- `health_analysis` - AI analysis results
- `workers` - Doctor/Dietitian profiles
- `consultations` - Chat/consultation records
- `plans` - Personalized health plans
- `appointments` - Booking system
- `ratings_reviews` - Worker ratings

[See database/schema.sql](database/schema.sql) for full schema

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Team

HealthMate AI Development Team

## 📧 Support

For support, email support@healthmate.ai or open an issue in the repository.

## 🗺️ Roadmap

- [ ] Phase 1: Core user features & AI analysis
- [ ] Phase 2: Doctor consultation system
- [ ] Phase 3: Wearable integration
- [ ] Phase 4: Advanced analytics & reporting
- [ ] Phase 5: Mobile app optimization
- [ ] Phase 6: Community features

## 📚 Documentation

- [Backend Setup](backend/README.md)
- [Frontend Setup](frontend/README.md)
- [Mobile Setup](mobile/README.md)
- [API Documentation](docs/API.md)
- [Database Schema](database/schema.sql)
- [Architecture Guide](docs/ARCHITECTURE.md)
