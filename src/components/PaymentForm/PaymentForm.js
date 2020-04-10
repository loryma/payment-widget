import React from "react";
import { connect } from "react-redux";
import CreditCardForm from "components/CreditCardForm";

function submitForm(values) {
  return new Promise(function (resolve, reject) {
    console.log(values);
    setTimeout(resolve, 100);
  });
}

function PaymentForm({ currency, amount, currentMethod, loading }) {
  return (
    <>
      <div>{!loading && currentMethod && currentMethod.name}</div>
      <div>
        {currentMethod && !loading && (
          <CreditCardForm
            amount={amount}
            currency={currency}
            submitForm={submitForm}
          />
        )}
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
