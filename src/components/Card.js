import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Card() {
  return (
    <div className="cards">
      <h2>Our Featured Services</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/card-1.png"
              text="Oil Change 
              CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
              label="Services"
              path="/services/oil-change"
            />
            <CardItem
              src="images/card-1.png"
              text="AC Recharge"
              label="Services"
              path="/services/ac-recharge"
            />
            <CardItem
              src="images/card-1.png"
              text="Tire Change"
              label="Services"
              path="/services/tire-change"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
