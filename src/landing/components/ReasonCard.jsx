import React from "react";

const ReasonCard = ({ reason }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#192247] to-[#210E17] p-5 rounded-2xl shadow-md text-white
     flex flex-col gap-4 w-full h-[290px] min-h-[268px] relative"
    >
      <h3 className="text-xl font-bold text-left">{reason.title}</h3>

      <p className="text-base font-roboto text-gray-400 text-left">{reason.description}</p>

      <img
        className="w-[72px] h-[72px] object-contain absolute bottom-4 right-2"
        src={reason.img}
        alt="Reason Icon"
      />
    </div>
  );
};

export default ReasonCard;
