import React from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import Input from "../Input";
import Currency from "components/Currency";

function Amount({ setAmount, setCurrency, amount, currency }) {
  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    setAmount(newValue);
  };

  const handleCurrencyChange = ({ value }) => {
    setCurrency(value);
  };

  return (
    <div>
      <Input onChange={handleAmountChange} value={amount} />
      <Currency onChange={handleCurrencyChange} currency={currency} />
    </div>
  );
}

const mapStateToProps = ({ paymentSum: { amount, currency } }) => ({
  amount,
  currency,
});

const mapDispatchToProps = (dispatch) => ({
  setAmount: (amount) => dispatch(actions.setAmount(amount)),
  setCurrency: (currency) => dispatch(actions.setCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Amount);
