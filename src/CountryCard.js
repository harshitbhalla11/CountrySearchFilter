import React from "react";
import "./CountryCard.css";

function CountryCard({ keyValue, flag, name, population }) {
  return (
    <div className="country-card" key={keyValue}>
      <div className="country-card__img-wrapper">
        <img src={flag} alt={`${name} flag`} className="country-card__img" />
      </div>
      <div className="country-card__body">
        <h5 className="country-card__title">{name}</h5>
        <p className="country-card__text">
          Population: {population.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
