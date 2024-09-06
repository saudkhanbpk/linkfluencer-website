// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5005';

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to handle 401 errors and refresh tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error status is 401 (Unauthorized) and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      // Attempt to refresh the access token
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        // Retry the original request after refreshing the token
        return api(originalRequest);
      } else {
        // Handle logout if token refresh fails
        handleLogout();
      }
    }

    // If the error is not handled, reject it
    return Promise.reject(error);
  }
);

// Function to refresh the access token using the refresh token
export const refreshAccessToken = async () => {
  try {
    const response = await api.post('/auth/refresh-token');

    if (response.status !== 200) {
      throw new Error('Failed to refresh token');
    }

    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
};

// Handle user logout and clear state
export const handleLogout = async () => {
  try {
    await api.post('/auth/logout');
    updateUserState(null);
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

// Function to update user state in global context or Redux store
const updateUserState = (user) => {
  // Implement your state management here, e.g., Redux dispatch or Context API update
};

export default api;