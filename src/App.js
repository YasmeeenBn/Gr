import React, { useState } from "react";
import "./App.css";
import reactDom from "react-dom";
import Card from "./Components/Card";
import Recherche from "./Components/Recherche";
import axios from "axios";
import { url } from "./helpers/constant";

function App() {
  const [metropoleCities, setMetropoleCities] = useState([]);
  const [outremerCities, setOutremerCities] = useState([]);

  const onInputChange = async (keyword) => {
    try {
      const cities = await axios.get(`${url}/cities/metro/${keyword}`);
      setMetropoleCities(cities.data);
      const citiesOutre = await axios.get(`${url}/cities/outre/${keyword}`);
      setOutremerCities(citiesOutre.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Recherche onInputChnage={onInputChange} />

      <div className="city_container">
        <div className="city_metropole">
          <Card cities={metropoleCities} title="Villes de metropole" />
        </div>
        <div className="city_outremer">
          <Card cities={outremerCities} title="Villes d’outre-mer" />
        </div>
      </div>
    </div>
  );
}

export default App;
