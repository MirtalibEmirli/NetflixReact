import React from 'react'

const FormItem = ({label,name,type,value,placeholder,handleInputChange,inputStyle }) => {
  return (
    <div className='flex flex-col'>
      {label&&<label htmlFor={name} >{label}</label>}
      <input {...(value?{defaultValue:value}:{})}
      className={inputStyle}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={(e)=>{{
        handleInputChange(e.target.name,e.target.value)
      }}}></input>
    </div>
  )
}

export default FormItem