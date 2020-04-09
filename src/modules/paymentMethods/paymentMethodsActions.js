import * as actionTypes from "./paymentMethodsActionTypes";
import Api from "api";

export const startFetchingPaymentMethods = () => ({
  type: actionTypes.START_FETCHING_PAYMENT_METHODS,
});

export const failFetchingPaymentMethods = (error) => ({
  type: actionTypes.FAIL_FETCHING_PAYMENT_METHODS,
  payload: { error },
});

export const successFetchingPaymentMethods = (paymentMethods) => ({
  type: actionTypes.SUCCESS_FETCHING_PAYMENT_METHODS,
  payload: { paymentMethods },
});

export const fetchPaymentMethods = (country_code) => {
  return async (dispatch) => {
    try {
      dispatch(startFetchingPaymentMethods());
      const { data } = await Api.PaymentMethods.fetch(country_code);
      dispatch(successFetchingPaymentMethods(data));
    } catch (error) {
      dispatch(failFetchingPaymentMethods(error));
    }
  };
};
