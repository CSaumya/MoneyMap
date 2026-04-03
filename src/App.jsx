import React, { useState } from "react";
import Navbar from "./components/Ui/Navbar";
import SummaryCards from "./components/Dashboard/SummaryCards";
import BalanceChart from "./components/Dashboard/BalanceChart";
import CategoryPie from "./components/Dashboard/CategoryPie";
import TransactionTable from "./components/Transactions/TransactionTable";
import Insights from "./components/Insights/Insights";

const App = () => {
  const [role, setRole] = useState("viewer");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F1A2B] transition-colors">

      <Navbar role={role} setRole={setRole} />

      <div className="p-4 md:p-6">
        <SummaryCards />
        <Insights />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <BalanceChart />
          <CategoryPie />
        </div>

        <div className="mt-6">
          <TransactionTable role={role} />
        </div>

      </div>
    </div>
  );
};

export default App;