import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import "./App.css";
import { FaSearchLocation } from "react-icons/fa";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Select from "./Select";
function App() {
  let [Data, setData] = useState([]);
  let [FilteredData, setFilteredData] = useState([]);
  let [Search, setSearch] = useState([]);
  let [ContinentFilter, setContinentFilter] = useState("all");
  useEffect(() => {
    async function APIcalling() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      setData(data);
    }
    APIcalling();
  }, []);
  function inputValue(e) {
    let input = e.target.value.toLowerCase();
    setSearch(input);
  }
  function selectedValue(e) {
    // let value = e.currentTarget.value.toLowerCase();
    setContinentFilter(e);
    setTimeout(function FilteredData1() {
      
    }, 1000);
  }
  useEffect(()=>{console.log("code is running" + ContinentFilter);
  const dataFilter = Data.filter((country) => {
    return (
      country.continents[0].toLowerCase().indexOf(ContinentFilter) !== -1
    );
  });
  setFilteredData(dataFilter);},[ContinentFilter])

  let mainData =
    ContinentFilter && ContinentFilter !== "all"
      ? FilteredData
      : Data;

  return (
    <div>
      <label className="searchLabel">Search Country</label>
      <div className="SearchFieldCom"><FaSearchLocation />
      <input
        type="text"
        className="searchFiled"
        onChange={(e) => inputValue(e)}
      /></div>
      

      <select 
        className="select"
        onChange={(e) => {
          selectedValue(e.target.value);
        }}
        className="custom-select"
        aria-label="Filter Countries By Region"
      >
        <option value="all">Filter By Region</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="north america">North America</option>
        <option value="south america">South America</option>
        <option value="antarctica">Antarctica</option>
        <option value="oceania">Oceania </option>
      </select>
      <div className="card-container">
        {mainData
          .filter((country) => {
            return country.name.common.toLowerCase().indexOf(Search) !== -1;
          })
          .map((users) => {
            // region
            return (
              <CountryCard
                keyValue={users.ccn3}
                key={users.ccn3}
                name={users.name.common}
                flag={users.flags.svg}
                population={users.population}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
