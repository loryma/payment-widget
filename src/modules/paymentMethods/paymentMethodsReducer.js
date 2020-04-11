import * as actionTypes from "./paymentMethodsActionTypes";

const initial = {
  loading: false,
  error: null,
  currentMethod: { id: "cc", name: "credit card" },
  paymentMethods: [],
};

function paymentMethodsReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.START_FETCHING_PAYMENT_METHODS:
      return { ...state, loading: true, error: null };
    case actionTypes.SUCCESS_FETCHING_PAYMENT_METHODS:
      const paymentMethods = action.payload.paymentMethods || [];
      const currentMethod = paymentMethods[0] || state.currentMethod;
      return {
        ...state,
        loading: false,
        error: false,
        paymentMethods,
        currentMethod,
      };
    case actionTypes.FAIL_FETCHING_PAYMENT_METHODS:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.SET_CURRENT_METHOD:
      return { ...state, currentMethod: action.payload.method };
    default:
      return state;
  }
}

export default paymentMethodsReducer;
