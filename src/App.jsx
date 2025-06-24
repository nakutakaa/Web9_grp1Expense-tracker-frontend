/**
 * @file App.jsx
 * @description Our main application component, handling global dark mode, routing,
 * and protected routes for secure access.
 * @author Your Name <your.email@example.com>
 * @date June 24, 2025
 */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // No longer need 'Navigate' directly here
import Navbar from './components/Layout/Navbar';

// Our page components
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Our custom components
import ProtectedRoute from './components/ProtectedRoute'; // Importing our ProtectedRoute

function App() {
  // We ensure the 'dark' class is applied to the html element for our dark theme
  // on initial load. This sets the base dark background for our application.
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // In the future, we might add logic here to read a user's preferred theme
    // from localStorage and apply or remove the 'dark' class accordingly.
  }, []);

  return (
    // Our main routing structure for the application.
    // We define which components render for which URL paths.

    <div className="App">
      <Navbar/>
      <Routes>
        {/* Public Routes: These routes are accessible to all users,
      even if they are not logged in. */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes: All routes nested within this `Route` element
      will be guarded by our `ProtectedRoute` component.
      This means a user must be authenticated to access any of these paths. */}
        <Route element={<ProtectedRoute />}>
          {/* Our main dashboard page - now protected.
        Users will be redirected to login if not authenticated. */}
          <Route path="/" element={<DashboardPage />} />
          {/* We will add more protected routes here later, such as
        /expenses, /expenses/add, /expenses/edit/:id, /budgets, etc. */}
        </Route>

        {/* Catch-all Route: This route acts as a fallback.
      If no other route matches the URL, our NotFoundPage will be displayed. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;