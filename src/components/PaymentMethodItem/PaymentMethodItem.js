import React from "react";

function PaymentMethodItem({ src, name }) {
  return (
    <div>
      <img src={src} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default PaymentMethodItem;
