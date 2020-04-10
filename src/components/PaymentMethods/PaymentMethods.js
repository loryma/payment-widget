import React from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import PaymentMethodItem from "components/PaymentMethodItem";
import Loader from "shared/Loader";
import s from "./PaymentMethods.module.scss";

function PaymentMethods({
  list = [],
  currentMethod,
  setCurrentMethod,
  loading,
}) {
  const changeActiveMethod = (id, name) => setCurrentMethod({ id, name });
  return (
    <Loader active={loading}>
      <div className={s.container}>
        <h2 className={s.header}>Choose your payment method</h2>
        <div className={s.wrapper}>
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
      </div>
    </Loader>
  );
}

const mapStateToProps = ({
  paymentMethods: { paymentMethods, currentMethod, loading },
}) => ({
  list: paymentMethods,
  currentMethod,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentMethod: (method) => dispatch(actions.setCurrentMethod(method)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
