import React from 'react'
import MailBox from './MailBox'
import { useTranslation } from 'react-i18next'
const MiddleEntry = () => {
  const {t} = useTranslation()
  return (
    <div className='flex flex-col inset-0 relative     text-center  px-4 justify-end h-[60vh] items-center '>
      <span className='font-bold text-6xl leading-[70px] tracking-tight  '>{t('entryTitle')}</span>
      <span className='font-bold text-6xl leading-[70px] tracking-tight  '>{t('entryTitle2')}</span>
      <span className='text-xl font-bold flex justify-center items-center mb-7 mt-4 '>{t('tagline')}</span>
     <div className='w-[640px]'>
     <MailBox  />
     </div>
       </div>

 
  )
}

export default MiddleEntry