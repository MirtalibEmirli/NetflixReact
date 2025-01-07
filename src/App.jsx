import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./Register/Register";
import { useStore } from "zustand";
import HomePage from "./homepage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./common/NotFound";
import { themeStore } from "./common/Store";   
import Details from "./details/Details";
const App = () => {
  const{token}= useStore(themeStore)
   return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {token&& <Route  path="/home" element={<HomePage/>}/>}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/movie" element={<Movies />} />   */}
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
     <ToastContainer /></>
  );
};

export default App;
