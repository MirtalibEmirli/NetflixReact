import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Entry from "./components/Entry";
import { BrowserRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Trending from "./components/Trending";
import ReasonstoJoin from "./components/ReasonstoJoin";
import { useEffect, useState } from "react";
import { div } from "motion/react-client";
import FrequentlyAsked from "./components/FrequentlyAsked"
import MailBox from "./components/MailBox";
import Footer from "./components/Footer";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
 
  
  <div id="landing" className="w-full relative ">
    
    <Entry />

<Trending scrollY={scrollY}/>
<ReasonstoJoin />
<FrequentlyAsked/>
 
<div className="  items-center justify-center w-full    px-10 md:px-20 lg:px-72
">
  <MailBox/>
 </div>
 {/* bunu nece uzadaq? */}

 <Footer/>

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
  </div>
     
  );
};

export default Landing;
