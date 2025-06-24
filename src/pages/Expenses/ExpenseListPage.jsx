// src/pages/Expenses/ExpenseListPage.jsx
/**
 * @file ExpenseListPage.jsx
 * @description Component to display a list of expenses, with options to add new,
 * edit existing, and delete expenses. Initially uses placeholder data.
 */
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to add/edit pages

// Placeholder data for expenses. This will be replaced with API calls later.
const dummyExpenses = [
  { id: 1, description: 'Groceries from Supermart', amount: 850.50, category: 'Food', date: '2025-06-20' },
  { id: 2, description: 'Bus fare to work', amount: 150.00, category: 'Transport', date: '2025-06-19' },
  { id: 3, description: 'Electricity Bill', amount: 1200.00, category: 'Utilities', date: '2025-06-18' },
  { id: 4, description: 'Dinner with friends', amount: 1100.00, category: 'Food', date: '2025-06-17' },
  { id: 5, description: 'Movie tickets', amount: 400.00, category: 'Entertainment', date: '2025-06-16' },
  { id: 6, description: 'New shirt', amount: 1500.00, category: 'Shopping', date: '2025-06-15' },
];

/**
 * ExpenseListPage Component
 * Displays a table of expenses. Includes buttons for adding new expenses,
 * and actions (edit/delete) for each expense item.
 */
const ExpenseListPage = () => {
  // In a real application, you would fetch expenses from the backend here
  // using useEffect and useState, and manage loading/error states.
  // For now, we'll just use dummyExpenses.

  const handleDelete = (id) => {
    // Implement delete logic here. For now, it's a placeholder.
    console.log(`Deleting expense with ID: ${id}`);
    alert(`Deleting expense with ID: ${id}. (Not yet implemented)`);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Your Expenses</h1>
        <Link
          to="/expenses/add"
          className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-light transition-colors font-semibold shadow-md"
        >
          Add New Expense
        </Link>
      </div>

      {dummyExpenses.length === 0 ? (
        <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color text-center text-text-secondary">
          <p className="text-lg">No expenses recorded yet. Click "Add New Expense" to get started!</p>
        </div>
      ) : (
        <div className="bg-secondary rounded-lg shadow-md border border-border-color overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-color">
              <thead className="bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-tertiary uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color">
                {dummyExpenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-primary-light transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{expense.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">{expense.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{expense.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent">${expense.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/expenses/edit/${expense.id}`} className="text-info hover:text-info-light mr-4">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(expense.id)}
                        className="text-error hover:text-error-light"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseListPage;