import React, { useState } from "react";
import Backdrop from "./Backdrop";

const useModalState = state => {
  let [modalState, setModalState] = useState(state);
  const toggleModalState = () => {
    setModalState(!modalState);
  };

  return [modalState, toggleModalState];
};

const ModalContainer = ({
  defaultModalState = false,
  className = "ModalContainer",
  children
}) => {
  const [modalState, toggleModalState] = useModalState(defaultModalState);

  const elementWithToggleModalState = React.cloneElement(children, {toggleModalState})
  return (
    <div className={className.concat(modalState ? " show" : "")}>
        {elementWithToggleModalState}
      <Backdrop handleBackgroundToggle={() => toggleModalState()} />
    </div>
  );
};

export default ModalContainer;
