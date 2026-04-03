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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 mt-6 sm:mt-8 lg:mt-10">
      
      {/* Balance */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#1C2E4A] shadow hover:shadow-lg transition">
        <h2 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Total Balance
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mt-1">
          ₹{balance.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Income */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#1C2E4A] shadow hover:shadow-lg transition">
        <h2 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Income
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-500 mt-1">
          ₹{income.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Expenses */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white dark:bg-[#1C2E4A] shadow hover:shadow-lg transition">
        <h2 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Expenses
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500 mt-1">
          ₹{expense.toLocaleString("en-IN")}
        </p>
      </div>

    </div>
  );
};

export default SummaryCards;
