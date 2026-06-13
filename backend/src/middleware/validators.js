/**
 * Validation Middleware
 * Validate request data
 */

import { validationResult } from 'express-validator';
import { ValidationError } from '../utils/errors.js';

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return next(new ValidationError(errorMessages.join(', ')));
  }
  next();
};

/**
 * Pagination Middleware
 * Add pagination parameters to request
 */
export const paginate = (req, res, next) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 10);
  const offset = (page - 1) * limit;

  req.pagination = { page, limit, offset };
  next();
};

/**
 * Rate Limiting Middleware (basic)
 * Implement with express-rate-limit in production
 */
export const rateLimiter = (maxRequests = 100, windowMs = 15 * 60 * 1000) => {
  const requests = new Map();

  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const userRequests = requests.get(key) || [];

    // Remove old requests outside the window
    const validRequests = userRequests.filter((time) => now - time < windowMs);

    if (validRequests.length >= maxRequests) {
      return res.status(429).json({
        status: 'error',
        message: 'Too many requests, please try again later',
      });
    }

    validRequests.push(now);
    requests.set(key, validRequests);
    next();
  };
};
