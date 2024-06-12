import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const Modal = ({ isOpen, children, onClose }) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
          </div>
          <button className="modal-close" onClick={onClose}>Close</button>
        </div>,
        document.getElementById("modal-window")
      )
    : null;
};

export default Modal;
