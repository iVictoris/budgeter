import React from "react";
import TransactionTable from "./components/Transaction/TransactionTable";
import ControlPanel from "./components/Control-Panel/ControlPanel";
// import ModalContainer from "./components/ui/ModalContainer";
// import SuccessModal from './components/Modal/SuccessModal';

function App() {
  return (
    <div className="App">
      <TransactionTable />
      <ControlPanel />
      {/* <ModalContainer defaultModalState={true}>
        <SuccessModal text={'Sucess! Transaction has been created.'}/>
      </ModalContainer> */}
      <section className="CashFlowStatement">
        <section className="Income"></section>
        <section className="Expenses"></section>
        <section className="Asset"></section>
        <section className="Liabilities"></section>
      </section>
    </div>
  );
}

export default App;
