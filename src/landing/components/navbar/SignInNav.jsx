import React from "react";
import { FaGlobe } from "react-icons/fa";
const SignInNav = () => {
  return (
    <>
      {/* buttons sign in and language */}

      <div className="   max-h-10 gap-4 justify-center  flex items-center space-x-4 ">
        <button className="flex items-center bg-black space-x-1 max-h-8
         text-white border border-gray-400 focus:border-2 focus:border-white
          rounded-md px-4 py-2 cursor-pointer "
   
        >
     <FaGlobe className="decoration-white w-4 h-4 text-white"/>
          <select
            className="bg-black text-white outline-none appearance-none cursor-pointer"
            name=""
            id=""
          >     
            <option value="en">English</option>
            <option value="az">Azerbaycan</option>
          </select>
        </button>

        <button className="border-transparent rounded-md max-h-8 bg-red-600 px-3 py-1  ">
          Sign In{" "}
        </button>
      </div>
    </>
  );
};

export default SignInNav;
