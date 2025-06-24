// src/layouts/DashboardLayout.jsx
/**
 * @file DashboardLayout.jsx
 * @description Defines our main application layout for authenticated users,
 * including a header with navigation, user information, logout button, and content area.
 */
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext'; // Our custom authentication hook

/**
 * DashboardLayout Component
 * This component provides a consistent layout for all protected routes in our application.
 * It includes a header with navigation links and a logout button.
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
          <NavLink to="/" className="text-2xl font-bold text-accent hover:text-accent-light transition-colors">
            Our Expense Tracker
          </NavLink>

          {/* Our main navigation links */}
          <ul className="flex space-x-6">
            <li>
              {/* NavLink for Dashboard, applies active style if currently on this route */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-text-primary hover:text-accent transition-colors text-lg font-medium ${
                    isActive ? 'border-b-2 border-accent pb-1' : '' // Add a bottom border when active
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              {/* NavLink for Expenses, applies active style if currently on this route */}
              <NavLink
                to="/expenses"
                className={({ isActive }) =>
                  `text-text-primary hover:text-accent transition-colors text-lg font-medium ${
                    isActive ? 'border-b-2 border-accent pb-1' : '' // Add a bottom border when active
                  }`
                }
              >
                Expenses
              </NavLink>
            </li>
            <li>
              {/* NavLink for Budgets, applies active style if currently on this route */}
              <NavLink
                to="/budgets"
                className={({ isActive }) =>
                  `text-text-primary hover:text-accent transition-colors text-lg font-medium ${
                    isActive ? 'border-b-2 border-accent pb-1' : '' // Add a bottom border when active
                  }`
                }
              >
                Budgets
              </NavLink>
            </li>
          </ul>

          {/* User info and Logout button */}
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-text-secondary text-lg">
                Welcome, <span className="font-semibold text-accent">{user.email || "user"}</span>!
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