import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

export const Balance = () => {
  const { transactions } = useContext(globalContext);
  const amounts = transactions.map(
    (transaction) => transaction.transactionAmount //?
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="balance">
      <h5>Balance</h5>
      <h1>${total}</h1>
    </div>
  );
};
