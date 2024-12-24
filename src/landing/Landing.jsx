import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Entry from "./components/Entry";
import { BrowserRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Trending from "./components/Trending";
import ReasonstoJoin from "./components/ReasonstoJoin";
import Ellips from "./components/Ellips";
const Landing = () => {
  return (
    <>
      <Entry />
     
      <Trending />
      <ReasonstoJoin/>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Landing;






















