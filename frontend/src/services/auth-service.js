/**
 * Auth Service
 * Handles authentication API calls
 */

import apiClient from './api-client';

export const authService = {
  /**
   * Register new user
   */
  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    if (response.data?.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response;
  },

  /**
   * Login user
   */
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password });
    if (response.data?.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response;
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  /**
   * Refresh JWT token
   */
  refreshToken: async () => {
    return apiClient.post('/auth/refresh-token');
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    return apiClient.get('/auth/me');
  },
};

export default authService;
