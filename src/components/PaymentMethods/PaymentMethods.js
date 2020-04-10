import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import PaymentMethodItem from "components/PaymentMethodItem";

function PaymentMethods({ list = [], currentMethod, setCurrentMethod }) {
  const changeActiveMethod = (id, name) => setCurrentMethod({ id, name });
  return (
    <div>
      {list.map(({ id, name, img_url }) => (
        <PaymentMethodItem
          active={id === currentMethod.id}
          onClick={changeActiveMethod.bind(undefined, id, name)}
          key={id}
          src={img_url}
          name={name}
        />
      ))}
    </div>
  );
}

const mapStateToProps = ({
  paymentMethods: { paymentMethods, currentMethod },
}) => ({
  list: paymentMethods,
  currentMethod,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMethod: (method) => dispatch(actions.setCurrentMethod(method)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
