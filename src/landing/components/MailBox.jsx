import {React,useState} from "react";
import { FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const MailBox = () => {
  const [mail,setMail]=useState()
  return (
    <div  className="w-[540px] ">
      
      <p className="w-full mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex w-full gap-3">
  
        <input name="mail"  value={mail}  placeholder="Email" type="email" className="
        z-10 w-[65%] bg-transparent p-4 rounded-md 
        border-[1px]  border-zinc-400" />
        <button className="flex  bg-red-600 w-[35%] gap-2 text-center font-bold text-2xl items-center justify-center rounded-md" >
         Get Started
         <FaChevronRight className="text-xl mt-1 font-thin  "/>
      </button>
      </div>

      
    </div>
  );
};

export default MailBox;
