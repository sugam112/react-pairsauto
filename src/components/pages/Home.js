import React from "react";
import "../../App.css";
import "./Home.css";
import Card from "../Card";
import { Button } from "../Button";
import ScrollArrow from "../ScrollArrow";
// import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <div className="hero-container">
        <h1>
          We Make Car&nbsp;
          <br />
          Repairs Hassle Free
        </h1>
        <h2 className="sub-header">What are you waiting for?</h2>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonstyle="btn--outline-reversed"
            buttonSize="btn--large"
          >
            Get Appointment&nbsp;<i className="far fa-address-book"></i>
          </Button>
        </div>
        <ScrollArrow />
      </div>
      <div className="home-content" id="home-content">
        <div className="home-content-container">
          <div className="home-content-wrapper">
            <h2>
              we have 10+ years of
              <br /> service experience for you
            </h2>
            <p>
              Since the year 2010 we are always ready to give you one of the
              best services. With a team of reliable mechanics, we are aiming to
              provide the best auto services at an affordable price to our
              customers.
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
      <div className="gallery-container">
        <div className="box">
          <img src="./images/galleryimg1.png" alt="Gallery 1" />
          <span>Workstations</span>
        </div>
        <div className="box">
          <img src="./images/galleryimg2.png" alt="Gallery 2" />
          <span>Waiting Room</span>
        </div>
        <div className="box">
          <img src="./images/galleryimg3.png" alt="Gallery 3" />
          <span>Warehouse</span>
        </div>
        <div className="box">
          <img src="./images/galleryimg4.png" alt="Gallery 4" />
          <span>Maintenance</span>
        </div>
      </div>
    </>
  );
}

export default Home;
