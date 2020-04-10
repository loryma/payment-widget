import React from "react";
import Select from "react-select";
const data = require("./data.js");
const list = data.map((el) => ({
  value: el.code,
  label: el.code,
}));

const inputStyles = {
  color: "#fff",
  backgroundColor: "transparent",
  minWidth: "40px",
};

const controlStyles = {
  backgroundColor: "transparent",
  borderRadius: "0 4px 4px 0",
};

const singleValueStyles = {
  color: "white",
};

const colourStyles = {
  input: (styles) => ({ ...styles, ...inputStyles }),
  control: (styles) => ({ ...styles, ...controlStyles }),
  singleValue: (styles) => ({ ...styles, ...singleValueStyles }),
};

function Currency({ currency, onChange }) {
  return (
    <Select
      onChange={onChange}
      options={list}
      value={{ value: currency, label: currency }}
      isSearchable
      styles={colourStyles}
    />
  );
}

export default Currency;
