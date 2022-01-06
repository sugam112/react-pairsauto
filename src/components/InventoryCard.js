import React from "react";
import "./InventoryCard.css";

const InventoryCard = () => {
  const axios = require("axios");

  axios
    .get(
      "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1",
      {
        headers: {
          Authorization: `no-cors`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      }
    )

    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      console.log("always executed");
    });
  return (
    <div className="card-container">
      <h2>Hello Card</h2>
      <div className="card-wrapper">
        <div className="details">
          <div className="big-img">
            <img src="images/card-1.png" alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>Item title</h2>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>Item Description</p>
            <p>Item Content</p>

            <span>Item Price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
