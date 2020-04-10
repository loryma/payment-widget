import React, { useEffect } from "react";
import { getCode, getNames } from "country-list";
import { connect } from "react-redux";
import * as actions from "modules";
import { useCountry } from "utils";
import Select from "react-select";

const countryNames = getNames().map((name) => ({
  value: capitalizeName(name),
  label: capitalizeName(name),
}));

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function Country({ updatePaymentMethods }) {
  const [country, setCountry] = useCountry();

  useEffect(() => {
    if (country) {
      const code = getCode(country.trim().toLowerCase());
      if (code) {
        updatePaymentMethods(code);
      }
    }
  }, [country]);

  const onChoice = ({ label }) => {
    setCountry(label);
  };

  return (
    <div>
      <h2>Country:</h2>
      <div>
        <Select
          value={{ value: country, label: country }}
          isSearchable
          options={countryNames}
          onChange={onChoice}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updatePaymentMethods: (country_code) =>
    dispatch(actions.fetchPaymentMethods(country_code)),
});

export default connect(undefined, mapDispatchToProps)(Country);
