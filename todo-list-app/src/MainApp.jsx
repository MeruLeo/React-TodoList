import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const MainApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default MainApp;
