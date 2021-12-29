import React from "react";
// import Card from "../Card";
import CardItem from "../CardItem";
import "../Cards.css";
import "./Services.css";

function Services() {
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
  console.log(services);
  return (
    <div className="content-container">
      <h2>Services At PairsAUTO</h2>
      <div className="content-wrapper">
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
          <div className="details">
            <h1>CONVENTIONAL OIL CHANGE. </h1>
            <p>( *Up to 5 Liter, after that $4 /Liter )</p>
          </div>
        </div>
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
        </div>
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
        </div>
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
        </div>
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
        </div>
        <div className="section">
          <CardItem
            src="images/card-1.png"
            text="Oil Change"
            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
            label="Services"
            path="/services/oil-change"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
