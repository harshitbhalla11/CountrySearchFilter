import "./Details.css";
import {  useLocation } from "react-router-dom";

const Details = (props) => {
  // name,region,subregion,area,timezones,capital,population
  const location = useLocation();

  const { state } = location;

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
        className="back-btn"
      >
        Back
      </button>
      <div className="content">
      <h1>Details:</h1>
      <img className="image" src={state.users.flags.svg} alt="" />
      <h4>Name :{state.users.name.common}</h4>
      <h4>Capital :{state.users.capital}</h4>
      <h4>Population :{state.users.population}</h4>
      <h4>Region :{state.users.region}</h4>
      <h4>Subregion :{state.users.subregion}</h4>
      <h4>Timezones :{state.users.timezones}</h4>
      <h4>Area :{state.users.area}</h4>
      </div>
    </>
  );
};

export default Details;
