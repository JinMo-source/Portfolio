import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Stack from "./Components/Stack";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import "./style/common.css";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
