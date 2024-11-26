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
    // Fetch data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching countries data:", error));
  }, []);

  // Filter and sort data
  useEffect(() => {
    let result = [...countries];

    // Filter by continent
    if (filter.continent) {
      result = result.filter((country) =>
        country.continents?.includes(filter.continent)
      );
    }

    // Filter by subregion
    if (filter.subregion) {
      result = result.filter(
        (country) => country.subregion === filter.subregion
      );
    }

    // Sort alphabetically
    if (sortOption === "alphabetical") {
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    // Sort by population or area
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
    setTop10(false); // Reset top 10 when toggling
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
      <h1>Countries of the World</h1>
      <div>
        <label>
          Filter by Continent:
          <select
            onChange={(e) =>
              handleFilterChange("continent", e.target.value)
            }
          >
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </label>
        <label>
          Filter by Subregion:
          <select
            onChange={(e) =>
              handleFilterChange("subregion", e.target.value)
            }
          >
            <option value="">All</option>
            {/* Add specific subregions as needed */}
            <option value="Northern Europe">Northern Europe</option>
            <option value="Eastern Africa">Eastern Africa</option>
          </select>
        </label>
      </div>
      <h2>Top 10</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={sortByPopulation}
            onChange={() => handleSortToggle("population")}
          />
          By Population
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortByArea}
            onChange={() => handleSortToggle("area")}
          />
          By Area
        </label>
      </div>
      <h2>Sorting</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={sortOption === "alphabetical"}
            onChange={() => handleSortToggle("alphabetical")}
          />
          Alphabetical
        </label>
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
