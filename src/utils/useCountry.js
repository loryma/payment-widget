import React, { useEffect, useState } from "react";
import Api from "api";
import { getName } from "country-list";

function useCountry() {
  const [country, setCountry] = useState("");
  useEffect(() => {
    Api.GeolocateCountry.get()
      .then(({ data }) => {
        const countryCode = data.split("loc=")[1].slice(0, 2);
        const countryName = getName(countryCode);
        if (countryName) setCountry(countryName);
      })
      .catch((e) => {
        console.log(e);
        setCountry("United States of America");
      });
  }, []);
  return [country, setCountry];
}

export default useCountry;
