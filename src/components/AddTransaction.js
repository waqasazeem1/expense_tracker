import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  return (
    <div>
      <h3>Add new transaction</h3>
      <form action="">
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
