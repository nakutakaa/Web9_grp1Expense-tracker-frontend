// src/layouts/DashboardLayout.jsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Outlet renders child routes, Link for navigation
import { useAuth } from '../context/AuthContext'; // Our custom authentication hook

/**
 * DashboardLayout Component
 * This component provides a consistent layout for all protected routes in our application.
 */
const DashboardLayout = () => {
  // We use our authentication context to access the logout function and user information.
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-primary text-text-primary flex flex-col">
      {/* Our application header */}
      <header className="bg-secondary p-4 shadow-md border-b border-border-color">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Our application logo/title */}
          <Link to="/" className="text-2xl font-bold text-accent hover:text-accent-light transition-colors">
            Our Expense Tracker
          </Link>

          {/* Our main navigation links */}
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-text-primary hover:text-accent transition-colors text-lg font-medium"
              >
                Dashboard
              </Link>
            </li>
            <li>
              {/* Placeholder for Expenses link */}
              <Link
                to="/expenses" // We'll create this route later
                className="text-text-primary hover:text-accent transition-colors text-lg font-medium"
              >
                Expenses
              </Link>
            </li>
            <li>
              {/* Placeholder for Budgets link */}
              <Link
                to="/budgets" // We'll create this route later
                className="text-text-primary hover:text-accent transition-colors text-lg font-medium"
              >
                Budgets
              </Link>
            </li>
          </ul>

          {/* User info and Logout button */}
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-text-secondary text-lg">
                Welcome, <span className="font-semibold text-accent">{user.username || 'User'}</span>!
              </span>
            )}
            <button
              onClick={logout} // Our logout function from AuthContext
              className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-light transition-colors text-lg font-medium"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Our main content area.
          <Outlet /> will render the specific route component (e.g., DashboardPage) */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Our application footer (optional, for future use) */}
      {/*
      <footer className="bg-secondary p-4 text-center text-text-secondary border-t border-border-color">
        <p>&copy; {new Date().getFullYear()} Our Expense Tracker. All rights reserved.</p>
      </footer>
      */}
    </div>
  );
};

export default DashboardLayout;