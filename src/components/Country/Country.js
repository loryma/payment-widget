import React, { useEffect } from "react";
import { getCode, getNames } from "country-list";
import { connect } from "react-redux";
import * as actions from "modules";
import { useCountry } from "utils";
import Select from "react-select";

import s from "./Country.module.scss";

const countryNames = getNames().map((name) => ({
  value: capitalizeName(name),
  label: capitalizeName(name),
}));

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

const inputStyles = {
  color: "#fff",
  backgroundColor: "transparent",
  minWidth: "40px",
};

const controlStyles = {
  backgroundColor: "transparent",
  border: "none",
};

const containerStyles = {
  flexGrow: "1",
};

const singleValueStyles = {
  color: "white",
};

const colourStyles = {
  input: (styles) => ({ ...styles, ...inputStyles }),
  control: (styles) => ({ ...styles, ...controlStyles }),
  container: (styles) => ({ ...styles, ...containerStyles }),
  singleValue: (styles) => ({ ...styles, ...singleValueStyles }),
};

function Country({ updatePaymentMethods }) {
  const [country, setCountry] = useCountry();

  useEffect(() => {
    if (country) {
      const code = getCode(country.trim().toLowerCase());
      if (code) {
        updatePaymentMethods(code);
      }
    }
  }, [country]);

  const onChoice = ({ label }) => {
    setCountry(label);
  };

  return (
    <div className={s.field}>
      <label htmlFor="paymentCountry" className={s.label}>
        Country
      </label>
      <Select
        id="paymentCountry"
        value={{ value: country, label: country }}
        isSearchable
        options={countryNames}
        onChange={onChoice}
        styles={colourStyles}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updatePaymentMethods: (country_code) =>
    dispatch(actions.fetchPaymentMethods(country_code)),
});

export default connect(undefined, mapDispatchToProps)(Country);
