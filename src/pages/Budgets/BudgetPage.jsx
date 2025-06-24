// src/pages/Budgets/BudgetPage.jsx
/**
 * @file BudgetPage.jsx
 * @description Component to allow users to set and view their monthly budgets per category.
 * Initially uses placeholder data for demonstration.
 */
import React, { useState } from 'react';

// Placeholder data for categories and budgets.
// During finalisation, categories would come from a backend API,
// and budgets would be fetched/managed via a backend API.
const dummyCategories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Transport' },
  { id: 3, name: 'Utilities' },
  { id: 4, name: 'Entertainment' },
  { id: 5, name: 'Shopping' },
  { id: 6, name: 'Rent' },
  { id: 7, name: 'Healthcare' },
  { id: 8, name: 'Savings' },
  { id: 9, name: 'Education' },
  { id: 10, name: 'Other' },
];

// Placeholder for current month's budgets.
// Structure: { categoryId: amount }
const initialBudgets = {
  1: 1500, // Food
  2: 300,  // Transport
  3: 800,  // Utilities
  4: 200,  // Entertainment
};

/**
 * BudgetPage Component
 * Displays a form to set budgets for different categories and
 * a summary of existing budgets.
 */
const BudgetPage = () => {
  // State to manage budget input for each category
  const [budgets, setBudgets] = useState(initialBudgets);
  const [selectedMonth, setSelectedMonth] = useState('June 2025'); // Placeholder for month selection

  // Function to handle changes in budget input fields
  const handleBudgetChange = (categoryId, value) => {
    setBudgets((prevBudgets) => ({
      ...prevBudgets,
      [categoryId]: parseFloat(value) || 0, // Ensure it's a number, default to 0 if invalid
    }));
  };

  // Function to simulate saving budgets
  const handleSaveBudgets = (e) => {
    e.preventDefault();
    console.log(`Saving budgets for ${selectedMonth}:`, budgets);
    alert(`Budgets for ${selectedMonth} saved! (Backend integration pending)`);
    // we would send this 'budgets' data to our backend API
  };

  // Placeholder for actual spending data by category for the current month
  // This would ideally come from backends's expense aggregation API
  const dummyActualSpending = {
    1: 1200, // Food
    2: 250,  // Transport
    3: 750,  // Utilities
    4: 220,  // Entertainment (over budget)
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
        Monthly Budgets for {selectedMonth}
      </h1>

      {/* Month Selection (Placeholder) */}
      <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color">
        <h2 className="text-xl font-semibold text-text-secondary mb-4">Select Month</h2>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-md bg-primary border border-border-color text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-light"
        >
          <option value="May 2025">May 2025</option>
          <option value="June 2025">June 2025</option>
          <option value="July 2025">July 2025</option>
        </select>
        <p className="text-sm text-text-tertiary mt-2">
          Future: This will load budgets for the selected month.
        </p>
      </div>

      {/* Set Budgets Form */}
      <form onSubmit={handleSaveBudgets} className="bg-secondary p-6 rounded-lg shadow-md border border-border-color space-y-6">
        <h2 className="text-xl font-semibold text-text-secondary mb-4">Set Budgets Per Category</h2>
        {dummyCategories.map((category) => (
          <div key={category.id} className="flex items-center justify-between py-2 border-b border-border-color last:border-b-0">
            <label htmlFor={`budget-${category.id}`} className="text-lg text-text-primary w-1/3">
              {category.name}:
            </label>
            <div className="flex items-center w-2/3">
              {/* UPDATED: Currency prefix for input */}
              <span className="text-lg text-text-secondary mr-2">Ksh </span>
              <input
                type="number"
                id={`budget-${category.id}`}
                value={budgets[category.id] || ''}
                onChange={(e) => handleBudgetChange(category.id, e.target.value)}
                className="flex-grow p-2 rounded-md bg-primary border border-border-color text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-light"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-light transition-colors font-semibold shadow-md"
        >
          Save Budgets
        </button>
      </form>

      {/* Budget vs. Actuals Summary */}
      <div className="bg-secondary p-6 rounded-lg shadow-md border border-border-color">
        <h2 className="text-xl font-semibold text-text-secondary mb-4">Budget vs. Actual Spending</h2>
        {dummyCategories.filter(cat => budgets[cat.id] > 0).length === 0 ? (
          <p className="text-text-secondary">No budgets set for the selected month yet.</p>
        ) : (
          <div className="space-y-4">
            {dummyCategories
              .filter(cat => budgets[cat.id] > 0) // Only show categories with a set budget
              .map((category) => {
                const budgetedAmount = budgets[category.id] || 0;
                const actualSpent = dummyActualSpending[category.id] || 0;
                const remaining = budgetedAmount - actualSpent;
                const isOverBudget = remaining < 0;
                const percentageSpent = budgetedAmount > 0 ? (actualSpent / budgetedAmount) * 100 : 0;

                return (
                  <div key={category.id} className="border-b border-border-color pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg text-text-primary font-semibold">{category.name}</span>
                      {/* UPDATED: Currency display for actual vs budgeted */}
                      <span className="text-md text-text-secondary">
                        Ksh {actualSpent.toFixed(2)} / Ksh {budgetedAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-primary-light rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${isOverBudget ? 'bg-error' : 'bg-success'}`}
                        style={{ width: `${Math.min(percentageSpent, 100)}%` }}
                      ></div>
                    </div>
                    {/* UPDATED: Currency display for remaining/over budget */}
                    <p className={`text-sm mt-1 ${isOverBudget ? 'text-error' : 'text-text-tertiary'}`}>
                      {isOverBudget ?
                        `Over budget by Ksh ${Math.abs(remaining).toFixed(2)}` :
                        `Ksh ${remaining.toFixed(2)} remaining`
                      }
                    </p>
                  </div>
                );
              })}
          </div>
        )}
        <p className="text-sm text-text-tertiary mt-4">
          Future: Actual spending will be pulled from our recorded expenses.
        </p>
      </div>
    </div>
  );
};

export default BudgetPage;