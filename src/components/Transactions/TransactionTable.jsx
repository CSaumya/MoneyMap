import React, { useState } from "react";
import { transactionsData } from "../../data/mockData";
import TransactionItem from "./TransactionItem";

const TransactionTable = ({ role }) => {
  const [transactions] = useState(transactionsData);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      typeFilter === "all" ? true : t.type === typeFilter
    );

  const sortedData = [...filteredData].sort((a, b) =>
    sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
  );

  return (
    <div className="bg-white dark:bg-[#1C2E4A] p-4 rounded-xl shadow mt-6">

      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Transactions
      </h2>

      <div className="flex flex-col md:flex-row gap-3 mb-4">

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded w-full md:w-1/3 
          bg-white dark:bg-gray-700 
          text-black dark:text-white"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border px-3 py-1 rounded 
          bg-white dark:bg-gray-700 
          text-black dark:text-white"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-1 rounded 
          bg-white dark:bg-gray-700 
          text-black dark:text-white"
        >
          <option value="asc">Amount ↑</option>
          <option value="desc">Amount ↓</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="text-gray-500 dark:text-gray-400 text-sm border-b">
              <th className="py-2">Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>

              {/* Admin only column */}
              {role === "admin" && <th>Actions</th>}
            </tr>
          </thead>

          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((t) => (
                <TransactionItem
                  key={t.id}
                  transaction={t}
                  role={role}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;