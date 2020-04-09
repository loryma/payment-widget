import React, { useState } from "react";
import { connect } from "react-redux";
import PaymentMethodItem from "components/PaymentMethodItem";

function PaymentMethods({ list = [] }) {
  const [activeMethod, setActiveMethod] = useState("cc");

  const changeActiveMethod = (id) => setActiveMethod(id);
  return (
    <div>
      {list.map(({ id, name, img_url }) => (
        <PaymentMethodItem
          active={id === activeMethod}
          onClick={changeActiveMethod.bind(undefined, id)}
          key={id}
          src={img_url}
          name={name}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.paymentMethods.paymentMethods,
});

export default connect(mapStateToProps)(PaymentMethods);
