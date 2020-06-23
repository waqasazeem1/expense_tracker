import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

export const AccountSammary = () => {
  const { transactions } = useContext(globalContext);

  const amounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="account_sammary">
      <div className="income">
        <h5>Income</h5>
        <p>${income}</p>
      </div>
      <div className="expense">
        <h5>Expense</h5>
        <p>${expense}</p>
      </div>
    </div>
  );
};
