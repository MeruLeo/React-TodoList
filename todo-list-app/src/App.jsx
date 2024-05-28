import { useState, useEffect } from "react";
import "./index.css";
import moment from "moment";
import "moment/locale/fa";
import jMoment from "moment-jalaali";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
