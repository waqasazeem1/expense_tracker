import React from "react";

import "./App.css";
import Header from "./components/Header";
import { Balance } from "./components/Balance";
import { AccountSammary } from "./components/AccountSammary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

//import Global provider
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div>
        <Balance />
        <AccountSammary />
        <TransactionHistory />
        <AddTransaction />
        <h3 style={{ color: "white", fontStyle: "oblique" }}>
          created and published by <b>"Waqas Azeem"</b>
        </h3>
      </div>
    </GlobalProvider>
  );
}

export default App;
