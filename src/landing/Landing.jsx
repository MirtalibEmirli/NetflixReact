import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Entry from "./components/Entry";

import "react-toastify/dist/ReactToastify.css";
import { useStore } from "zustand";
import { themeStore } from "common/Store";
import ReasonstoJoin from "./components/ReasonstoJoin";
import { useEffect, useState } from "react";
import FrequentlyAsked from "./components/FrequentlyAsked";
import MailBox from "./components/MailBox";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import { useNavigate } from "react-router";
const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //biz burda token i elave eddik yeni global store ede oldugu ucun token
  //onu gotrduk ve yyoxladiqki eyer varsa landinge gelende de home a gonder

  const { token } = useStore(themeStore);
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    token && navigate("/home") && token != "";
  }, [token]);
      
  return (
    <div
      id="landing"
      className="w-full relative overflow-y-hidden   no-scrollbar   overflow-x-scroll "
    >
      <Entry />

      <Trending scrollY={scrollY} />
      <ReasonstoJoin />
      <FrequentlyAsked />

      <div
        className="  items-center justify-center w-[850px]  mx-auto h-16
"
      >
        <MailBox />
      </div>

      <Footer />

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
