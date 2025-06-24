// src/pages/Dashboard/DashboardPage.jsx
/**
 * @file DashboardPage.jsx
 * @description Displays the user's expense tracking dashboard with spending summaries,
 * quick actions, and a spending by category chart.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CategorySpendingBarChart from '../../components/Charts/CategorySpendingBarChart';

function DashboardPage() {
  const { user } = useAuth();

  // Dummy data for spending by category (for the chart)
  // This will eventually come from your backend's expense aggregation API
  const dummyCategorySpending = [
    { category: 'Food', amount: 1200 },
    { category: 'Transport', amount: 250 },
    { category: 'Utilities', amount: 750 },
    { category: 'Entertainment', amount: 220 },
    { category: 'Shopping', amount: 450 },
    { category: 'Education', amount: 600 },
  ];

  return (
    // The main container for the dashboard content.
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
        Welcome to Your Expense Tracker Dashboard,{' '}
        <span className="text-accent">{user?.email || 'User'}</span>!
      </h1>

      {/* This section contains overall summaries and quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Spending Card */}
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color">
          <h2 className="text-xl font-semibold text-text-secondary mb-4">Total Spending (This Month)</h2>
          {/* UPDATED: Currency symbol to Ksh */}
          <p className="text-4xl font-bold text-accent">Ksh 2,920.00</p> {/* Dummy value */}
          <p className="text-text-tertiary mt-2">
            Future: Actual total spending from our recorded expenses.
          </p>
        </div>

        {/* Spending by Category Summary */}
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color">
          <h2 className="text-xl font-semibold text-text-secondary mb-4">Top Categories (This Month)</h2>
          <ul className="space-y-2 text-text-primary">
            {/* UPDATED: Currency symbol to Ksh */}
            <li>Food: Ksh 1200.00</li> {/* Dummy value */}
            <li>Utilities: Ksh 750.00</li> {/* Dummy value */}
            <li>Shopping: Ksh 450.00</li> {/* Dummy value */}
          </ul>
          <p className="text-text-tertiary mt-2">
            Future: Actual spending breakdown by top categories.
          </p>
        </div>

        {/* Quick Actions / Other Info */}
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-text-secondary mb-4">Quick Actions</h2>
            <Link
              to="/expenses/add"
              className="w-full text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-light transition-colors font-semibold block mb-3"
            >
              Add New Expense
            </Link>
            <Link
              to="/budgets"
              className="w-full text-center px-4 py-2 bg-info text-white rounded-md hover:bg-info-light transition-colors font-semibold block"
            >
              Set Budgets
            </Link>
          </div>
          <p className="text-sm text-text-tertiary mt-4">
            Future: Integrate budget progress or alerts here.
          </p>
        </div>
      </div>

      {/* Spending by Category Chart */}
      <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color mt-8">
        <h2 className="text-xl font-semibold text-text-secondary mb-4">Spending Overview Chart</h2>
        {/* Pass the dummy data to the chart component */}
        <CategorySpendingBarChart data={dummyCategorySpending} />
        <p className="text-sm text-text-tertiary mt-4">
            Future: This chart will display real spending data fetched from our backend.
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;