import React from "react";
import { transactionsData } from "../../data/mockData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b", "#8b5cf6"];

const CategoryPie = () => {
  const transactions = transactionsData;

  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!categoryData[t.category]) {
        categoryData[t.category] = 0;
      }
      categoryData[t.category] += t.amount;
    }
  });

  const chartData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div className="bg-white dark:bg-[#1C2E4A] p-4 rounded-xl shadow mt-10">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Spending Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPie;