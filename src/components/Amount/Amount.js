import React, { useState } from "react";
import Input from "../Input";

function Amount() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div>
      <Input onChange={onChange} value={value} />
    </div>
  );
}

export default Amount;
