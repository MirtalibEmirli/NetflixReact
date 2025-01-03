import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import CustomSelect from "components/CustomSelect";

 
const Footer = () => {
  const { i18n } = useTranslation()
  const { t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState({
    title: "English",
    value: "en",
  });
  const languages = [
    { title: "English", value: "en" },
    { title: "Russian", value: "ru" },
  ];
useEffect(()=>{
  if(selectedLanguage&&selectedLanguage.value){
    i18n.changeLanguage(selectedLanguage.value)
  }
},[selectedLanguage,i18n])
  return (
    <>
      <div className="foot_main lg:px-40 w-full">
        <div className="foot_div1 relative">
          <a href="#" className="absolute text-lg flex underline">
            <p className="w-full">{t("question_contact_us")}</p>
          </a>

          <ul className="foot_ul1 w-[200px] text-[rgb(161, 161, 161)]">
            <li className="content_li underline">
              <a className="links" href="https://help.netflix.com/en/node/412">
                {t("faq")}
              </a>
            </li>
            <li className="content_li underline">
              <a className="links" href="http://ir.netflix.com/">
                {t("investor_relations")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://help.netflix.com/legal/privacy"
              >
                {t("privacy")}
              </a>
            </li>
            <li className="content_li">
              <a className="links" href="https://fast.com/">
                {t("speed_test")}
              </a>
            </li>
          </ul>

        </div>

        <div className="foot_div2 ml-16">
          <ul className="foot_ul2">
            <li className="content_li">
              <a className="links" href="https://help.netflix.com/">
                {t("help_centre")}
              </a>
            </li>
            <li className="content_li">
              <a className="links" href="https://jobs.netflix.com/jobs">
                {t("jobs")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://help.netflix.com/legal/privacy#cookies"
              >
                {t("cookie_preferences")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://help.netflix.com/legal/notices"
              >
                {t("legal_notices")}
              </a>
            </li>
          </ul>
        </div>
        <div className="foot_div3 ml-16">
          <ul className="foot_ul3">
            <li className="content_li">
              <a className="links" href="https://www.netflix.com/youraccount">
                {t("account")}
              </a>
            </li>
            <li className="content_li">
              <a className="links" href="https://www.netflix.com/watch">
                {t("ways_to_watch")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://help.netflix.com/legal/corpinfo"
              >
                {t("corporate_information")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://www.netflix.com/in/browse/genre/839338"
              >
                {t("netflix_originals")}
              </a>
            </li>
          </ul>
        </div>

        <div className="foot_div4 ml-16 mb-0">
          <ul className="foot_ul4">
            <li className="content_li">
              <a className="links" href="https://media.netflix.com/">
                {t("media_centre")}
              </a>
            </li>
            <li className="content_li">
              <a
                className="links"
                href="https://help.netflix.com/legal/termsofuse"
              >
                {t("terms_of_use")}
              </a>
            </li>
            <li className="content_li">
              <a className="links" href="https://help.netflix.com/contactus">
                {t("contact_us")}
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <p className="lg:px-40 text-[rgb(161,161,161)] mb-4">
        {t("netflix_azerbaijan")}
      </p>

      <div className="lg:px-40 mb-28" >
      <CustomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} 
      options={languages}   logo={"https://www.svgrepo.com/show/348179/language.svg"} ></CustomSelect>
      </div>
    </>
  );
};

export default Footer;
