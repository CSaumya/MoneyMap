import React from "react";
import { transactionsData } from "../../data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BalanceChart = () => {
  const transactions = transactionsData;

  const monthlyData = {};

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = { name: month, income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthlyData[month].income += t.amount;
    } else {
      monthlyData[month].expense += t.amount;
    }
  });

  const chartData = Object.values(monthlyData);

  return (
    <div className="bg-white dark:bg-[#1C2E4A] p-4 sm:p-5 lg:p-6 rounded-xl shadow w-full">
      
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-gray-200">
        Balance Trend
      </h2>

      {/* Responsive Chart Container */}
      <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            
            {/* Grid (clean UI improvement) */}
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />

            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip />

            {/* Income Line */}
            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />

            {/* Expense Line */}
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
