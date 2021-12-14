import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />

        <Routes>
          <Route path="/Home" exact component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
