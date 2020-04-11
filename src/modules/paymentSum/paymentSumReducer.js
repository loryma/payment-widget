import * as actionTypes from "./paymentSumActionTypes";

const initial = { amount: "", currency: "USD", validate: false };

function paymentSumReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.SET_AMOUNT:
      return { ...state, amount: action.payload.amount };
    case actionTypes.SET_CURRENCY:
      return { ...state, currency: action.payload.currency };
    default:
      return state;
  }
}

export default paymentSumReducer;
