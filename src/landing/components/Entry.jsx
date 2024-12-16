import React from "react";
import Navbar  from "./Navbar";
const Entry = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')",
      }}
    >
     
      {/* Qaranlıq Overlay */}
      <Navbar/> 
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Məzmun */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Netflix Bənzəri Səhifə</h1>
        <p className="text-lg max-w-lg">
          Netflix-in ən məşhur serial və filmlərini izləmək üçün qeydiyyatdan keçin.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg">
          İndi Başlayın
        </button>
      </div>
    </section>
  );
};

export default Entry;
