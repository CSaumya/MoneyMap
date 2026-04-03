import React from "react";

const TransactionItem = ({ transaction, role }) => {
  return (
    <tr className="border-b text-sm text-gray-700 dark:text-gray-200">

      <td className="py-2">{transaction.date}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>{transaction.type}</td>

      {/* Admin only actions */}
      {role === "admin" && (
        <td className="flex gap-3">
          <button className="text-blue-500 hover:underline">
            Edit
          </button>

          <button className="text-red-500 hover:underline">
            Delete
          </button>
        </td>
      )}

    </tr>
  );
};

export default TransactionItem;