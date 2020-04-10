import React from "react";
import { useFormik } from "formik";
import { string, object } from "yup";
import MaskedInput from "react-text-mask";
import {
  checkLuhn,
  validateExpDate,
  unmaskCardNumber,
  unmaskCardDate,
  CARD_MASK,
  EXPIRATION_MASK,
} from "utils";

function CreditCardForm({ amount, currency, submitForm }) {
  const submitText = `Pay ${amount} ${currency}`;

  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    },
    validationSchema: object({
      cardholderName: string()
        .max(200, "Must be 200 characters or less")
        .min(2, "Must be at 2 characters or more")
        .matches(/^([A-Za-z]|-)+$/, {
          message: "Name can contain only characters",
        })
        .required("Requered"),
      cardNumber: string()
        .test("Luhn-algo", "Card number is invalid", function (value) {
          if (value) {
            return checkLuhn(unmaskCardNumber(value));
          }
          return false;
        })
        .max(19, "Must be 16 numbers or less")
        .min(16, "Must be 13 numbers or more")
        .required("Requered"),
      expDate: string()
        .test("date-in-future", "Expiration date is invalid", function (value) {
          if (value) {
            return validateExpDate(...unmaskCardDate(value));
          }
          return false;
        })
        .required("Requered"),
      cvv: string()
        .max(4, "Must be 3 or 4 numbers")
        .min(3, "Must be 3 or 4 numbers")
        .matches(/^\d+$/, { message: "CVC can contain only numbers" })
        .required("Requered"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="cardholderName">Cardholder name:</label>
        <input
          id="cardholderName"
          name="cardholderName"
          type="text"
          placeholder="Card holder name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardholderName}
        />
        {formik.touched.cardholderName && formik.errors.cardholderName ? (
          <div>{formik.errors.cardholderName}</div>
        ) : null}
      </div>
      <div>
        <div>
          <MaskedInput
            mask={CARD_MASK}
            guide={false}
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="Card number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div>{formik.errors.cardNumber}</div>
          ) : null}
        </div>
        <div>
          <MaskedInput
            mask={EXPIRATION_MASK}
            guide={false}
            id="expDate"
            name="expDate"
            type="text"
            placeholder="MM / YY"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expDate}
          />
          {formik.touched.expDate && formik.errors.expDate ? (
            <div>{formik.errors.expDate}</div>
          ) : null}
        </div>
        <div>
          <input
            id="cvv"
            name="cvv"
            type="text"
            placeholder="CVC"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div>{formik.errors.cvv}</div>
          ) : null}
        </div>
      </div>

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default CreditCardForm;
