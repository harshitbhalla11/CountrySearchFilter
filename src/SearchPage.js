import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
export default function SearchPage(props) {

    // let [Data, setData] = useState([]);
    let [FilteredData, setFilteredData] = useState([]);
    let [Search, setSearch] = useState([]);
    let [ContinentFilter, setContinentFilter] = useState("all");
   
    // useEffect(() => {
    //     async function APIcalling() {
    //       let response = await fetch("https://restcountries.com/v3.1/all");
    //       let data = await response.json();
    //       setData(data);
    //     }
    //     APIcalling();
    //   }, []);


      function inputValue(e) {
        let input = e.target.value.toLowerCase();
        setSearch(input);
      }
      function selectedValue(e) {
        // let value = e.currentTarget.value.toLowerCase();
        setContinentFilter(e);
       
      }

      useEffect(()=>{
      const dataFilter = props.Data.filter((country) => {
        return (
          country.continents[0].toLowerCase().indexOf(ContinentFilter) !== -1
        );
      });
      setFilteredData(dataFilter);
    },[ContinentFilter,props.Data])
      let mainData =
      ContinentFilter && ContinentFilter !== "all"
        ? FilteredData
        : props.Data;

        return(
            <>
            <label className="searchLabel">Search Country</label>
            <div className="SearchFieldCom"><FaSearchLocation />
            <input
              type="text"
              className="searchFiled"
              onChange={(e) => inputValue(e)}
            /></div>
            
      
            <select 
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
                  return(
                    <Link style={{ textDecoration: 'none' ,color:'black'}}
                    to='/country'
                    state={{users}}>
                    <CountryCard
                    
                      keyValue={users.ccn3}
                      key={users.ccn3}
                      name={users.name.common}
                      flag={users.flags.svg}
                      population={users.population}
                    />
                    </Link>
                  );
                })}
            </div>
            
            </>
        )
    
}