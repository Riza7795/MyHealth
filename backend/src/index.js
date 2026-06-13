import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import 'express-async-errors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../.env' });

// Initialize Express app
const app = express();

// ==========================================
// Middleware Setup
// ==========================================

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}));

// Body Parser Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Compression Middleware
app.use(compression());

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// ==========================================
// API Routes
// ==========================================

// Example route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'HealthMate API Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

import authRoutes from './routes/auth.routes.js';
app.use('/api/auth', authRoutes);

// ==========================================
// Error Handling Middleware
// ==========================================

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
    path: req.originalUrl,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'development' 
    ? err.message 
    : 'Internal Server Error';

  console.error('[ERROR]', err);

  res.status(statusCode).json({
    status: 'error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

// ==========================================
// Server Startup
// ==========================================

import { sequelize } from './models/index.js';
import { testConnection } from './config/database.js';

const PORT = process.env.BACKEND_PORT || 5000;

const startServer = async () => {
  try {
    await testConnection();
    // Sync models - force: true in development to recreate tables if needed
    await sequelize.sync({ force: process.env.NODE_ENV === 'development' });
    console.log('✅ Synchronized database models successfully.');

    const server = app.listen(PORT, () => {
      console.log(`
========================================
HealthMate AI - Backend Server
========================================
🚀 Server running on http://localhost:${PORT}
📊 Environment: ${process.env.NODE_ENV}
📦 Node Version: ${process.version}
========================================
      `);
    });

    // Graceful Shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM signal received: closing HTTP server');
      server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('SIGINT signal received: closing HTTP server');
      server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;