import React from "react";
// import Card from "../Card";
// import CardItem from "../CardItem";
import Carousel from "react-bootstrap/Carousel";
// import "../Cards.css";
import "./Services.css";

function Services() {
  const services = [
    // Oil Change 0
    {
      title: "Oil Change",
      imgURL: "images/card-1.png",

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
          <Carousel fade>
            <Carousel.Item></Carousel.Item>
          </Carousel>
          <div className="details">
            <h3>CONVENTIONAL OIL CHANGE. </h3>
            <p>( *Up to 5 Liter, after that $4 /Liter )</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
