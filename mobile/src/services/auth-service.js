/**
 * Auth Service for Mobile
 * Handles authentication API calls
 */

import apiClient from './api-client';
import * as SecureStore from 'expo-secure-store';

export const authService = {
  /**
   * Register new user
   */
  register: async (userData) => {
    return apiClient.post('/auth/register', userData);
  },

  /**
   * Login user
   */
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password });
    if (response.token) {
      await SecureStore.setItemAsync('authToken', response.token);
      await SecureStore.setItemAsync('user', JSON.stringify(response.user));
    }
    return response;
  },

  /**
   * Logout user
   */
  logout: async () => {
    try {
      await SecureStore.deleteItemAsync('authToken');
      await SecureStore.deleteItemAsync('user');
    } catch (error) {
      console.error('Error logging out:', error);
    }
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
