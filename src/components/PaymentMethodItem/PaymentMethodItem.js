import React from "react";
import s from "./PaymentMethodItem.module.scss";

function PaymentMethodItem({ src, name, onClick }) {
  return (
    <div className={s.item} onClick={onClick}>
      <img src={src} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default PaymentMethodItem;
