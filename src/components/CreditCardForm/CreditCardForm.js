import React, { useState } from "react";
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
import Modal from "shared/Modal";
import s from "./CreditCardForm.module.scss";

function CreditCardForm({ amount, currency, submitForm }) {
  const submitText = amount ? `Pay ${amount} ${currency}` : "Pay";
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    },
    validationSchema: object({
      cardholderName: string()
        .max(200, "Card holder name must be 200 characters or less")
        .min(2, "Card holder name must be at 2 characters or more")
        .matches(/^([A-Za-z]|-|\s)+$/, {
          message: "Name can contain only characters",
        })
        .required("Card holder name is required"),
      cardNumber: string()
        .max(19, "Card number must be 16 numbers or less")
        .min(16, "Card number must be 13 numbers or more")
        .test("Luhn-algo", "Card number is invalid", function (value) {
          if (value) {
            return checkLuhn(unmaskCardNumber(value));
          }
          return false;
        })
        .required("Card number is required"),
      expDate: string()
        .test("date-in-future", "Expiration date is invalid", function (value) {
          if (value) {
            return validateExpDate(...unmaskCardDate(value));
          }
          return false;
        })
        .required("Expiration date is required"),
      cvv: string()
        .max(4, "CVC must be 3 or 4 numbers")
        .min(3, "CVC must be 3 or 4 numbers")
        .matches(/^\d+$/, { message: "CVC can contain only numbers" })
        .required("CVC is required"),
    }),
    onSubmit: (values) => {
      setIsSubmitting(true);
      if (formError) return;

      if (inputsError) return;

      const formValues = { ...values, amount, currency };

      submitForm(formValues).then(() => setIsOpen(true));
    },
  });

  const amountError = !amount.trim() ? "Amount is required" : null;

  const currencyError = !currency.trim() ? "Currency is required" : null;

  let inputsError = [amountError, currencyError].reduce(
    (acc, err) => (acc = acc || err),
    null
  );

  let errorArray = Object.keys(formik.values).map((key) =>
    formik.touched[key] && formik.errors[key] ? formik.errors[key] : null
  );

  let [cardNameError, cardNumberError, expDateError, cvvError] = errorArray;

  const formError = errorArray.reduce((acc, err) => (acc = acc || err), null);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalClassName={s.modalContent}
      >
        <p className={s.modalMessage}>Card details successfully submitted</p>
      </Modal>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={s.field}>
          <label
            className={`${s.label} ${cardNameError ? s.inputInvalid : ""}`}
            htmlFor="cardholderName"
          >
            Name
          </label>
          <input
            id="cardholderName"
            className={`${s.input} ${cardNameError ? s.inputInvalid : ""}`}
            name="cardholderName"
            type="text"
            placeholder="Jane Doe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardholderName}
          />
        </div>
        <div className={s.field}>
          <MaskedInput
            mask={CARD_MASK}
            guide={false}
            id="cardNumber"
            name="cardNumber"
            className={`${s.input} ${s.cardNumber} ${
              cardNumberError ? s.inputInvalid : ""
            }`}
            type="text"
            placeholder="Card number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardNumber}
          />
          <MaskedInput
            mask={EXPIRATION_MASK}
            guide={false}
            id="expDate"
            name="expDate"
            className={`${s.input} ${s.expDate} ${
              expDateError ? s.inputInvalid : ""
            }`}
            type="text"
            placeholder="MM / YY"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expDate}
          />
          <input
            id="cvv"
            type="number"
            name="cvv"
            className={`${s.input} ${s.cvv} ${cvvError ? s.inputInvalid : ""}`}
            type="text"
            placeholder="CVC"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
          />
        </div>

        <button className={s.button} type="submit">
          {submitText}
        </button>
        <div
          className={`${s.error} ${
            formError || (isSubmitting && inputsError) ? s.errorVisible : ""
          }`}
        >
          {formError || (isSubmitting && inputsError)}
        </div>
      </form>
    </>
  );
}

export default CreditCardForm;
