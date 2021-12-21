import React from "react";
// import Card from "../Card";
import CardItem from "../CardItem";
import "../Cards.css";
import "./Services.css";

function Services() {
  return (
    <div className="content-wrapper">
      <CardItem
        src="images/card-1.png"
        text="Oil Change"
        description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
        label="Services"
        path="/services/oil-change"
      />
      <CardItem
        src="images/card-1.png"
        text="Oil Change"
        description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
        label="Services"
        path="/services/oil-change"
      />
    </div>
  );
}

export default Services;
