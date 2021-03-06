import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the our Unique Selections</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Jungle"
              label="Ha$h"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Beach"
              label="XXX"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="Desert"
              label="Ch3M"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Mountains"
              label="Ch3M"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="exe.new"
              label="Ch3M"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
