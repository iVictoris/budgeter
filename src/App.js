import React from "react";
import TransactionTable from "./components/Transaction/TransactionTable";
import ControlPanel from "./components/Control-Panel/ControlPanel";
import ModalContainer from "./components/ui/ModalContainer";
import Modal from "./components/ui/Modal";

function App() {
  return (
    <div className="App">
      <TransactionTable />
      <ControlPanel />
      <ModalContainer defaultModalState={true}> {/* This will be the success modal */}
        <Modal type={'success'}>

        </Modal>
      </ModalContainer>
    </div>
  );
}

export default App;
