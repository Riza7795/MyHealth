# Mobile - HealthMate AI React Native App

React Native mobile application for HealthMate AI using Expo for iOS and Android.

## Setup

### Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on your phone (for testing)

### Install Dependencies
```bash
npm install
```

### Start Development
```bash
# Start Expo server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on web browser
npm run web
```

## Project Structure

```
src/
├── screens/         # Screen components (pages)
├── components/      # Reusable components
├── navigation/      # Navigation configuration
├── services/        # API client & device services
├── context/         # State management
├── utils/           # Helper functions
└── App.js           # App entry point

app.json            # Expo configuration
```

## Core Screens

### Authentication
- `LoginScreen` - User login
- `RegisterScreen` - Account creation
- `SplashScreen` - Loading/splash

### User Screens
- `DashboardScreen` - Home/dashboard
- `ProfileScreen` - User profile
- `HealthAnalysisScreen` - AI health insights
- `PlanScreen` - Personalized plans
- `ConsultationScreen` - Doctor chat
- `ProgressScreen` - Progress tracking
- `FoodScannerScreen` - Food image analysis
- `TasksScreen` - Daily tasks
- `AlertsScreen` - Notifications

### Worker Screens
- `WorkerDashboard` - Worker home
- `PatientListScreen` - List of patients
- `PatientDetailsScreen` - Patient info
- `ConsultationScreen` - Patient chats

### Admin Screens
- `AdminDashboard` - Admin home
- `UserManagementScreen` - Manage users
- `WorkerManagementScreen` - Manage workers

## Navigation Structure

```
├── UnauthenticatedNavigator
│   ├── Login
│   ├── Register
│   └── Splash
│
├── UserNavigator
│   ├── BottomTabNavigator
│   │   ├── Home (Dashboard)
│   │   ├── Health Analysis
│   │   ├── Plans
│   │   ├── Consultations
│   │   └── Profile
│   │
│   └── StackNavigator
│       ├── Doctor Selection
│       ├── Booking
│       └── More screens...
│
├── WorkerNavigator
│   └── [Worker-specific screens]
│
└── AdminNavigator
    └── [Admin-specific screens]
```

## Components

### Common Components
- `Button` - Reusable button
- `Input` - Text input field
- `Card` - Content card
- `Spinner` - Loading indicator
- `Avatar` - User avatar
- `Badge` - Status badge

### Feature Components
- `HealthCard` - Health metrics display
- `ConsultationChat` - Real-time messaging
- `PlanCard` - Plan preview
- `DoctorCard` - Doctor profile
- `ProgressChart` - Chart visualization

## Services

### API Service
```javascript
import apiClient from '@services/api-client';

const data = await apiClient.get('/endpoint');
await apiClient.post('/endpoint', payload);
```

### Device Services
```javascript
// Camera
import { CameraService } from '@services/camera-service';

// Location
import { LocationService } from '@services/location-service';

// Notifications
import { NotificationService } from '@services/notification-service';
```

## State Management

Using Zustand for global state:

```javascript
import { useAuthStore } from '@context/auth-store';

const { user, login, logout } = useAuthStore();
```

## Styling

### React Native Paper
```javascript
import { Button, Text, Card } from 'react-native-paper';
```

### Custom Styles
- StyleSheet for component-specific styles
- Theme provider for app-wide styling
- Color scheme management

## Environment Variables

Create `.env` file:
```
EXPO_PUBLIC_API_URL=http://localhost:5000/api
EXPO_PUBLIC_SOCKET_URL=http://localhost:5000
```

## Building for Production

### Android APK
```bash
eas build -p android --profile preview
```

### iOS App
```bash
eas build -p ios --profile preview
```

Note: Requires EAS CLI setup

## Testing

```bash
npm run test
```

## Linting

```bash
npm run lint
```

## Important Features

### Permissions
- Camera - for food scanning
- Location - for nearby services
- Health - for wearable data
- Notifications - for alerts

### Background Services
- Health data sync
- Vaccination reminders
- Medication alerts
- Workout notifications

### Offline Support
- Local data caching
- Offline mode detection
- Data sync when online

## Performance Optimization

- Lazy loading screens
- Image optimization
- Network request optimization
- Memory management
- Battery efficiency

## Security

- Secure token storage
- Encrypted local data
- Biometric authentication
- HTTPS only
- API token validation

## Dependencies Overview

- **react-native**: Mobile framework
- **expo**: Development platform
- **react-navigation**: Navigation library
- **react-native-paper**: UI components
- **axios**: HTTP client
- **zustand**: State management
- **socket.io-client**: Real-time messaging

## Troubleshooting

### Port Already in Use
```bash
expo start -c  # Clear cache
```

### Module Not Found
```bash
rm -rf node_modules
npm install
```

### Android Build Issues
- Clear gradle cache: `./gradlew clean`
- Check Java version compatibility

## Next Steps

1. Setup authentication screens
2. Create dashboard layout
3. Build feature screens
4. Implement navigation
5. Add API integration
6. Setup notifications
7. Optimize performance

## Support

For issues or questions, refer to:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- Main README.md

## Deployment

See [Expo Docs](https://docs.expo.dev/distribution/publishing/) for deployment options:
- Expo Go (development)
- Expo Application Services (EAS)
- Custom build pipeline
