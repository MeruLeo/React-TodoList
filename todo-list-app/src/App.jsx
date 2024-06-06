import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
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
import Register from "./components/account/register/register.jsx";
import Profile from "./components/account/profile/profile.jsx";

export const UserContext = createContext();

const App = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isAccDone, setIsAccDone] = useState(false);

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        isAccDone,
        setIsAccDone,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
