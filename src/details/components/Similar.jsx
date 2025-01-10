import  { useState,useEffect } from 'react'
import { useStore } from "zustand";
import { themeStore } from "common/Store";
import Card from './Card';
import SimilarScrollButton  from './SimilarScrollButton';
const Similar = ({id,type}) => {
const {token} = useStore(themeStore);
const [data,setData] =useState([])

const getSimilars = async () => {
  try {
    const response = await fetch(
      `http://localhost:5001/api/v1/${type}/${id}/similar`,
      {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
         
      }
    );

    if (response.ok) {
      const data = await response.json();
      setData(data.similar);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

  useEffect(()=>{
    getSimilars()
  },[id,type])

  return (
    <div  className='mt-10 relative'> 
    <h2></h2>
    
    <div className='ml-10 '><SimilarScrollButton direction={"left"}/></div>
    <div className='relative lg:mx-36'>
      <div id="movie-card-container" className="flex gap-4 overflow-y-hidden   no-scrollbar   overflow-x-scroll">
          {data.map(item => <Card key={item.id} item={item} type={type}></Card>)}
      </div>
    </div>
    <SimilarScrollButton direction={"right"}/>

    </div>
  )
}

export default Similar
