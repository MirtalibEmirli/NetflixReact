import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import Register from "./Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
