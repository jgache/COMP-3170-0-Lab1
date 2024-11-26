import React from "react";

function Country({ country }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "100px", height: "auto" }}
      />
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Continent:</strong> {country.continents ? country.continents[0] : "N/A"}</p>
      <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
    </div>
  );
}

export default Country;
