import React from "react";
import "./Modal.scss";

function Modal({
  isOpen,
  onClose,
  modalClassName,
  overlayClassName,
  children,
}) {
  const modalClasses = [
    isOpen ? "modal--visible" : "",
    modalClassName ? modalClassName : "",
  ].join(" ");

  const overlayClasses = [
    isOpen ? "modal__overlay--visible" : "",
    overlayClassName ? overlayClassName : "",
  ].join(" ");
  return (
    <>
      <div className={`modal ${modalClasses}`}>{children}</div>
      <div
        onClick={onClose}
        className={`modal__overlay ${overlayClasses}`}
      ></div>
    </>
  );
}

export default Modal;
