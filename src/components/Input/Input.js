import React from "react";
import s from "./Input.module.scss";

function Input({ onChange, value, className, ...rest }) {
  const classes = [s.input, className ? className : ""].join(" ");
  return (
    <input onChange={onChange} value={value} {...rest} className={classes} />
  );
}

export default Input;
