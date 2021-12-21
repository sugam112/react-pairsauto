import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Services />
        {/* <AboutUs /> */}

        <Routes>
          <Route path="/Services" exact component={Services} />
          {/* <Route path="/AboutUs" exact component={AboutUs} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
