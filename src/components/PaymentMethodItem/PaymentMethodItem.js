import React from "react";
import s from "./PaymentMethodItem.module.scss";

function PaymentMethodItem({ src, name, onClick, active }) {
  const itemClasses = [s.item, active ? s["item--active"] : ""].join(" ");
  return (
    <div className={itemClasses} onClick={onClick}>
      <img src={src} alt={name} className={s.img} />
      <h3 className={s.name}>{name}</h3>
    </div>
  );
}

export default PaymentMethodItem;
