import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./modules/pages/Home";
import OneYearAmerican from "./modules/pages/OneYearAmerican";
import Testimony from "./modules/pages/Testimony";
import About from "./modules/pages/About";
import Contact from "./modules/pages/Contact";
import OneWeekStage from "./modules/pages/OneWeekStage";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/one_year_american" element={<OneYearAmerican />} />
        <Route path="/one_week_stage" element={<OneWeekStage />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
