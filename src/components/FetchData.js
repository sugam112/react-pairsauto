import React from "react";

function Fetchdata() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  axios
    .get(
      "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1"
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
    <div>
      <h2>Reading API data</h2>
    </div>
  );
}

export default Fetchdata;
