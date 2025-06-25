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
import Home from './pages/Homepage/Home';
import Navbar from './components/Layout/Navbar';

// Our custom components and layouts
import ProtectedRoute from './components/ProtectedRoute'; // Importing our ProtectedRoute
import DashboardLayout from './layouts/DashboardLayout'; // Importing our DashboardLayout
import IncomePage from './pages/incomepage/income';

function App() {
  // We ensure the 'dark' class is applied to the html element for our dark theme
  // on initial load. This sets the base dark background for our application.
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // In the future, we might add logic here to read a user's preferred theme
    // from localStorage and apply or remove the 'dark' class accordingly.
  }, []);

  return (
    <>
      {/* Global Navbar that appears on all pages */}
      <Navbar />

      {/* Main routing structure */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/expenses" element={<ExpenseListPage />} />
            <Route path="/budgets" element={<BudgetPage />} />
            <Route path="/income" element={<IncomePage />} />
          </Route>
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
      }
export default App;