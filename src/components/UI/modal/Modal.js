import React from "react";
import Backdrop from "../backdrop/Backdrop";
import Portal from "../portal/Portal";
import "./Modal.scss";

const Modal = ({ children, onClickAway }) => {
  return (
    <Portal>
      <Backdrop onClick={onClickAway} />
      <div className="modal-background">
        <div className="modal-container">{children}</div>
      </div>
    </Portal>
  );
};
export default Modal;
