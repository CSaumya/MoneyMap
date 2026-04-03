import React from "react";
import { transactionsData } from "../../data/mockData";

const SummaryCards = () => {
  const transactions = transactionsData;

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-10">
      
      <div className="p-4 rounded-xl bg-white dark:bg-[#1C2E4A] shadow">
        <h2 className="text-sm text-gray-500 dark:text-gray-400">
          Total Balance
        </h2>
        <p className="text-2xl font-bold text-blue-500">
          ₹{balance.toLocaleString("en-IN")}
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white dark:bg-[#1C2E4A] shadow">
        <h2 className="text-sm text-gray-500 dark:text-gray-400">
          Income
        </h2>
        <p className="text-2xl font-bold text-green-500">
          ₹{income.toLocaleString("en-IN")}
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white dark:bg-[#1C2E4A] shadow">
        <h2 className="text-sm text-gray-500 dark:text-gray-400">
          Expenses
        </h2>
        <p className="text-2xl font-bold text-red-500">
          ₹{expense.toLocaleString("en-IN")}
        </p>
      </div>

    </div>
  );
};

export default SummaryCards;