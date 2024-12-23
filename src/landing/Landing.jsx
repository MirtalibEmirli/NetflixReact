import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Entry from "./components/Entry";
import { BrowserRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Trending from "./components/Trending";
const Landing = () => {
  return (
    <>
      <Entry />
      <Trending />
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
