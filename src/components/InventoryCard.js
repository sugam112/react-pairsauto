import React, { useState, useEffect } from "react";
// import "./InventoryCard.css";
import Loader from "./Loader";

const InventoryCard = () => {
  const axios = require("axios");
  const url =
    "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1";

  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)

      .then(function (response) {
        // handle success
        setProducts({
          loading: false,
          data: response,
          error: false,
        });
        console.log(response.Inventory);
      })
      .catch(function (error) {
        // handle error
        setProducts({
          loading: false,
          data: null,
          error: true,
        });

        // console.log(error);
      })
      .then(function () {
        console.log("always executed");
      });
  }, [axios]);

  let content = null;

  if (products.error) {
    content = <p>There was an error, refresh or try again later</p>;
  }
  if (products.loading) {
    content = <Loader></Loader>;
  }
  if (products) {
    console.log(products.data);
  }
  return (
    <div className="card-container col-sm-6 col-md-4 col-xl-3 col-12">
      {/* <div className="card-image">
        <img src="./images/card-1.png" alt="pic 1"></img>
      </div>
      <div className="card-details">
        <div className="row  pd-16">
          <div className="col col-8">Mercedes Benz</div>
          <div className="col col-4 tr">GLE-Class</div>
          <div className="col col-6">GLE400</div>
          <div className="col col-6 tr">$46000</div>
          <div className="col col-6">$769/month</div>
          <div className="col col-6 tr">56,000 KM</div>
        </div>
      </div> */}
      {content}
    </div>
  );
};

export default InventoryCard;
