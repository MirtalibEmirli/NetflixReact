import React from "react";
import Navbar from "./navbar/Navbar";
import MiddleEntry from "./MiddleEntry";
const Entry = () => {
  return (
    <section className="relative bg-black/30 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')] h-screen w-full bg-cover bg-center ">
      {/* Qaranlıq Overlay */}
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      {/* Məzmun */}
      <MiddleEntry />

      {/* ///////// qovs*/}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center"></div>
      <div
        class="relative -mt-[150px] h-[100px] bg-gradient-to-b from-black via-transparent to-transparent 
              rounded-t-[55%] border-t-4 border-red-600"
      >
        <div
          className=" h-[50px] w-full bg-gradient-to-b rounded-tl-[50%_90%] rounded-tr-[50%_90%]
  from-blue-950 from-10% to-black to-90%"
        ></div>
      </div>
    </section>
  );
};

export default Entry;
