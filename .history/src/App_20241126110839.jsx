import React, { useState, useEffect } from "react";
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState({ continent: "", subregion: "" });
  const [sortOption, setSortOption] = useState("alphabetical");
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

    if (filter.continent) {
      result = result.filter((country) =>
        country.continents?.includes(filter.continent)
      );
    }

    if (filter.subregion) {
      result = result.filter(
        (country) => country.subregion === filter.subregion
      );
    }

    if (sortOption === "alphabetical") {
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    if (top10) {
      if (sortByPopulation) {
        result = result.sort((a, b) => b.population - a.population).slice(0, 10);
      } else if (sortByArea) {
        result = result.sort((a, b) => b.area - a.area).slice(0, 10);
      }
    }

    setFilteredCountries(result);
  }, [countries, filter, sortOption, top10, sortByPopulation, sortByArea]);

  const handleFilterChange = (type, value) => {
    setFilter((prev) => ({
      continent: type === "continent" ? value : "",
      subregion: type === "subregion" ? value : "",
    }));
  };

  const handleSortToggle = (type) => {
    setTop10(false);
    if (type === "alphabetical") {
      setSortOption("alphabetical");
    } else if (type === "population") {
      setTop10(true);
      setSortByPopulation(true);
      setSortByArea(false);
    } else if (type === "area") {
      setTop10(true);
      setSortByPopulation(false);
      setSortByArea(true);
    }
  };

  return (
    <div>
      <h2>Countries of the World</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
        {/* Continent Filter */}
        <label>
          <strong>Continent:</strong>
          <select
            onChange={(e) =>
              handleFilterChange("continent", e.target.value)
            }
            style={{ marginLeft: "5px" }}
          >
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </label>

        {/* Subregion Filter */}
        <label>
          <strong>Subregion:</strong>
          <select
            onChange={(e) =>
              handleFilterChange("subregion", e.target.value)
            }
            style={{ marginLeft: "5px" }}
          >
            <option value="">All</option>
            <option value="Northern Europe">Northern Europe</option>
            <option value="Eastern Africa">Eastern Africa</option>
          </select>
        </label>

        {/* Top 10 Toggles */}
        <label>
          <strong>Top 10 by:</strong>
          <div style={{ display: "inline-block", marginLeft: "5px" }}>
            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={sortByPopulation}
                onChange={() => handleSortToggle("population")}
              />
              Population
            </label>
            <label>
              <input
                type="checkbox"
                checked={sortByArea}
                onChange={() => handleSortToggle("area")}
              />
              Area
            </label>
          </div>
        </label>

        {/* Alphabetical Toggle */}
        <label>
          <strong>Sort:</strong>
          <label style={{ marginLeft: "5px" }}>
            <input
              type="checkbox"
              checked={sortOption === "alphabetical"}
              onChange={() => handleSortToggle("alphabetical")}
            />
            Alphabetical
          </label>
        </label>
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
