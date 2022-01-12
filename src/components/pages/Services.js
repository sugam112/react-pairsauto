import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "./Services.css";

function Services() {
  const services = [
    // Oil Change 0
    {
      title: "Oil Change",
      imgURL: [
        "images/card-1.png",
        "images/oilchange2.png",
        "images/oilchange3.png",
      ],

      types: [
        {
          description:
            "CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )",
          price: "$39",
        },
        {
          description:
            "FULL SYNTHETIC OIL CHANGE. ( *Up to 5 Liter, after that $8 /Liter )",
          price: "$69",
        },
        {
          description:
            "GERMAN CARS - FULL SYNTHETIC OIL CHANGE + PREMIUM OIL FILTER. ( *Oil up to 5 Liter, after that $4 /Liter )",
          price: "$79",
        },
      ],
    },
    // AC Recharge 1
    {
      title: "AC Recharge",
      imgURL: "images/card-1.png",

      types: [
        { description: "AC RECHARGE r134a refrigerant - $2/Oz", price: "$79" },
      ],
    },
    // Tire Change 2
    {
      title: "Tire Change",
      imgURL: "images/card-1.png",
      types: [
        { description: "4 TIRE CHANGE (ANY SIZE - ON RIMS)", price: "$39" },
        {
          description: "4 TIRE CHANGE (14inch TO 16inch - OFF RIMS)",
          price: "$39",
        },
        {
          description: "4 TIRE CHANGE (17inch TO 18inch - OFF RIMS)",
          price: "$49",
        },
        {
          description: "4 TIRE CHANGE (19inch TO 20inch - OFF RIMS)",
          price: "$59",
        },
        {
          description: "FLAT TIRE REPAIR",
          price: "$20",
        },
      ],
    },
    // Mechanical Repairs 3
    {
      title: "Mechanical Repairs",
      imgURL: "images/card-1.png",

      types: [],
    },
    // Windshield Replacement 4
    {
      title: "Windshield Replacement",
      imgURL: "images/card-1.png",

      types: [],
    },
    // Car Detailing 5
    {
      title: "Car Detailing",
      imgURL: "images/card-1.png",

      types: [
        {
          description:
            "Full exterior wash with hand dry. Full Interior clean includes Vacuum of carpets, mats and seats. Windows cleaned inside and out Interior deodorized. Wipe down of leather, plastic, vinyl. Door jams cleaned.",
          price: "BRONZE PACKAGE - $80",
        },
        {
          description:
            "Everything in Bronze package plus: Tires shined/dressed. Shampoo of carpets and seats. Engine bay wash Only. Conditioner of Leather, Plastic, and Vinyl, Trims/Seats.",
          price: "SILVER PACKAGE - $150",
        },
        {
          description:
            "Everything in Silver package plus: Headliner Wax the entire exterior of the vehicle. Engine bay wash and Shine. Degrease of tires and rims. Four tires shine/dressed.",
          price: "GOLD PACKAGE - $200",
        },
        {
          description:
            "Everything in Gold package plus: undercarriage sprayed/clean. Stage 1 Polish and Minor paint correction. Engine bay clean and Shine. Free Pet hair clean.",
          price: "PLATINUM PACKAGE - $380",
        },
        {
          description:
            "Full interior wipe down. Vacuum of carpets, mats, and seats. Removal of minor cloth stains. Windows cleaned inside. Interior deodorized door jams are cleaned.",
          price: "INTERIOR CLEAN - $60",
        },
        {
          description:
            "Everything in Gold package plus: undercarriage sprayed/clean. Stage 1 Polish and Minor paint correction. Engine bay clean and Shine. Free Pet hair clean.",
          price: "EXTERIOR CLEAN - $30",
        },
        {
          description:
            "Headlight Restoration,Headliner Starting, Undercarriage Starting, Engine Bay Wash & Shine, Leather Conditioning, Shampoo, Ceramic Coating & 2 Stage Paint Correction, Ceramic Coating (Lasts for 2 years)",
          price: "OPTIONAL ADD ONs",
        },
        {
          description:
            "Please add the following to the above selected packages: 2 Row SUV $15 and, 3 Row SUV or Truck $30",
          price: "ADDITIONAL NOTE",
        },
      ],
    },
    // Wheel Alignment 6
    {
      title: "Wheel Alignment",
      imgURL: "images/card-1.png",
      types: [{ description: "WHEEL ALIGNMENT", price: "$109" }],
    },
  ];

  console.log(services[2].types[0].description);

  return (
    <div className="service-container">
      <h2>Services At PairsAUTO</h2>
      <div className="service-wrapper">
        {/* {services.map((service, index) => ( */}
        <div className="section">
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
                src="images/oilchange2.png"
                alt="oil change 2"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/oilchange3.png"
                alt="oil change 3"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Oil Change</h2>
            <ul>
              <li className="bullet">
                <b>$39</b> - CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after
                that $4 /Liter )
              </li>
              <li className="bullet">
                <b>$69</b> - FULL SYNTHETIC OIL CHANGE. ( *Up to 5 Liter, after
                that $8 /Liter )
              </li>
              <li className="bullet">
                <b>$79</b> - GERMAN CARS - FULL SYNTHETIC OIL CHANGE + PREMIUM
                OIL FILTER. ( *Oil up to 5 Liter, after that $4 /Liter )
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/acrecharge1.png"
                alt="AC Recharge 1"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>AC Recharge</h2>
            <ul>
              <li className="bullet">
                <b>$79</b> - AC RECHARGE r134a refrigerant - $2/Oz
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/tirechange1.png"
                alt="Tire Change 1"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/tirechange1.png"
                alt="Tire Change 2"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Tire Change</h2>
            <ul>
              <li className="bullet">
                <b>$39</b> - 4 TIRE CHANGE (ANY SIZE - ON RIMS)
              </li>
              <li className="bullet">
                <b>$39</b> - 4 TIRE CHANGE (14inch TO 16inch - OFF RIMS)
              </li>
              <li className="bullet">
                <b>$49</b> - 4 TIRE CHANGE (17inch TO 18inch - OFF RIMS)
              </li>
              <li className="bullet">
                <b>$59</b> - 4 TIRE CHANGE (19inch TO 20inch - OFF RIMS)
              </li>
              <li className="bullet">
                <b>$20</b> - FLAT TIRE REPAIR
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/mechrepair1.png"
                alt="Mechanical Repairs 1"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/mechrepair2.png"
                alt="Mechanical Repairs 2"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/mechrepair3.png"
                alt="Mechanical Repairs 3"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Mechanical Repairs</h2>
            <ul>
              <li className="bullet">
                Best facilities for all car repair needs.
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/windshield1.png"
                alt="Windshield Replacement"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/windshield2.png"
                alt="Windshield Replacement"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/windshield3.png"
                alt="Windshield Replacement"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Windshield Replacement</h2>
            <ul>
              <li className="bullet">Windshield Replacement</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/cardet1.png"
                alt="Car Detailing 1"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/cardet2.png"
                alt="Car Detailing 2"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/cardet3.png"
                alt="Car Detailing 3"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Car Detailing</h2>
            <ul>
              <li className="bullet">$80 - BRONZE PACKAGE</li>
              <li className="bullet">$150 - SILVER PACKAGE</li>
              <li className="bullet">$200 - GOLD PACKAGE</li>
              <li className="bullet">$380 - PLATINUM PACKAGE</li>
              <li className="bullet">$60 - INTERIOR CLEAN</li>
              <li className="bullet">$30 - EXTERIOR CLEAN</li>
              <li className="bullet">OPTIONAL ADD ONs</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/wheel1.png"
                alt="Wheel Alignment 1"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/wheel2.png"
                alt="Wheel Alignment 2"
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-card img-fluid"
                src="images/wheel3.png"
                alt="Wheel Alignment 3"
              ></img>
            </Carousel.Item>
          </Carousel>
          <div className="details">
            <h2>Wheel Alignment</h2>
            <ul>
              <li className="bullet">
                <b>$139</b> - WHEEL ALIGNMENT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
