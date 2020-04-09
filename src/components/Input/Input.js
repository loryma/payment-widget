import React from "react";

function Input({ onChange, value }) {
  return <input type="number" onChange={onChange} value={value} />;
}

export default Input;
