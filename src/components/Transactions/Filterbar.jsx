import React from "react";

const Filterbar = ({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  sortOrder,
  setSortOrder,
}) => {
  return (
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
  );
};

export default Filterbar;