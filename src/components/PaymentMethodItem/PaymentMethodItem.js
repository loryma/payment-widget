import React from "react";

function PaymentMethodItem({ src, name }) {
  return (
    <div>
      <img src={src} alt={name} />
    </div>
  );
}

export default PaymentMethodItem;
