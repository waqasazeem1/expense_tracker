import React, { useContext } from "react";

//Import The Global Context

import { globalContext } from "../context/globalState";
//import Transaction
import { Transaction } from "../components/transaction";

export const TransactionHistory = () => {
  const { transactions } = useContext(globalContext);
  return (
    <div>
      <h3>Tansaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
