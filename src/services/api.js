// src/services/api.js
import axios from 'axios';

// Create an Axios instance with a base URL.
// During development, if we've set up the Vite proxy, requests to /api
// will be forwarded to our Flask backend (http://localhost:5000).
// In production, or if the proxy isn't used, VITE_API_BASE_URL will be used.
// RMEMBER to define VITE_API_BASE_URL in our .env file if we are planing to deploy.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json', // Most of our API requests will send/receive JSON
  },
});

// Request Interceptor: This runs before every request is sent.
// It's used to attach the JWT token from localStorage to the Authorization header.
// This is crucial for protected routes on your backend.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token stored during login
    if (token) {
      // Add the Authorization header with a Bearer token
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Return the modified config
  },
  (error) => {
    // Handle request errors (e.g., network issues)
    return Promise.reject(error);
  }
);

// Response Interceptor: This runs after every response is received.
// It's useful for handling global error conditions, like unauthorized access (401).
api.interceptors.response.use(
  (response) => response, // If response is successful, just return it
  (error) => {
    // If the error response status is 401 (Unauthorized) and it's not a login/register request,
    // it likely means the token is expired or invalid.
    if (error.response && error.response.status === 401 &&
        !['/login', '/register'].includes(window.location.pathname)) {
      // Clear any invalid token and user data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Assuming we also store user info
      // Redirect the user to the login page
      window.location.href = '/login';
      console.error("Unauthorized: Token expired or invalid. Redirecting to login.");
      // Optionally show a toast notification here
      // toast.error("Your session has expired. Please log in again.");
    }
    return Promise.reject(error); // Propagate the error for component-specific handling
  }
);

export default api;