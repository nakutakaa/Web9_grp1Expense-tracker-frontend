import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="min-h-screen bg-primary text-text-primary flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8 text-accent">Welcome to Your Expense Tracker Dashboard!</h2>
      <nav className="flex space-x-6">
        <Link
          to="/login"
          className="px-6 py-3 bg-secondary text-text-primary rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 border border-border-color"
        >
          Go to Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-secondary text-text-primary rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 border border-border-color"
        >
          Go to Register
        </Link>
      </nav>
    </div>
  );
}

export default DashboardPage;