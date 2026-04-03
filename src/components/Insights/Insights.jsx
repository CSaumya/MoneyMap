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
    if (monthly.expense > monthly.income) {
      return "You are spending more than you earn!";
    }
    return "Your savings are healthy this month!";
  }, [monthly]);

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">

      <div className="p-4 rounded-xl shadow bg-white dark:bg-[#1C2E4A]">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Highest Spending</h3>
        <p className="text-lg font-bold mt-2 dark:text-gray-300">
          {highestCategory.maxCategory}
        </p>
        <p className="text-red-500">
          ₹{highestCategory.maxAmount}
        </p>
      </div>

      <div className="p-4 rounded-xl shadow bg-white dark:bg-[#1C2E4A]">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Monthly Overview</h3>

        <p className="text-green-500 font-semibold mt-2">
          Income: ₹{monthly.income}
        </p>

        <p className="text-red-500 font-semibold">
          Expense: ₹{monthly.expense}
        </p>
      </div>

      <div className="p-4 rounded-xl shadow bg-white dark:bg-[#1C2E4A]">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Insight</h3>
        <p className="mt-2 font-medium dark:text-white">
          {insightMessage}
        </p>
      </div>

    </div>
  );
};

export default Insights;