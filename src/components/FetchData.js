import React, { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";
// import InventoryCard from "./InventoryCard";

function Fetchdata() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://cors-anywhere.herokuapp.com/https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  // const [cars, setCars] = useState({
  //   loading: false,
  //   data: null,
  //   error: false,
  // });
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetchCars();
  });

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  const fetchCars = async () => {
    axios(config)
      .then(function (response) {
        let Inventory = new XMLParser().parseFromString(response.data);
        setCars(Inventory.children);

        console.log(cars);
        return;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  fetchCars();
  // const axios = require("axios");

  // // Make a request for a user with a given ID
  // axios
  //   .get(
  //     "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1",
  //     {
  //       headers: {
  //         Authorization: `no-cors`,
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     }
  //   )

  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     console.log("always executed");
  //   });

  return <div></div>;
}

export default Fetchdata;
