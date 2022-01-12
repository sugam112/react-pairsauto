import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Card() {
  const services = {
    data: [
      {
        title: "Oil Change",
        description:
          "CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )",
        src: "images/card-1.png",
      },
      {
        title: "Oil Change",
        description: "AC RECHARGE r134a refrigerant - $2/Oz",
        src: "images/card-1.png",
      },
      {
        title: "Tire Change",
        description: "4 TIRE CHANGE (ANY SIZE - ON RIMS) and more",
        src: "images/card-1.png",
      },
    ],
  };
  const res = { ...services.data };
  const titles = res.title;
  console.log(titles);
  return (
    <div className="cards">
      <h2>Our Featured Services</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/card-1.png"
              text="Oil Change"
              description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/acrecharge1.png"
              text="AC Recharge"
              description="AC RECHARGE r134a refrigerant - $2/Oz"
              label="Services"
              path="/services"
            />
            <CardItem
              src="images/tirechange1.png"
              text="Tire Change"
              description="4 TIRE CHANGE (ANY SIZE - ON RIMS)"
              label="Services"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
