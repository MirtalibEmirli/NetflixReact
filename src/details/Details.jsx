import { useState, useEffect } from "react";
import Similar from "./components/Similar";

import { useLocation } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "common/Store";

const Details = () => {
  const [trailersData, setTrailersData] = useState({});
  const [detailsData, setDetailsData] = useState({});
  const {token} = useStore(themeStore);
  const { id, type } = useLocation().state;

  const getDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/details`,
        { 
          headers: {
            Accept: "application/json",
            Authorization: `Bearer${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.cont)
        setDetailsData(data.content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getTrailers = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${type}/${id}/trailers`,
        {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
    
      if (response.ok) {
        setTrailersData(data.trailers[0].key);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getDetails(),
    getTrailers();
  }, [id, type]);

  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${detailsData.backdrop_path})`}} className={`pt-10`}>
      <iframe
        src={`https://www.youtube.com/embed/${trailersData}`}
        className="w-[800px]  mx-auto h-[400px]"
      ></iframe>
      <div className="p-10">
        <h1 className="text-white text-4xl ">
          {detailsData.name ? detailsData.name : detailsData.title}
        </h1>
        <div className="flex items-center gap-2 my-5">
          {detailsData?.genres?.map((item) => (
            <div key={item.id} className="text-white bg-zinc-800 w-fit p-3 rounded-[4px] ">
              {item.name}
            </div>
          ))}
        </div>
        <p className="text-white">{detailsData.overview}</p>
        <Similar id={id} type={type} />
      </div>
    </div>
  );
};

export default Details;
