import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//create Initial state
const initialState = {
  transactions: [
    { id: 1, description: "income 1", transactionAmount: "1000" },
    { id: 2, description: "expense 1", transactionAmount: "-100" },
    { id: 3, description: "income 2", transactionAmount: "1000" },
    { id: 4, description: "income 3", transactionAmount: "1000" },
  ],
};

//create global context
export const globalContext = createContext(initialState);

//Create a provider for the Global Context

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <globalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </globalContext.Provider>
  );
};
