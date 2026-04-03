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
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const chartData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  return (
    <div className="bg-white dark:bg-[#1C2E4A] p-4 sm:p-5 lg:p-6 rounded-xl shadow mt-6 sm:mt-8 lg:mt-10 w-full">
      
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-gray-200">
        Spending Breakdown
      </h2>

      {/* Responsive Chart Wrapper */}
      <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius="70%"
              innerRadius="40%"
              label={false}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryPie;
