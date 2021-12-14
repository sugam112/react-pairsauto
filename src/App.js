import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <>
      <AboutUs />

      {/* <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/AboutUs" exact component={AboutUs} />
      </Routes> */}
    </>
  );
}

export default App;
