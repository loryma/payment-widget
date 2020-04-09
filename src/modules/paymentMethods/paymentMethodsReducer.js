import * as actionTypes from "./paymentMethodsActionTypes";

const initial = {
  loading: false,
  error: null,
  paymentMethods: [],
};

function paymentMethodsReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.START_FETCHING_PAYMENT_METHODS:
      return { ...state, loading: true, error: null };
    case actionTypes.SUCCESS_FETCHING_PAYMENT_METHODS:
      return {
        ...state,
        loading: false,
        error: false,
        paymentMethods: action.payload.paymentMethods,
      };
    case actionTypes.FAIL_FETCHING_PAYMENT_METHODS:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default paymentMethodsReducer;
