import { useState, useEffect } from "react";
import "./index.css";
import moment from "moment";
import "moment/locale/fa";
import jMoment from "moment-jalaali";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header.jsx";
import Start from "./components/start/start.jsx";
import Footer from "./components/footer/footer";
import Login from "./components/account/login/login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
