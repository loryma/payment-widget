import React from "react";
import Amount from "components/Amount";
import Country from "components/Country";
import PaymentMethods from "components/PaymentMethods";
import PaymentForm from "components/PaymentForm";

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

      <PaymentForm />
    </div>
  );
}

export default PaymentPage;
