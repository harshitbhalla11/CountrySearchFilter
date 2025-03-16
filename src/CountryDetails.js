import "./CountryDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.users) {
    return <div>No data available.</div>;
  }

  const { users } = state;

  return (
    <div className="Detailcontainer">
      <button onClick={() => navigate("/")} className="back-button">
        Back
      </button>
      <h1 className="heading">Details</h1>
      <div className="details-card">
        <img
          className="flag"
          src={users.flags.svg}
          alt={`${users.name.common} flag`}
        />
        <div className="details-info">
          <h4>Name: {users.name.common}</h4>
          <h4>Capital: {users.capital}</h4>
          <h4>Population: {users.population.toLocaleString()}</h4>
          <h4>Region: {users.region}</h4>
          <h4>Subregion: {users.subregion}</h4>
          <h4>Timezones: {users.timezones.join(", ")}</h4>
          <h4>Area: {users.area.toLocaleString()} km²</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
