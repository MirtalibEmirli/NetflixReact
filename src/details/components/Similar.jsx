import  { useState,useEffect } from 'react'
import ScrollButton from '../../landing/components/ScrollButton'
import { useStore } from "zustand";
import { themeStore } from "common/Store";

const Similar = ({id,type}) => {
  const token = useStore(themeStore);
const [data,setData] =useState([])
const getSimilars = async () => {
  try {
    console.log("Fetching similar data for:", { id, type, token });

    const response = await fetch(
      `http://localhost:5001/api/v1/${type}/${id}/similar`,
      {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error var! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    setData(data.similar);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};


  useEffect(()=>{
    getSimilars()
  },[id,type])
  return (
    <div  className='mt-10'> 
    <h2></h2>
    <div className='relative '>
      <ScrollButton direction={"left"}/>
      <div  id="movie-card-container" className="flex gap-4 overflow-y-hidden   no-scrollbar   overflow-x-scroll">
          {data.map(item=><Card item={item} type={type}></Card>)}
      </div>
      <ScrollButton direction={"right"}/>

    </div>
    </div>
  )
}

export default Similar
