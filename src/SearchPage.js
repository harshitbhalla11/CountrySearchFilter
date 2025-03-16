import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import "./SearchPage.css";

export default function SearchPage({ Data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("all");

  useEffect(() => {
    const dataFilter = Data.filter((country) =>
      country.continents[0].toLowerCase().includes(continentFilter)
    );
    setFilteredData(dataFilter);
  }, [continentFilter, Data]);

  const handleInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSelectChange = (e) => {
    setContinentFilter(e.target.value);
  };

  const mainData =
    continentFilter && continentFilter !== "all" ? filteredData : Data;

  const displayedData = mainData.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div className="search-page">
      <div className="search-controls">
      <label className="search-label" htmlFor="countrySearch">
  <FaSearchLocation className="label-icon" /> Search Country
</label>

        <div className="search-field-com">
          <FaSearchLocation className="search-icon" />
          <input
            type="text"
            id="countrySearch"
            className="search-filed"
            placeholder="Enter country name..."
            onChange={handleInputChange}
          />
        </div>
        <select
          onChange={handleSelectChange}
          className="custom-select"
          aria-label="Filter Countries By Region"
        >
          <option value="all">Filter By Region</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="north america">North America</option>
          <option value="south america">South America</option>
          <option value="antarctica">Antarctica</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="card-container">
        {displayedData.map((country) => (
          <Link
            key={country.name.common}
            to="/country"
            state={{ users: country }}
            className="card-link"
          >
            <CountryCard
              keyValue={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
