import React, { useEffect, useState } from 'react'
import { FaWallet } from "react-icons/fa";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";

const Navbar = ({role, setRole}) => {
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
    <div className='flex bg-white justify-between items-center px-10 py-5 text-[#0F1A2B] border-b border-[#D1CFC9] dark:border-gray-700 dark:text-[#D1CFC9] dark:bg-[#0F1A2B] transition-colors durtion-300 ease-in-out'>

  <div className='text-2xl font-bold font-serif flex items-center gap-2'>
    <FaWallet className="text-green-500" />
    <span>MoneyMap</span>
  </div>

  <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border rounded-full px-3 py-1 w-56 flex items-center gap-2">
    <FiSearch className="text-gray-500 dark:text-gray-300" />
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
    />
  </div>

  <div className='flex items-center gap-6'>

     <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-full px-3 py-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

    <button className="px-2 py-1 cursor-pointer dark:border-gray-600" onClick={() =>
      setDarkMode(!darkMode)
    }>
        {darkMode ?  <FiMoon size={20}/> : <FiSun size={20} /> }
    </button>

    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold">
      SC
    </div>

  </div>
</div>
  )
}

export default Navbar
