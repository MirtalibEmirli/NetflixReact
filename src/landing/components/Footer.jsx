import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CustomSelect from "components/CustomSelect";
import tr from "icons/LanguageIcon.svg";

const Footer = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState({
    title: "English",
    value: "en",
  });
  const languages = [
    { title: "English", value: "en" },
    { title: "Russian", value: "ru" },
  ];
  useEffect(() => {
    if (selectedLanguage && selectedLanguage.value) {
      i18n.changeLanguage(selectedLanguage.value);
    }
  }, [selectedLanguage, i18n]);
  const items = [
    [
      { title: t("faq") },
      { title: t("investor_relations") },
      { title: t("privacy") },
      { title: t("speed_test") },
    ],
    [
      { title: t("help_centre") },
      { title: t("jobs") },
      { title: t("cookie_preferences") },
      { title: t("legal_notices") },
    ],
    [
      { title: t("account") },
      { title: t("ways_to_watch") },
      { title: t("corporate_information") },
      { title: t("netflix_originals") },
    ],
    [
      { title: t("media_centre") },
      { title: t("terms_of_use") },
      { title: t("contact_us") },
    ],
  ];
  return (
    <>
      <div className="flex flex-col lg:px-36 w-full mt-[75px]">
        <a className="mb-10  text-[rgb(161,161,161)] underline" href="#">Questions?Contact us</a>
        <div className="flex sm:gap-36">
          {items.map((group, groupindex) => (
            <div key={groupindex} className="flex flex-col gap-2 text-[15px]">
              {group.map((item, itemindex) => (
                <a key={itemindex} className="underline text-[rgb(161,161,161)]" href="">
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className=" mb-28 flex flex-col sm:mt-12 w-full">
          <CustomSelect
            selectedOption={selectedLanguage}
            setSelectedOption={setSelectedLanguage}
            options={languages}
            logo={tr}
          ></CustomSelect>

          <p className=" text-[rgb(161,161,161)] sm:mt-7 sm:mb-4">
            {t("netflix_azerbaijan")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

// <div className="foot_div1 relative">
// {/* <a href="#" className="absolute text-lg flex underline">
//   <p className="w-full">{t("question_contact_us")}</p>
// </a> */}

// </div>
