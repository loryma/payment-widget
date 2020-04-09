import React from "react";
import { Provider } from "react-redux";
import store from "store";
import PaymentPage from "scenes/PaymentPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PaymentPage />
      </div>
    </Provider>
  );
}

export default App;
