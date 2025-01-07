import React from 'react'
import MailBox from './MailBox'
import { useTranslation } from 'react-i18next'
const MiddleEntry = () => {
  const {t} = useTranslation()
  return (
    <div className='flex flex-col items-center justify-center   relative    text-center   px-4 mt-[50px] h-[60vh]   '>
      <span className='font-bold text-6xl  max-w-[700px] leading-[70px] tracking-tight  '>{t('entryTitle')}</span>
      <span className='text-xl font-bold  max-w-[700px] flex justify-center items-center mb-7 mt-4 '>{t('tagline')}</span>
     <div className='w-[640px]'>
     <MailBox  />
     </div>
       </div>

 
  )
}

export default MiddleEntry