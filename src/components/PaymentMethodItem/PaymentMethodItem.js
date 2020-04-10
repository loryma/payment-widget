import React from "react";

function PaymentMethodItem({ src, name, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={src} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default PaymentMethodItem;
