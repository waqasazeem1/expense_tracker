import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Balance } from "./components/Balance";
import { AccountSammary } from "./components/AccountSammary";
import { Transaction } from "./components/Transaction";
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
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
