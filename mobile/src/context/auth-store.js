/**
 * Auth Zustand Store for Mobile
 * Global authentication state management
 */

import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: true,
  isAuthorized: false,

  // Initialize auth state from secure storage
  initAuth: async () => {
    try {
      const token = await SecureStore.getItemAsync('authToken');
      const userJson = await SecureStore.getItemAsync('user');
      
      if (token && userJson) {
        set({
          token,
          user: JSON.parse(userJson),
          isAuthorized: true,
        });
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  // Set authenticated state
  setAuth: (user, token) => {
    set({
      user,
      token,
      isAuthorized: true,
    });
  },

  // Clear auth state
  clearAuth: async () => {
    await SecureStore.deleteItemAsync('authToken');
    await SecureStore.deleteItemAsync('user');
    set({
      user: null,
      token: null,
      isAuthorized: false,
    });
  },

  // Update user profile
  updateUser: (userData) => {
    set((state) => ({
      user: { ...state.user, ...userData },
    }));
  },
}));
