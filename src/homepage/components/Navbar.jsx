import React from "react";

const Navbar = ({ selectedTab, setSelectedTab, tabItems }) => {
  return (
    <div className=" absolute w-screen left-0 top-0 flex items-center gap-[67px] px-[90px] py-[30px]
     ">
      <img
        className="h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <div className="flex items-center gap-[28px]">
        {tabItems.map((item) => (
          <button
            className={`${
              selectedTab.value === item.value
                ? "font-bold text-white"
                : "text-zinc-400"
            } `}
            onClick={() => {
              setSelectedTab(item);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
