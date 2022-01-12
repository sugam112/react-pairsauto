import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import GoToTop from "./components/GoToTop";
// import Inventory from "./components/pages/Inventory";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        {/* <NotFoundPage /> */}
        {/* <AboutUs /> */}
        <GoToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
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
