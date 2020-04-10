import { combineReducers } from "redux";

import paymentMethods, { fetchPaymentMethods } from "./paymentMethods";

import paymentSum, { setAmount, setCurrency } from "./paymentSum";

export { fetchPaymentMethods, setAmount, setCurrency };

export default combineReducers({ paymentMethods, paymentSum });
