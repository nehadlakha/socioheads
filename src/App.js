import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} component={Home} />
        <Route path="/portfolio" element={<Portfolio />} component={Portfolio} />
        <Route path="/services" element={<Services />} component={Services} />
        <Route path="/about" element={<About />} component={About} />
        <Route path="/contact" element={<Contact />} component={Contact} />
      </Routes>
    )
  };
};

export default App;
