import React from "react";

const Backdrop = ({ className = "Backdrop", children, handleBackgroundToggle }) => {
  return <div className="Backdrop" onClick={() => handleBackgroundToggle()}>{children}</div>;
};

export default Backdrop;
