import React from "react";
import { connect } from "react-redux";
import CreditCardForm from "components/CreditCardForm";
import s from "./PaymentForm.module.scss";

function submitForm(values) {
  return new Promise(function (resolve, reject) {
    console.log(values);
    setTimeout(resolve, 100);
  });
}

function PaymentForm({ currency, amount, currentMethod, loading }) {
  return (
    <>
      <div className={s.currentMethod}>
        method:{" "}
        {!loading && currentMethod && currentMethod.name && currentMethod.name}
      </div>
      <div>
        <CreditCardForm
          amount={amount}
          currency={currency}
          submitForm={submitForm}
        />
      </div>
    </>
  );
}

const mapStateToProps = ({
  paymentSum: { amount, currency },
  paymentMethods: { currentMethod, loading },
}) => ({
  currency,
  amount,
  currentMethod,
  loading,
});

export default connect(mapStateToProps)(PaymentForm);
