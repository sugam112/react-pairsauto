import React from "react";
import "./Loader.css";

export default function Loader() {
  let carFacts = [
    "The average car contains over 30,000 unique parts",
    "It would take less than a month to get to the moon by car",
    "A modern Formula 1 car can drive upside down in a tunnel at 120mph",
    "The largest speeding fine ever produced was €1,000,000",
    "The world record for removing and replacing a car engine is 42 seconds",
    "The man who invented cruise control was blind",
  ];
  let getCarFact = carFacts[Math.floor(Math.random() * carFacts.length)];
  return (
    <div className="loader">
      "<span className="is-wrapped">{getCarFact}</span>"
    </div>
  );
}
