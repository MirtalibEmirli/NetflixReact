import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const MailBox = () => {
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
    <div className="w-[540px] mx-auto">
      <p className="w-full mb-4 text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex w-full gap-3">
        <input
          onChange={(e) => {
            setMail(e.target.value);
            setInputStatus(null); // Yeni dəyər daxil edildikdə statusu sıfırlayır
          }}
          value={mail}
          type="email"
          name="mail"
          id="mail"
          placeholder="Enter your email"
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
          Get Started
          <FaChevronRight className="text-xl mt-1 font-thin" />
        </button>
      </div>

      {/* Mesajın input altına yerləşdirilməsi */}
      <div className="mt-2 text-left">
        {inputStatus === "error" && (
          <p className="text-red-500 text-sm mt-2">
            Please enter a valid email address.
          </p>
        )}
        {inputStatus === "success" && (
          <p className="text-green-500 text-sm mt-2">
            Email is valid! Proceeding...
          </p>
        )}
      </div>
    </div>
  );
};

export default MailBox;
