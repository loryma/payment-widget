import React from "react";

function Input({ onChange, value, ...rest }) {
  return <input onChange={onChange} value={value} {...rest} />;
}

export default Input;
