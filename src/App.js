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
    </div>
  );
}

export default App;
