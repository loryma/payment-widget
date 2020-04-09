import React from "react";
import Amount from "components/Amount";
import Country from "components/Country";
import PaymentMethods from "components/PaymentMethods";

function PaymentPage() {
  return (
    <div>
      <h1>Payments</h1>
      <div className="paymentPage__amount">{<Amount />}</div>
      <div>
        <Country />
      </div>
      <h2>Choose your payment method</h2>
      <PaymentMethods />
    </div>
  );
}

export default PaymentPage;
