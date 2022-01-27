import { useEffect, useState } from "react";
import CountryCard from "./CountryCard"
import "./App.css";
 import { FaSearchLocation } from 'react-icons/fa';
function App() {
  let [Data, setData] = useState([]);
  let [Search, setSearch] = useState([]);

  useEffect(() => {
    async function APIcalling() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      setData(data);
    }
    APIcalling();
  }, []);
function inputValue(e){
  let input= e.target.value.toLowerCase();
  setSearch(input);
}
  return (
    <div >
     
    <label className="searchLabel">Search Country</label>
    <FaSearchLocation /> <input type="text" className="searchFiled" onChange={(e)=>inputValue(e)}/>
    <div className="card-container">
        {Data.filter((country)=>{return country.name.common.toLowerCase().indexOf(Search)!== -1}).map((users) => {
          return (
          <CountryCard
          keyValue={users.ccn3}
          key={users.ccn3}
              name={users.name.common}
              flag={users.flags.svg}
              population={users.population}
          
          />
          )
        })}
        </div>
      
        </div>
  );
}

export default App;
