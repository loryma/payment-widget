import axios from "axios";
const PAYMENT_METHODS_ENDPOINT =
  "https://api.paymentwall.com/api/payment-systems";
// const PROJECT_KEY = "f11e59e17b423ecd3454ed5fccd5e82d";
const PROJECT_KEY = "ff649f6a4f55a5350a9a9dd96e437297";

export const PaymentMethods = {
  fetch(country_code) {
    return axios.get(
      `${PAYMENT_METHODS_ENDPOINT}/?key=${PROJECT_KEY}&country_code=${country_code}`
    );
  },
};

export const GeolocateCountry = {
  get() {
    return axios.get("https://www.cloudflare.com/cdn-cgi/trace");
  },
};
