import React from "react";
import "./Card.css";
import Recherche from "./Recherche";
import Villes from "./Villes";
import { Grid } from "@material-ui/core";

const Card = ({ title, cities }) => {
  const msgBackground = cities?.length > 0 ? "#39BB37A1" : "#BB3737A1";
  const nbrCities =
    cities?.length > 0 ? cities?.length + " villes" : "Aucune ville";

  const renderCites = () => {
    return cities?.map((city) => {
      return (
        <div className="city__container" key={city?.zip}>
          <div className="city_zip">{city?.codePostal}</div>
          <div className="city_name">{city?.nomCommune}</div>
        </div>
      );
    });
  };

  return (
    <div className="container3">
      <h2>{title}</h2>
      <div className="row">
        <div className="card" style={{ backgroundColor: msgBackground }}>
          {`${nbrCities} correspondants au texte saisi`}
        </div>
      </div>
      <div className="container_city_item">{renderCites()}</div>
    </div>
  );
};

export default Card;
