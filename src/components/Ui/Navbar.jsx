import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";

const Navbar = ({ role, setRole }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 px-4 sm:px-6 lg:px-10 py-4 border-b border-[#D1CFC9] dark:border-gray-700 text-[#0F1A2B] dark:text-[#D1CFC9] bg-white dark:bg-[#0F1A2B] transition-colors duration-300 ease-in-out">

      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold font-serif flex items-center gap-2">
        <FaWallet className="text-green-500" />
        <span>MoneyMap</span>
      </div>

      {/* Search (hidden on very small screens optional) */}
      <div className="bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-full px-3 py-1 w-full sm:w-56 flex items-center gap-2">
        <FiSearch className="text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">

        {/* Role Selector */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-full px-3 py-1 cursor-pointer text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 w-28 sm:w-auto"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Theme Toggle */}
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold">
          SC
        </div>
      </div>
    </div>
  );
};

export default Navbar;
