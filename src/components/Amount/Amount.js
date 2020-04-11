import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import Input from "../Input";
import Currency from "components/Currency";
import s from "./Amount.module.scss";

function Amount({ setAmount, setCurrency, amount, currency }) {
  const [amountTouched, setAmountTouched] = useState(false);
  const amountIsInvalid = amountTouched && !amount.trim();

  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    const formattedValue = newValue.replace(/\D+/, "");
    setAmount(formattedValue);
    if (!amountTouched) setAmountTouched(true);
  };

  const handleCurrencyChange = ({ value }) => {
    setCurrency(value);
  };

  const onBlur = (e) => setAmountTouched(true);

  return (
    <div className={s.field}>
      <label className={`${s.label} ${amountIsInvalid ? s.inputInvalid : ""}`}>
        Amount
      </label>
      <Input
        placeholder="100"
        type="number"
        className={s.input}
        onBlur={onBlur}
        onChange={handleAmountChange}
        value={amount}
      />
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
