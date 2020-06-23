import React, { useState, useContext } from "react";
import { globalContext } from "../context/globalState";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const { addTransaction } = useContext(globalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      transactionAmount: +transactionAmount,
    };
    addTransaction(newTransaction);
    setDescription("");
    setTransactionAmount("");
  };
  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name=""
            id="description"
            value={description}
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Transactionamount">Transaction amount</label>
          <input
            type="text"
            name=""
            id="transactionamount"
            value={transactionAmount}
            placeholder="Enter transaction aamount"
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <button>Add Button</button>
      </form>
    </div>
  );
};
