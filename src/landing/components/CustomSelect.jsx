import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
const CustomSelect = ({selectedOption,setSelectedOption,options,logo}) => {
  return (
    <div className={`  relative border-[3px] border-zinc-400 h-10 bg-black
      ${logo ? "h-full w-[170px] color-white" : "h-[33px] w-[140px]"} focus-within:border-white  
       rounded-md flex items-center px-2 `}
    >
      {logo&&(
        <img src={logo} alt='logo' className='h-5 w-5 mr-3 bg-white'/>
      )}
      <select onChange={(e)=>{setSelectedOption(e.target.value)}}
    value={selectedOption}    className=' w-full h-full opacity-0  items-center  hover:cursor-pointer text-xl
        focus:outline-none"
 '>
          {options.map(item=><option className=' text-xl bg-black'  value={item}>{item}</option>)}
        </select>
        <p className={`absolute top-1 ${logo?"left-10":"left-2"}  text-white pointer-events-none text-xl font-sans`}
        >{selectedOption}</p>
        <FaCaretDown></FaCaretDown>
    </div>
  )
}

export default CustomSelect