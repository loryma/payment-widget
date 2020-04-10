import React from "react";
import Select from "react-select";
const data = require("./data.js");
const list = data.map((el) => ({
  value: el.code,
  label: el.code,
}));

function Currency({ currency, onChange }) {
  return (
    <Select
      onChange={onChange}
      options={list}
      value={{ value: currency, label: currency }}
      isSearchable
    />
  );
}

export default Currency;
