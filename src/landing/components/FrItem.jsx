import React from "react";
import icon from "../../assets/netflix/X_icon.svg";
import {motion,AnimatePresence} from "framer-motion"
const FrItem = ({ item, openItem, setOpenItem }) => {
  const itemOpen = openItem === item.id;
  return (
    <button
      onClick={() => {
        setOpenItem((prevState) => (prevState !== item.id ? item.id : null));
      }}
      className="w-full bg-[#2D2D2D] "
    >
      <div
        className="flex justify-between items-center px-[24px] py-[28px] text-2xl font-roboto 
      hover:bg-[#404040] transition ease-in duration-200
      border-black border-[1px]"
      >
        <h3 className="text-[24px] text-white">{item.title}</h3>
        <img src={icon} className={`${itemOpen && "rotate-45"}`} alt="" />
      </div>
   

      { itemOpen&& (
        <div className="bg-[#2D2D2D]  px-[24px] py-[10px] m-0 items-center justify-center  ">
          <p className="text-left text-[24px] text-white">
          {item.description.split(["break"])[0]}<br/><br/>{item.description.split(["break"])[1]}</p>
        </div>
      )}
    </button>
  );
};

export default FrItem;
