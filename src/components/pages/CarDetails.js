import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "../Button";

import "./CarDetails.css";

function CarDetails() {
  return (
    <div className="cardetails-container">
      <div className="container-half">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-card img-fluid"
              src="images/card-1.png"
              alt="oil change 1"
            ></img>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-card img-fluid"
              src="images/card-1.png"
              alt="oil change 1"
            ></img>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-half">
        <div className="carname">Honda Civic Type R</div>
        <div className="caryear">2020</div>
        <div className="carprice">$50,990</div>
        <div className="caremi">$834/Month</div>
        <div className="callus-button">
          <Button
            className="btns btn-shine "
            buttonstyle="btn--outline"
            buttonSize="btn--medium"
          >
            Call for purchase
          </Button>
        </div>
        <hr />
        <div className="features-section">
          <h5 className="pb-1">Vehicle details</h5>
          <div className="details-section">
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">Engine</div>
              <div className="subhead-value">
                2.0L TC I4 double overhead cam (DOHC) 16V
              </div>
            </div>
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">Kilometers</div>
              <div className="subhead-value">41452 kms</div>
            </div>
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">Drivetrain</div>
              <div className="subhead-value">FWD</div>
            </div>
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">Fuel Economy</div>
              <div className="subhead-value">
                10.6L City / 8.3L Hwy , Gasoline
              </div>
            </div>
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">VIN</div>
              <div className="subhead-value">SHHFK8G36LU300231</div>
            </div>
            <div className="car-detail">
              <div className="icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="subhead">Doors</div>
              <div className="subhead-value">4</div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="features-section">
          <h5 className="pb-1">Features</h5>

          <div className="details-section">
            <div className="car-feature">
              <div className="subhead-value">Black and Red Interior</div>
              <div className="subhead-value">Cloth Seats</div>
              <div className="subhead-value">
                Tilt &amp; Telescopic Steering
              </div>
              <div className="subhead-value">Variable Intermittent Wipers</div>
              <div className="subhead-value">Dual Air Bags</div>
              <div className="subhead-value">Head Curtain Air Bags</div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="features-section">
          <h5>Vehicle details</h5>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
