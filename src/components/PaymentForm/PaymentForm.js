import React from "react";
import { connect } from "react-redux";
import CreditCardForm from "components/CreditCardForm";

function PaymentForm({ currency, amount, currentMethod }) {
  return (
    <>
      <div>{currentMethod && currentMethod.name}</div>
      <div>
        {currentMethod && (
          <CreditCardForm amount={amount} currency={currency} />
        )}
      </div>
    </>
  );
}

const mapStateToProps = ({
  paymentSum: { amount, currency },
  paymentMethods: { currentMethod },
}) => ({
  currency,
  amount,
  currentMethod,
});

export default connect(mapStateToProps)(PaymentForm);
