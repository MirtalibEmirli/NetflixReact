import React from 'react'

const Ellips = () => {
  return (
    <><div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center"></div>
    <div
      class="relative -mt-[150px] h-[100px] bg-gradient-to-b from-black via-transparent to-transparent 
            rounded-t-[55%] border-t-4 border-red-600"
    >
      <div
        className=" h-[50px] w-full bg-gradient-to-b rounded-tl-[50%_90%] rounded-tr-[50%_90%]
from-blue-950 from-10% to-black to-90%"
      ></div>
    </div></>
  )
}

export default Ellips