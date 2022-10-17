/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fetch = require("node-fetch");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "*",
};

const requestEndpoint =
  "https://clients.automanager.com/3384c1d0d56a40e6a9aaf738622b81cf/inventory.xml?ID=57885f7924&Features=1&Photos=1";

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get("/getData", cors(corsOptions), (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  // eslint-disable-next-line require-jsdoc
  function getXMLfromURL(url) {
    try {
      const response = fetch(requestEndpoint, fetchOptions);
      const content = response.text();
      const data = parser.parseStringPromise(content);

      res.send(data);
    } catch (e) {
      console.log({ e });
    }
  }
  getXMLfromURL(requestEndpoint);
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});

exports.app = functions.https.onRequest(app);
