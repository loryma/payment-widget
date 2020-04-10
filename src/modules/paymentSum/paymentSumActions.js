import * as actionTypes from "./paymentSumActionTypes";

export const setAmount = (amount) => ({
  type: actionTypes.SET_AMOUNT,
  payload: { amount },
});
export const setCurrency = (currency) => ({
  type: actionTypes.SET_CURRENCY,
  payload: { currency },
});
