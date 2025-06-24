// src/components/ProtectedRoute.jsx
/**
 * @file ProtectedRoute.jsx
 * @description A route component that guards access to child routes,
 * allowing only authenticated users to proceed.
 * @author Your Name <your.email@example.com>
 * @date June 24, 2025
 */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Our custom authentication hook
import Spinner from './Spinner'; // Our loading spinner component

/**
 * ProtectedRoute Component
 * This component checks the user's authentication status using our `useAuth` hook.
 * - If authentication is still being checked (`loading` is true), we show a spinner.
 * - If the user is authenticated (`isAuthenticated` is true), we render the child routes via `Outlet`.
 * - If the user is not authenticated, we redirect them to the login page.
 * @returns {JSX.Element} The rendered protected content, spinner, or login redirect.
 */
const ProtectedRoute = () => {
  // Destructure authentication status and loading state from our context
  const { isAuthenticated, loading } = useAuth();

  // If the authentication check is still in progress, show our spinner
  if (loading) {
    return <Spinner />;
  }

  // If authenticated, render the child routes (e.g., Dashboard, Expenses)
  // Otherwise, redirect to the login page, replacing the current history entry
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;