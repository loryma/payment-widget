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
  let methodsContent;

  const listOfMethods =
    list &&
    list.map(({ id, name, img_url }) => (
      <PaymentMethodItem
        active={id === currentMethod.id}
        onClick={changeActiveMethod.bind(undefined, id, name)}
        key={id}
        src={img_url}
        name={name}
      />
    ));

  if (list && list.length > 0 && !loading) {
    methodsContent = listOfMethods;
  } else if (!loading && !list) {
    methodsContent = (
      <p className={s.methodsNotFound}>No methods for this country</p>
    );
  } else {
    methodsContent = [];
  }

  return (
    <div className={s.container}>
      <h3 className={s.header}>Choose your payment method</h3>
      <Loader active={loading} grey style={{ maxWidth: "60px" }}>
        <div className={s.wrapper}>{methodsContent}</div>
      </Loader>
    </div>
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
