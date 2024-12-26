import React from "react";
import Navbar from "./navbar/Navbar";
import MiddleEntry from "./MiddleEntry";
import Ellips from "./Ellips";
const Entry = () => {
  return (
    <section className="relative bg-black/30 bg-blend-overlay 
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')] 
     h-screen w-full bg-cover bg-center ">
     
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      {/* Məzmun */}
      <MiddleEntry  />



      {/* ///////// qovs*/}
    
    </section>
  );
};

export default Entry;
