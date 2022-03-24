import React, { useEffect } from "react";
import { Card, Placeholder, Button, Row } from "react-bootstrap";
// import Loader from "./Loader";
import "./InventoryCard.css";

const InventoryCard = (props) => {
  const dummy = [
    {
      id: 1,
      imgURL: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
      car_make: "Toyota",
      car_model: "Venza",
      car_year: 2012,
      price: "$47171.99",
      emi: "$519.28",
      kms: 56630,
    },
    {
      id: 2,
      imgURL: "http://dummyimage.com/108x100.png/ff4444/ffffff",
      car_make: "Mazda",
      car_model: "MX-5",
      car_year: 1995,
      price: "$44513.68",
      emi: "$1215.71",
      kms: 66711,
    },
    {
      id: 3,
      imgURL: "http://dummyimage.com/133x100.png/dddddd/000000",
      car_make: "Volvo",
      car_model: "XC70",
      car_year: 2007,
      price: "$26483.34",
      emi: "$1467.06",
      kms: 30288,
    },
    {
      id: 4,
      imgURL: "http://dummyimage.com/188x100.png/ff4444/ffffff",
      car_make: "Volkswagen",
      car_model: "Golf",
      car_year: 1984,
      price: "$44773.12",
      emi: "$1880.04",
      kms: 11889,
    },
    {
      id: 5,
      imgURL: "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
      car_make: "Subaru",
      car_model: "XT",
      car_year: 1985,
      price: "$50060.01",
      emi: "$1138.12",
      kms: 13635,
    },
    {
      id: 6,
      imgURL: "http://dummyimage.com/178x100.png/cc0000/ffffff",
      car_make: "Ford",
      car_model: "E-Series",
      car_year: 1985,
      price: "$24409.89",
      emi: "$343.88",
      kms: 42975,
    },
    {
      id: 7,
      imgURL: "http://dummyimage.com/243x100.png/cc0000/ffffff",
      car_make: "Nissan",
      car_model: "Maxima",
      car_year: 2009,
      price: "$18482.09",
      emi: "$1019.90",
      kms: 73311,
    },
    {
      id: 8,
      imgURL: "http://dummyimage.com/156x100.png/ff4444/ffffff",
      car_make: "Mazda",
      car_model: "RX-8",
      car_year: 2005,
      price: "$63417.10",
      emi: "$680.66",
      kms: 33821,
    },
    {
      id: 9,
      imgURL: "http://dummyimage.com/196x100.png/ff4444/ffffff",
      car_make: "Alfa Romeo",
      car_model: "164",
      car_year: 1993,
      price: "$33988.98",
      emi: "$767.03",
      kms: 76108,
    },
    {
      id: 10,
      imgURL: "http://dummyimage.com/156x100.png/dddddd/000000",
      car_make: "Saturn",
      car_model: "VUE",
      car_year: 2002,
      price: "$10912.03",
      emi: "$1771.64",
      kms: 44607,
    },
  ];
  // const [products, setProducts] = useState();

  const axios = require("axios");
  const url =
    "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1";

  // const inputEl = useRef("");

  // console.log(products.data);

  useEffect(() => {
    fetchData(url);
  });

  const fetchData = async (url) => {
    try {
      axios
        .get(url, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/xml; charset=utf-8",
        })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  let content = null;

  return (
    <>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Year / Make / Model"
          className="p-2"
          value={props.term}
        ></input>
      </div>
      <div className="inventory-container">
        <Row xs={1} md={2} className="g-0 d-flex justify-content-around">
          {content ? (
            dummy.map((dummyData) => {
              return (
                <Card
                  variant="top"
                  className="col-md-4 col-xl-3 col-12 m-2 card-decorations"
                  key={dummyData.id}
                >
                  <Card.Img variant="top" src="./images/card-1.png" />
                  <Card.Body>
                    <Card.Title>{dummyData.car_make}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {dummyData.car_model} {dummyData.car_year}
                    </Card.Subtitle>
                    <Card.Text> {dummyData.emi}/month</Card.Text>
                    <Card.Text>{dummyData.price}</Card.Text>
                    <Card.Text> {dummyData.kms} kms</Card.Text>
                    <Button href="/contact-us" variant="primary">
                      More details
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <Card className="col-sm-6 col-md-4 col-xl-3 col-12">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          )}
        </Row>
      </div>
    </>
  );
};

export default InventoryCard;
