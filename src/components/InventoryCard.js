import React, { useEffect, useState } from "react";
import { Card, Button, Row, Carousel, ListGroup } from "react-bootstrap";

import Loader from "./Loader";
import "./InventoryCard.css";

const InventoryCard = (props) => {
  const [vehicle, setVehicles] = useState();

  async function Api() {
    useEffect(() => {
      fetch("http://localhost:5000/getData")
        .then((res) =>
          // console.trace();
          res.json()
        )
        .then((data) => {
          console.log(data.Inventory.Vehicle);
          setVehicles(data.Inventory.Vehicle);
        })
        .then(console.log(vehicle))
        .catch((err) => {
          console.log(err);
          console.log(vehicle);
          setVehicles();
        });
    }, []);
  }

  Api();

  return (
    <>
      <div className="inventory-container">
        <Row xs={1} md={2} className="g-0 d-flex justify-content-around">
          {vehicle ? (
            vehicle.map((element) => {
              return (
                <Card
                  variant="top"
                  className="col-md-4 col-xl-3 col-12 m-2 card-decorations "
                  key={element.ID}
                >
                  <Carousel fade variant="top">
                    {element.PhotoURLs[0].PhotoURL.map((photoURL) => {
                      return (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={photoURL}
                            alt={element.Model}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>
                      {element.Make} {element.Model}
                    </Card.Title>
                    <Card.Text>
                      {element.Engine}{" "}
                      {element.Cylinders
                        ? element.Cylinders + " Cylinders"
                        : ""}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{element.Kilometers} Kms</ListGroup.Item>
                    <ListGroup.Item>
                      {element.Transmission == ""
                        ? "Transmission info N/A"
                        : element.Transmission}{" "}
                      {element.Drivetrain}
                    </ListGroup.Item>
                    <ListGroup.Item>{element.Year}</ListGroup.Item>
                    <ListGroup.Item>
                      {element.saleprice
                        ? new Intl.NumberFormat("en-CA", {
                            style: "currency",
                            currency: "CAD",
                          }).format(element.saleprice)
                        : "Contact for price"}
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Body>
                    <Button href="/contaact-us" variant="primary">
                      More details
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <Loader></Loader>
          )}
        </Row>
      </div>
    </>
  );
};

export default InventoryCard;
