import { createContext, useContext, useState } from "react";
import { transactionsData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(transactionsData);

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);