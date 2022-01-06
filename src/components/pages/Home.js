import React from "react";
import "../../App.css";
import "./Home.css";
import Card from "../Card";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="home-content">
        <div className="home-content-container">
          <div className="home-content-wrapper">
            <h2>
              we have 10+ years of
              <br /> service experience for you
            </h2>
            <p>
              Sine the year 2010 we are always ready to give you one of the best
              service. This will make a good image on the best service for us
              &amp; will help from it.
            </p>
          </div>
          <div className="highlight-wrapper">
            <ul className="highlight">
              <li className="highlight-items">customer satisfaction</li>
              <li className="highlight-items">latest &amp; modern shop</li>
              <li className="highlight-items">expertise diagnostics</li>
              <li className="highlight-items">fair pricing</li>
              <li className="highlight-items">expert care</li>
            </ul>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
}

export default Home;
