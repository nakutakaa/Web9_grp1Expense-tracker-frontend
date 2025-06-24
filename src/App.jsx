// src/App.jsx
/**
 * @file App.jsx
 * @description Our main application component, handling global dark mode, routing,
 * and protected routes for secure access.
 */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Our page components
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import ExpenseListPage from './pages/Expenses/ExpenseListPage';
import BudgetPage from './pages/Budgets/BudgetPage'; 

// Our custom components and layouts
import ProtectedRoute from './components/ProtectedRoute'; // Importing our ProtectedRoute
import DashboardLayout from './layouts/DashboardLayout'; // Importing our DashboardLayout

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
    // We removed the <div className="App"> wrapper here as the DashboardLayout
    // already provides the full page structure including min-h-screen.
    <Routes>
      {/* Public Routes: These routes are accessible to all users,
          even if they are not logged in. */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes: All routes nested within this `Route` element
          will be guarded by our `ProtectedRoute` component.
          This means a user must be authenticated to access any of these paths.
          The `DashboardLayout` now wraps these protected routes, providing
          a consistent header, navigation, and logout functionality. */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}> {/* Nested DashboardLayout */}
          {/* Our main dashboard page - now protected and within the common layout */}
          <Route path="/" element={<DashboardPage />} />
          {/* NEW: Our Expense List Page route */}
          <Route path="/expenses" element={<ExpenseListPage />} />
          {/* Future: We'll add more protected routes here later (e.g., /expenses/add, /budgets) */}
          <Route path="/budgets" element={<BudgetPage />} />
        </Route>
      </Route>

      {/* Catch-all Route: This route acts as a fallback.
          If no other route matches the URL, our NotFoundPage will be displayed. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;