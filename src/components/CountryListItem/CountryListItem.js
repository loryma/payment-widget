import React from "react";

function capitalizeName(name) {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function CountryListItem({ children, onClick }) {
  const name = capitalizeName(children);

  return <li onClick={() => onClick(name)}>{name}</li>;
}

export default CountryListItem;
