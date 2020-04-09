import { combineReducers } from "redux";

import paymentMethods, { fetchPaymentMethods } from "./paymentMethods";

export { fetchPaymentMethods };

export default combineReducers({ paymentMethods });
