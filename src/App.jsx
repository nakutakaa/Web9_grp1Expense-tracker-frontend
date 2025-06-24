import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import routing components

// Placeholder Page Components (We'll create these files next)
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Ensures the 'dark' class is applied to the html element for the dark theme
  // on initial load. This is crucial for consistent dark mode.
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // we might want to add logic here later to read user preference from localStorage
    // and apply 'dark' or remove it accordingly.
  }, []);

  return (
    // Defining application routes
    <Routes>
      {/* Public Routes (Accessible without login) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes (Will be guarded later with authentication) */}
      {/* For now, just direct access to simulate the dashboard */}
      <Route path="/" element={<DashboardPage />} /> {/* Main dashboard */}
      {/* Example of a 404 Not Found route - catches any undefined paths */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;