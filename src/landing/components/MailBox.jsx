import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const MailBox = () => {
  const {t} = useTranslation()
  const [mail, setMail] = useState("");
  const [inputStatus, setInputStatus] = useState(null);

  const handleGetStarted = () => {
    if (!mail || !mail.includes("@") || !mail.includes(".")) {
      setInputStatus("error");
    } else {
      setInputStatus("success");
    }
  };

  return (
    <div className="w-full mx-auto">
      <p className="w-full mb-4 text-center  text-lg">
        {t('readyToWatch')}
      </p>

      <div className="flex w-full gap-3">
        <input
          onChange={(e) => {
            setMail(e.target.value);
            setInputStatus(null);  
          }}
          value={mail}
          type="email"
          name="mail"
          id="mail"
          placeholder={t('placeholderEmail')}
          className={`z-10 w-[65%] bg-transparent p-4 rounded-md border-[2px]  
             ${
               inputStatus === "error"
                 ? "border-red-500"
                 : inputStatus === "success"
                 ? "border-green-500"
                 : "border-zinc-400"
             }`}
        />
        <button
          onClick={handleGetStarted}
          className="flex bg-red-600 w-[35%] gap-2 text-center font-bold text-2xl items-center justify-center rounded-md"
        >
         {t('callToAction')}
          <FaChevronRight className="text-xl mt-1 font-thin" />
        </button>
      </div>

      {/* Mesajın input altına yerləşdirilməsi */}
      <div className="mt-2 text-left">
        {inputStatus === "error" && (
          <p className="text-red-500 text-sm mt-2">
            {t('emailError')}
          </p>
        )}
        {inputStatus === "success" && (
          <p className="text-green-500 text-sm mt-2">
            {t('emailSuccess')}
          </p>
        )}
      </div>
    </div>
  );
};

export default MailBox;
