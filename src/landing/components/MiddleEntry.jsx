import React from 'react'
import MailBox from './MailBox'
const MiddleEntry = () => {
  return (
    <div className='flex flex-col inset-0 relative  gap-3 text-center mt-10 px-4 justify-center items-center '>
      <span className='font-bold text-7xl leading-[70px] tracking-tight  '>Unlimited movies,</span>
      <span className='font-bold text-7xl leading-[70px] tracking-tight  '>TV shows, and more</span>
      <span className='text-xl font-bold flex justify-center items-center  '>Starts at EUR 7.99. Cancel anytime.</span>
      <MailBox/>
       </div>

 
  )
}

export default MiddleEntry