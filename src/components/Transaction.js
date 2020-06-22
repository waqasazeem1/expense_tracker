import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(globalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li>
        {transaction.description}
        <span>{transaction.transactionAmount}</span>
        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
      </li>
    </div>
  );
};
