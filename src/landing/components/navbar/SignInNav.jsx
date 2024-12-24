import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import CustomSelect from "../CustomSelect";
import { useTranslation } from "react-i18next";
const SignInNav = () => {
  const { i18n } = useTranslation();
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState({
    title: "English",
    value: "en",
  });
  const languages = [
    { title: "English", value: "en" },
    { title: "Russian", value: "ru" },
  ];

  useEffect(()=>{
    if (selectedLanguage && selectedLanguage.value) {
      i18n.changeLanguage(selectedLanguage.value);
    }  },[selectedLanguage,i18n])

  return (
    <>
      <div className="   max-h-10 gap-4 justify-center  flex items-center ">
        <CustomSelect
          selectedOption={selectedLanguage}
          setSelectedOption={setSelectedLanguage}
          options={languages}
          logo={"https://www.svgrepo.com/show/348179/language.svg"}
        ></CustomSelect>

        <button
          className="border-transparent  hover:bg-[#ce272ffb] duration-200 rounded-md h-9 text-white text-xl bg-[rgb(229,9,20)] 
        px-3 py-1  "
        >
         { t('signin')} 
        </button>
      </div>
    </>
  );
};

export default SignInNav;
