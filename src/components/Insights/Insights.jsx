import React, { useMemo } from "react";
import { transactionsData } from "../../data/mockData";

const Insights = () => {
  const data = transactionsData;

  const highestCategory = useMemo(() => {
    const categoryMap = {};

    data.forEach((t) => {
      if (t.type === "expense") {
        categoryMap[t.category] =
          (categoryMap[t.category] || 0) + t.amount;
      }
    });

    let maxCategory = "";
    let maxAmount = 0;

    Object.entries(categoryMap).forEach(([cat, amt]) => {
      if (amt > maxAmount) {
        maxAmount = amt;
        maxCategory = cat;
      }
    });

    return { maxCategory, maxAmount };
  }, [data]);

  const monthly = useMemo(() => {
    let income = 0;
    let expense = 0;

    data.forEach((t) => {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
    });

    return { income, expense };
  }, [data]);

  const insightMessage = useMemo(() => {
    return monthly.expense > monthly.income
      ? "⚠️ You are spending more than you earn!"
      : "✅ Your savings are healthy this month!";
  }, [monthly]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
      
      {/* Highest Spending */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl shadow bg-white dark:bg-[#1C2E4A] hover:shadow-lg transition">
        <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Highest Spending
        </h3>

        <p className="text-base sm:text-lg font-bold mt-2 dark:text-gray-200 capitalize">
          {highestCategory.maxCategory || "N/A"}
        </p>

        <p className="text-red-500 font-semibold text-sm sm:text-base">
          ₹{highestCategory.maxAmount.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Monthly Overview */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl shadow bg-white dark:bg-[#1C2E4A] hover:shadow-lg transition">
        <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Monthly Overview
        </h3>

        <p className="text-green-500 font-semibold mt-2 text-sm sm:text-base">
          Income: ₹{monthly.income.toLocaleString("en-IN")}
        </p>

        <p className="text-red-500 font-semibold text-sm sm:text-base">
          Expense: ₹{monthly.expense.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Insight */}
      <div className="p-4 sm:p-5 lg:p-6 rounded-xl shadow bg-white dark:bg-[#1C2E4A] hover:shadow-lg transition">
        <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Insight
        </h3>

        <p className="mt-2 font-medium text-sm sm:text-base dark:text-gray-100 leading-relaxed">
          {insightMessage}
        </p>
      </div>

    </div>
  );
};

export default Insights;
