import React from "react";
import { connect } from "react-redux";
import CreditCardForm from "components/CreditCardForm";

function PaymentForm({ currency, amount }) {
  return (
    <div>
      <CreditCardForm amount={amount} currency={currency} />
    </div>
  );
}

const mapStateToProps = ({ paymentSum: { amount, currency } }) => ({
  currency,
  amount,
});

export default connect(mapStateToProps)(PaymentForm);
