import React from "react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className=" relative flex z-40 leading-5 bg-transparent w-full justify-between "
    >
      <div className="px-36 py-5 filter contrast-200 ">
        <img
          className="h-[40px]  "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>
      {/* buttons sign in and language */}
      <div className="flex  max-h-10 ">
        <button className="leading-4	">
          <select
            className=" bg-black text-white border border-gray-400
    px-4 py-2 pr-8 rounded-md cursor-pointer focus:outline-none focus:border-gray-300"
            name=""
            id=""
          >
            <option value="en">English</option>
            <option value="az">Azerbaycan</option>
          </select>
        </button>

        <button className="border rounded-md  bg-red-600 p-2">SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
