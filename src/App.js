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
        <section className="IncomeList">
          <section className="Income"></section>
        </section>
        <section className="ExpenseList">
          <section className="Expense"></section>
        </section>
        <section className="AssetList">
          <section className="Asset"></section>
        </section>
        <section className="LiabilityList">
          <section className="Liability"></section>
        </section>
      </section>
    </div>
  );
}

export default App;
