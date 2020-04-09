import React from "react";
import Amount from "components/Amount";

function PaymentPage() {
  return (
    <div>
      <h2>Payments</h2>
      <div className="paymentPage__amount">{<Amount />}</div>
    </div>
  );
}

export default PaymentPage;
