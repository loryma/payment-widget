import React, { useState, useEffect } from "react";
import { getNameList, getCode } from "country-list";
import { connect } from "react-redux";
import * as actions from "modules";
import Input from "components/Input";
import CountryList from "components/CountriesList";

const countryNames = Object.entries(getNameList());

function Country({ updatePaymentMethods }) {
  const [country, setCountry] = useState("Ukraine");
  const [list, setList] = useState();
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    let possibleCountries;
    if (isActive && country) {
      possibleCountries = countryNames.filter(([countryName]) =>
        countryName.includes(country.toLowerCase())
      );
    } else {
      possibleCountries = countryNames;
    }

    setList(possibleCountries);
  }, [country, isActive]);

  useEffect(() => {
    if (country) {
      const code = getCode(country.trim().toLowerCase());
      if (code) {
        updatePaymentMethods(code);
      }
    }
  }, [country]);

  const handleFocus = () => setIsActive(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };

  const onChoice = (name) => {
    setCountry(name);
  };

  return (
    <div>
      <h2>Country:</h2>
      <div>
        <Input
          type="text"
          value={country}
          onFocus={handleFocus}
          onChange={handleChange}
        />
        {isActive && <CountryList list={list} onChoice={onChoice} />}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updatePaymentMethods: (country_code) =>
    dispatch(actions.fetchPaymentMethods(country_code)),
});

export default connect(undefined, mapDispatchToProps)(Country);
