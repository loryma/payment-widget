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
      const formValues = { ...values, amount, currency };

      submitForm(formValues).then(() => setIsOpen(true));
    },
  });

  const cardNameError =
    formik.touched.cardholderName && formik.errors.cardholderName
      ? formik.errors.cardholderName
      : null;

  const cardNumberError =
    formik.touched.cardNumber && formik.errors.cardNumber ? (
      <div>{formik.errors.cardNumber}</div>
    ) : null;

  const expDateError =
    formik.touched.expDate && formik.errors.expDate ? (
      <div>{formik.errors.expDate}</div>
    ) : null;

  const cvvError =
    formik.touched.cvv && formik.errors.cvv ? (
      <div>{formik.errors.cvv}</div>
    ) : null;

  const formError =
    cardNameError ||
    cardNameError ||
    cardNumberError ||
    expDateError ||
    cvvError;

  const submitDisabled = !currency || !amount || formError;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalClassName={s.modalContent}
      >
        <span onClick={() => setIsOpen(false)} className={s.close}>
          &times;
        </span>
        <p className={s.modalMessage}>Card details successfully submitted</p>
      </Modal>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={s.field}>
          <label className={s.label} htmlFor="cardholderName">
            Name
          </label>
          <input
            id="cardholderName"
            className={s.input}
            name="cardholderName"
            type="text"
            placeholder=""
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
            className={`${s.input} ${s.cardNumber}`}
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
            className={`${s.input} ${s.expDate}`}
            type="text"
            placeholder="MM / YY"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expDate}
          />
          <input
            id="cvv"
            name="cvv"
            className={`${s.input} ${s.cvv}`}
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
        <div className={`${s.error} ${formError ? s.errorVisible : ""}`}>
          {formError}
        </div>
      </form>
    </>
  );
}

export default CreditCardForm;
