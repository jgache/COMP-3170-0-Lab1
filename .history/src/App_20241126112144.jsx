import React, { useState, useEffect } from "react";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState({ continent: "", subregion: "" });
  const [sortOption, setSortOption] = useState(null); // No sorting by default
  const [top10, setTop10] = useState(false);
  const [sortByPopulation, setSortByPopulation] = useState(false);
  const [sortByArea, setSortByArea] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching countries data:", error));
  }, []);

  useEffect(() => {
    let result = [...countries];

    // Apply continent filter
    if (filter.continent) {
      result = result.filter((country) =>
        country.continents?.includes(filter.continent)
      );
    }

    // Apply subregion filter
    if (filter.subregion) {
      result = result.filter(
        (country) => country.subregion === filter.subregion
      );
    }

    // Apply sorting options
    if (sortOption === "alphabetical") {
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOption === "population" && top10) {
      result = result.sort((a, b) => b.population - a.population).slice(0, 10);
    } else if (sortOption === "area" && top10) {
      result = result.sort((a, b) => b.area - a.area).slice(0, 10);
    }

    setFilteredCountries(result);
  }, [countries, filter, sortOption, top10]);

  const handleFilterChange = (type, value) => {
    setFilter((prev) => ({
      continent: type === "continent" ? value : "",
      subregion: type === "subregion" ? value : "",
    }));
  };

  const handleSortToggle = (type) => {
    if (sortOption === type) {
      setSortOption(null);
      setTop10(false);
      setSortByPopulation(false);
      setSortByArea(false);
      return;
    }

    if (type === "alphabetical") {
      setSortOption("alphabetical");
      setTop10(false);
      setSortByPopulation(false);
      setSortByArea(false);
    } else if (type === "population") {
      setSortOption("population");
      setTop10(true);
      setSortByPopulation(true);
      setSortByArea(false);
    } else if (type === "area") {
      setSortOption("area");
      setTop10(true);
      setSortByPopulation(false);
      setSortByArea(true);
    }
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    color: "#333",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
  };

  const filtersContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
  };

  const filterGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#555",
  };

  const selectStyle = {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const checkboxStyle = {
    transform: "scale(1.2)",
    marginRight: "5px",
  };

  const filtersHeaderStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    marginRight: "10px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Countries of the World</h1>
      <div style={filtersContainerStyle}>
        {/* Continent Filter */}
        <div style={filterGroupStyle}>
          <span style={filtersHeaderStyle}>Continent:</span>
          <select
            onChange={(e) => handleFilterChange("continent", e.target.value)}
            style={selectStyle}
          >
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </div>

        {/* Subregion Filter */}
        <div style={filterGroupStyle}>
          <span style={filtersHeaderStyle}>Subregion:</span>
          <select
            onChange={(e) => handleFilterChange("subregion", e.target.value)}
            style={selectStyle}
          >
            <option value="">All</option>
            <option value="Northern Europe">Northern Europe</option>
            <option value="Eastern Africa">Eastern Africa</option>
          </select>
        </div>

        {/* Top 10 Toggles */}
        <div style={filterGroupStyle}>
          <span style={filtersHeaderStyle}>Top 10 by:</span>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={sortOption === "population"}
              onChange={() => handleSortToggle("population")}
              style={checkboxStyle}
            />
            Population
          </label>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={sortOption === "area"}
              onChange={() => handleSortToggle("area")}
              style={checkboxStyle}
            />
            Area
          </label>
        </div>

        {/* Alphabetical Toggle */}
        <div style={filterGroupStyle}>
          <span style={filtersHeaderStyle}>Sort:</span>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={sortOption === "alphabetical"}
              onChange={() => handleSortToggle("alphabetical")}
              style={checkboxStyle}
            />
            Alphabetical
          </label>
        </div>
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
