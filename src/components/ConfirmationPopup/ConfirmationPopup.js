import React from "react";
import Button from "../UI/button/Button";
import Modal from "../UI/modal/Modal";
import withModalPromisify from "../UI/modal/withModalPromisify";
import "./ConfirmationPopup.scss";

const ConfirmationPopup = withModalPromisify(({ resolve, reject }) => {
  return (
    <Modal onClickAway={() => reject("Click away")} className="conf-popup">
      <span className="conf-popup__title">Are you sure?</span>
      <div className="conf-popup__btns">
        <Button onClick={() => reject("Cancel")}>Cancel</Button>
        <Button onClick={() => resolve(true)}>Yes</Button>
      </div>
    </Modal>
  );
});

export default ConfirmationPopup;
