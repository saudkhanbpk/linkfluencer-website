// api.js
import axios from 'axios';

const API_URL = 'http://15.237.117.45/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshed = await refreshAccessToken();
      if (refreshed) {
        return api(originalRequest);
      } else {
        handleLogout();
      }
    }

    return Promise.reject(error);
  }
);

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

export const handleLogout = async () => {
  try {
    await api.post('/auth/logout');
    updateUserState(null);
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const updateUserState = (user) => {
};

export default api;
