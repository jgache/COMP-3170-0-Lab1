import React from "react";
import Country from "./Country";

function Countries({ countries }) {
  return (
    <div>
      {countries.length > 0 ? (
        <div>
          {countries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <p>No countries match your criteria.</p>
      )}
    </div>
  );
}

export default Countries;
