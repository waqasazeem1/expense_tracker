import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(globalContext);

  return (
    <div className="list">
      <li className="description">
        {transaction.description}
        <span className="amount">${transaction.transactionAmount}</span>
      </li>
      <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </div>
  );
};
