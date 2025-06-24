// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; // Import our configured Axios instance
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // To redirect after login/logout

// 1. Create the Auth Context
// This will hold the authentication state and functions.
// We export it so other components can use `useContext(AuthContext)`.
const AuthContext = createContext(undefined); // Default value is undefined initially

// 2. Create the Auth Provider Component
// This component will wrap our entire application (or parts of it)
// and provide the authentication context to its children.
export const AuthProvider = ({ children }) => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // State to store user information (e.g., username)
  const [user, setUser] = useState(null);
  // State to indicate if the authentication check is in progress (useful for initial load)
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // Hook to programmatically navigate

  // Effect to run once on component mount to check for existing token
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user'); // Assuming you store user info as stringified JSON

    if (token && storedUser) {
      try {
        // Attempt to parse stored user data
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUser(parsedUser);
        // Optionally, verify token validity with backend here if desired
        // For now, presence of token is enough for initial state
      } catch (error) {
        console.error("Failed to parse user from localStorage or invalid token", error);
        // Clear invalid data if parsing fails
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
        toast.error("Your session was invalid. Please log in again.");
      }
    }
    setLoading(false); // Authentication check complete
  }, []);

  // Function to handle user login
  const login = (token, userData) => {
    // Store token and user data in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data as a string
    setIsAuthenticated(true);
    setUser(userData);
    toast.success(`Welcome, ${userData.username || 'user'}!`);
    navigate('/'); // Redirect to dashboard after successful login
  };

  // Function to handle user logout
  const logout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    toast.info('You have been logged out.');
    navigate('/login'); // Redirect to login page after logout
  };

  // The value provided to children through the context
  const contextValue = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook to consume the Auth Context
// This makes it easier for components to access authentication state and functions.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // This error helps ensure the hook is used within an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};