# Frontend - HealthMate AI React Web Application

React 18 + Vite + Tailwind CSS frontend for HealthMate AI.

## Setup

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

App runs on `http://localhost:5173` (Vite default)

### Production Build
```bash
npm run build
```

Creates optimized production build in `dist/` folder.

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page/screen components
├── services/        # API client & external services
├── context/         # React Context for state management
├── hooks/           # Custom React hooks
├── styles/          # Global CSS & Tailwind config
├── utils/           # Helper functions
├── App.jsx          # Root component
└── main.jsx         # React entry point

public/             # Static assets
```

## Key Features

### Components
- Modular, reusable components
- PropTypes validation
- Responsive design with Tailwind CSS

### State Management
- React Context API for global state
- Zustand for optimized state management
- Custom hooks for component logic

### API Integration
- Axios for HTTP requests
- Centralized API service
- Request/response interceptors

### Routing
- React Router v6
- Nested routes support
- Protected routes for authenticated users

### Real-time Communication
- Socket.io client for live updates
- Real-time consultation chat

## Core Pages

### User Pages
1. **Login** (`/login`) - User authentication
2. **Register** (`/register`) - Account creation
3. **Dashboard** (`/dashboard`) - User home
4. **Profile** (`/profile`) - User profile management
5. **Health Analysis** (`/health/analysis`) - AI health insights
6. **Plans** (`/plans`) - Personalized health plans
7. **Consultations** (`/consultations`) - Doctor/Dietitian chat
8. **Progress** (`/progress`) - Charts and analytics

### Worker Pages
1. **Worker Registration** (`/worker/register`)
2. **Worker Dashboard** (`/worker/dashboard`)
3. **Patient List** (`/worker/patients`)
4. **Consultations** (`/worker/consultations`)

### Admin Pages
1. **Admin Dashboard** (`/admin/dashboard`)
2. **User Management** (`/admin/users`)
3. **Worker Management** (`/admin/workers`)
4. **System Monitoring** (`/admin/monitoring`)

## Components

### Layout Components
- `Header` - Navigation bar
- `Sidebar` - Side navigation
- `Footer` - Footer section
- `AuthLayout` - Login/register layout

### Common Components
- `Button` - Reusable button
- `Input` - Form input field
- `Modal` - Modal dialog
- `Spinner` - Loading indicator
- `Alert` - Alert/notification
- `Card` - Content card

### Feature Components
- `HealthAnalysisChart` - AI analysis visualization
- `ConsultationChat` - Real-time messaging
- `PlanGenerator` - Personalized plan display
- `ProgressChart` - Progress tracking
- `DoctorCard` - Doctor profile card
- `AppointmentForm` - Booking form

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Responsive design system
- Custom theme configuration

### CSS Modules
- Component-specific styles
- BEM naming convention
- Scoped styles to prevent conflicts

## API Service

```javascript
// Usage example
import apiClient from '@services/api-client.js';

// GET request
const data = await apiClient.get('/users/profile');

// POST request
const result = await apiClient.post('/health/analyze', payload);

// PUT request
await apiClient.put('/users/profile', updatedData);

// DELETE request
await apiClient.delete('/consultations/:id');
```

## Custom Hooks

### useAuth
```javascript
const { user, login, logout, isAuthenticated } = useAuth();
```

### useFetch
```javascript
const { data, loading, error } = useFetch('/api/endpoint');
```

### useForm
```javascript
const { values, errors, handleChange, handleSubmit } = useForm(initialValues);
```

## Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Testing

```bash
# Run tests
npm run test

# Test with UI
npm run test:ui
```

## Linting

```bash
# Check code style
npm run lint

# Fix issues
npm run lint:fix
```

## Performance Optimization

- Code splitting with React.lazy()
- Image optimization
- Bundle size analysis
- Caching strategies
- SEO optimization

## Security

- XSS prevention
- CSRF protection
- Secure local storage usage
- Data validation
- Environment variable protection

## Deployment

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

## Dependencies Overview

- **react**: UI library
- **react-router-dom**: Client-side routing
- **axios**: HTTP client
- **tailwindcss**: CSS framework
- **chart.js**: Data visualization
- **socket.io-client**: WebSocket client
- **zustand**: State management
- **react-icons**: Icon library
- **date-fns**: Date utilities

## Next Steps

1. Create authentication pages
2. Setup API service layer
3. Create layout components
4. Build dashboard pages
5. Implement real-time features
6. Add data visualization
7. Setup testing

## Support

For issues or questions, refer to the main README.md.
