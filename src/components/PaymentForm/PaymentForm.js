import React from "react";
import { connect } from "react-redux";
import CreditCardForm from "components/CreditCardForm";

function PaymentForm({ currency, amount, currentMethod, loading }) {
  return (
    <>
      <div>{!loading && currentMethod && currentMethod.name}</div>
      <div>
        {currentMethod && !loading && (
          <CreditCardForm amount={amount} currency={currency} />
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
