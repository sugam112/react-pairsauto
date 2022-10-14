import React, { useEffect } from "react";
import XMLParser from "react-xml-parser";

export let Api = () => {
  useEffect(() => {
    fetch("http://localhost:5000/getData")
      .then((res) => res.text())
      .then((data) => {
        console.trace();

        var xml = new XMLParser().parseFromString(data);
        const { children } = xml;
        let allCarDetails = [];

        children.forEach((o) => allCarDetails.push(o.children));
        console.log(allCarDetails.length);

        allCarDetails.forEach((car) => console.log(car));

        // console.log(Object.values(xml));
      })
      .catch((err) => console.log(err));
  }, []);
};

export default Api;
