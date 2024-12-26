import React from "react";
import { FaCaretDown } from "react-icons/fa";

const CustomSelect = ({ selectedOption, setSelectedOption, options, logo }) => {
  return (
    <div
      className={`relative border-[3px] border-zinc-400 bg-black
      ${logo ? "h-10 w-[170px]" : "h-[33px] w-[140px]"} focus-within:border-white  
       rounded-md flex items-center justify-between px-3`}
    >
      {/* Logo */}
      {logo && (
        <img src={logo} alt="logo" className="h-5 w-5 bg-white" />
      )}

      {/* Seçim üçün görünməz sahə */}
      <select 
        onChange={(e)=>{
          const selectedItem=options.find(
            (item)=> item.value=== e.target.value.trim()
          )
          setSelectedOption(selectedItem)
        }}         
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none"
      >
        {options.map((item, index) => (
          <option key={item.value} className="text-xl bg-black" value={item.value}>
            {item.title}
          </option>
        ))}
      </select>

      
      <p className="text-white text-xl font-sans flex-1 text-center">
        {selectedOption.title}
      </p>

     
      <FaCaretDown className="text-white" />
    </div>
  );
};

export default CustomSelect;
