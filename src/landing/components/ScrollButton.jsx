import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
const ScrollButton = ({direction}) => {
  const toRight=direction==="right"
  return (
   <button
            onClick={() =>
              document
                .querySelector("#movie-card-container")
                .scrollBy({left:toRight?220:-220, behavior: "smooth" })
            }
            className={`hidden md:flex items-center justify-center bg-zinc-900 h-28 z-10 
            hover:bg-zinc-800  duration-200  p-2 rounded-full  absolute ${toRight?"-left-10":"-right-8"} top-24`}
          >
             {toRight?<FaChevronLeft/>:<FaChevronRight/>}
          </button>
          //56 ci deyqe record 
  )
}

export default ScrollButton