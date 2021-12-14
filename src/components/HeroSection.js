import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ScrollArrow from "./ScrollArrow";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay muted></video>
      {/* <h1>
        We Make Car
        <br />
        Repairs Hassle Free
      </h1> */}
      <h1>a one stop shop to your auto inspection, repairs &amp; details</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonstyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Appointment&nbsp;<i className="far fa-address-book"></i>
        </Button>
        {/* <Button
          className="btns"
          buttonstyle="btn--primary"
          buttonSize="btn--large"
        >
          About Us&nbsp;<i className="fas fa-cogs"></i>
        </Button> */}
      </div>
      <ScrollArrow />
    </div>
  );
}

export default HeroSection;
