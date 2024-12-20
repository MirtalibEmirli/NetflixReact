import React from "react";

import SignInNav from "./SignInNav.jsx";
import Netflixlogo from "./Netflixlogo.jsx";
const Navbar = () => {
  return (
    <div
      id="navbar"
      className="relative flex z-40 bg-transparent w-full  items-center justify-between px-32 py-4 "
    >
      <div className="flex items-center">
      <Netflixlogo />
      </div>
      
      <div className="flex items-center"><SignInNav /> </div>
    </div>
  );
};

export default Navbar;
