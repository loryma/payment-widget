import React from "react";
import Amount from "components/Amount";
import Country from "components/Country";
import PaymentMethods from "components/PaymentMethods";
import PaymentForm from "components/PaymentForm";
import s from "./PaymentPage.module.scss";

function PaymentPage() {
  return (
    <div>
      <h1>Payments</h1>
      <Amount />

      <Country />

      <PaymentMethods />

      <PaymentForm />
    </div>
  );
}

export default PaymentPage;
