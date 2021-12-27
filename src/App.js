import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/pages/AboutUs";
import FetchData from "./components/FetchData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <FetchData />
        {/* <AboutUs /> */}

        <Routes>
          <Route path="/FetchData" exact component={FetchData} />
          {/* <Route path="/AboutUs" exact component={AboutUs} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
