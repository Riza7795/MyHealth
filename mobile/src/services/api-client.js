/**
 * API Client Service for Mobile
 * Centralized axios instance with interceptors
 */

import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {
    try {
      // Get JWT token from secure storage
      const token = await SecureStore.getItemAsync('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Token expired or unauthorized
      try {
        await SecureStore.deleteItemAsync('authToken');
        await SecureStore.deleteItemAsync('user');
        // Navigate to login screen
        // navigation.navigate('Login');
      } catch (err) {
        console.error('Error clearing auth data:', err);
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
