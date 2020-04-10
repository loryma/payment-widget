import { combineReducers } from "redux";

import paymentMethods, {
  fetchPaymentMethods,
  setCurrentMethod,
} from "./paymentMethods";

import paymentSum, { setAmount, setCurrency } from "./paymentSum";

export { fetchPaymentMethods, setAmount, setCurrency, setCurrentMethod };

export default combineReducers({ paymentMethods, paymentSum });
