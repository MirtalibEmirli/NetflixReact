import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./Register/Register";
import { useStore } from "zustand";
import HomePage from "./homepage/HomePage";
 
import NotFound from "./common/NotFound";
import { themeStore } from "./common/Store";   
const App = () => {
  const{token}= useStore(themeStore)
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {token&& <Route  path="/home" element={<HomePage/>}/>}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/movie" element={<Movies />} />  */} 
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
