import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import React from "react";

const SimilarScrollButton = ({direction}) => {
  const toRight=direction==="right"
  return (
    <button
      onClick={() => {
        const container = document.querySelector("#movie-card-container");
        if (container) {
          container.scrollBy({
            left: toRight ? 220 : -220,
            behavior: "smooth",
          });
        }
      }}
      className={`flex items-center justify-center bg-zinc-900 h-28 z-10  hover:bg-zinc-800 duration-200 p-2 rounded-full absolute 
  ${toRight ? "right-16" : "left-16"} top-1/2 transform -translate-y-1/2`}
    >
      {toRight ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  );
};

export default SimilarScrollButton;
 