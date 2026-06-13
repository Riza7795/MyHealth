/**
 * Authentication Middleware
 * Verify JWT tokens and protect routes
 */

import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../utils/errors.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return next(new AuthenticationError('Access token is required'));
  }

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
    if (err) {
      return next(new AuthenticationError('Invalid or expired token'));
    }
    req.user = user;
    next();
  });
};

/**
 * Role-based Authorization Middleware
 * Check if user has required role
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AuthenticationError('User not authenticated'));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new AuthorizationError(
          `Access denied. Required roles: ${roles.join(', ')}`
        )
      );
    }

    next();
  };
};

/**
 * Optional Authentication Middleware
 * Doesn't throw error if token is missing
 */
export const authenticateTokenOptional = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
      if (!err) {
        req.user = user;
      }
    });
  }

  next();
};
