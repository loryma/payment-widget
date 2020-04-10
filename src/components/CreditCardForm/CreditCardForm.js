import React from "react";
import { useFormik } from "formik";
import { string, object } from "yup";

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
        .required("Requered"),
      cardNumber: string()
        .max(16, "Must be 16 numbers or less")
        .required("Requered"),
      expDate: string().required("Requered"),
      cvv: string().required("Requered"),
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardholderName}
        />
      </div>
      <div>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
        />
        <input
          id="expDate"
          name="expDate"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expDate}
        />
        <input
          id="cvv"
          name="cvv"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cvv}
        />
      </div>
      <button type="submit">{submitText}</button>
    </form>
  );
}

export default CreditCardForm;
