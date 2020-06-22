import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

export const Balance = () => {
  const { transactions } = useContext(globalContext);
  const amounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
