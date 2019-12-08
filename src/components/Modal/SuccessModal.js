import React from "react";
import Modal from "../ui/Modal";

import CancelIcon from "@material-ui/icons/Cancel";

const SuccessModal = ({ type = "success", text, toggleModalState }) => {
  return (
    <Modal type={"success"}>
      {/* This will be the Transaction Success Modal */}
      <section>
        <div onClick={() => toggleModalState()}>
          <CancelIcon fontSize={"large"} />
        </div>
      </section>
      <header>
        <h3>Sucess! Transaction has been created.</h3>
      </header>
      <section>
        <button className='btn btn-success'type="button" onClick={() => toggleModalState()}>
          Confirm
        </button>
      </section>
    </Modal>
  );
};

export default SuccessModal;
