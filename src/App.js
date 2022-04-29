import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";

import Home from "./components/pages/Home";
import CarDetails from "./components/pages/CarDetails";
import GoToTop from "./components/GoToTop";
import InventoryCard from "./components/InventoryCard";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <GoToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={CarDetails} />
            <Route path="/inventory" component={InventoryCard} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </GoToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
