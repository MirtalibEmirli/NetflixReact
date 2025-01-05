import React from "react";

const ReasonCard = ({ reason }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#192247] to-[#210E17] p-5 rounded-2xl shadow-md text-white
     flex flex-col gap-4 w-full max-h-[268px] h-[268px] min-h-[268px] relative"
    >
      <h3 className="text-lg font-bold text-left">{reason.title}</h3>

      <p className=" text-[15px] font-roboto text-gray-400 text-left">{reason.description}</p>

      <img
        className="w-[62px] h-[62px] object-contain absolute bottom-1 right-0"
        src={reason.img}
        alt="Reason Icon"
      />
    </div>
  );
};

export default ReasonCard;
