import React from "react";
import "./Recherche.css";

const Recherche = ({ onInputChnage }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onInputChnage(event.target.value);
    }
  };
  return (
    <div className="search_container">
      <div className="search_title_container">
        <p className="search_title">Je recherche</p>
      </div>
      <div className="search_input_container">
        <input
          onKeyPress={handleKeyDown}
          placeholder="...une ville, un code postal"
          className="search_input"
          type="text"
        />
      </div>
    </div>
  );
};

export default Recherche;
