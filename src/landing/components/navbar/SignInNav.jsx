import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import CustomSelect from "../CustomSelect";
const SignInNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = ["English", "Russian"];
  return (
    <>
      <div className="   max-h-10 gap-4 justify-center  flex items-center ">
        <CustomSelect
          selectedOption={selectedLanguage}
          setSelectedOption ={setSelectedLanguage}
          options={languages}
          logo={"https://www.svgrepo.com/show/348179/language.svg"}
        ></CustomSelect>

        <button className="border-transparent hover:bg-[#ce272ffb] duration-200 rounded-md h-9 text-white text-xl bg-[rgb(229,9,20)] 
        px-3 py-1  ">
          Sign In{" "}
        </button>
      </div>
    </>
  );
};

export default SignInNav;
