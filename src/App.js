import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        {/* <AboutUs /> */}

        <Routes>
          <Route path="/Home" exact component={Home} />
          {/* <Route path="/AboutUs" exact component={AboutUs} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
