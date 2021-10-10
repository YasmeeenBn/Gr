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
{
  /* <div className="container">
          <Container maxWidth="lg">
            <h1>Je recherche...</h1>
          </Container>
          <div className="container2">
            {" "}
            <Container maxWidth="lg">
              <h1 className="h11">Les villes...</h1>
            </Container>
          </div>
        </div>  */
}
{
  /* <div className="col-12 col-md-6 col-lg-4 my-4">
            <Card title="Villes d'outre-mer" />
          </div> */
}
{
  /* <div className="row">
          <div className="col-md-6 col-sm-6">
            <Card title="Villes d'outre-mer" />
          </div>
        </div> */
}
