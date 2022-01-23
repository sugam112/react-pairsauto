import React from "react";

function Fetchdata() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

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

  return (
    <div>
      <h2>Reading API data</h2>
    </div>
  );
}

export default Fetchdata;
