import React from "react";
import CountriesListItem from "components/CountryListItem";

function CountriesList({ list, onChoice }) {
  return (
    <ul>
      {list.map(([name]) => (
        <CountriesListItem onClick={onChoice}>{name}</CountriesListItem>
      ))}
    </ul>
  );
}

export default CountriesList;
