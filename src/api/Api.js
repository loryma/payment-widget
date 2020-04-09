import axios from "axios";
const PAYMENT_METHODS_ENDPOINT =
  "https://api.paymentwall.com/api/payment-systems";
const PROJECT_KEY = "f11e59e17b423ecd3454ed5fccd5e82d";

export const PaymentMethods = {
  fetch(country_code) {
    return axios(
      `${PAYMENT_METHODS_ENDPOINT}/key=${PROJECT_KEY}/country_code=${country_code}`
    );
  },
};
