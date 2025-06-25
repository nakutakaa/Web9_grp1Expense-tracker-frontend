// src/pages/Income/IncomePage.jsx

import React, { useState } from "react";
import "./income.css";

export default function IncomePage() {
  const [incomes, setIncomes] = useState([
    { id: 1, source: "Salary", amount: 50000 },
    { id: 2, source: "Freelancing", amount: 15000 },
  ]);

  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!source || !amount) return;

    const newIncome = {
      id: incomes.length + 1,
      source,
      amount: parseFloat(amount),
    };

    setIncomes([...incomes, newIncome]);
    setSource("");
    setAmount("");
  };

  return (
    <div className="IncomePage">
      <h1>Your Income Tracker</h1>

      <form className="income-form" onSubmit={handleAddIncome}>
        <input
          type="text"
          placeholder="Income Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Income</button>
      </form>

      <div className="income-list">
        <h2>Income List</h2>
        {incomes.length === 0 ? (
          <p>No income records yet.</p>
        ) : (
          <ul>
            {incomes.map((income) => (
              <li key={income.id}>
                {income.source} -{" "}
                <strong>KES {income.amount.toLocaleString()}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
