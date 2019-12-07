import React from "react";
import TransactionTable from "./components/Transaction/TransactionTable";
import ControlPanel from "./components/Control-Panel/ControlPanel";

function App() {
  return (
    <div className="App">
      <TransactionTable />
      <ControlPanel />
    </div>
  );
}

export default App;
