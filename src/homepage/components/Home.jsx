import React from "react";
import N from "../../assets/netflix/image 5.png";
import top10 from "../../assets/netflix/Top10.svg";
import info from "../../assets/netflix/Info btn.png"
import Polygon from "../../assets/netflix/Polygon.png"

const Home = ({ visibleMovie = {} }) => {
  const { backdrop_path, title } = visibleMovie;

  return (
    visibleMovie && (
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
        className="bg-black/40 bg-blend-overlay bg-no-repeat h-screen w-full bg-cover bg-center flex items-center"
      >
<div className="ml-[64px] -mt-10  ">
  
<div className="flex items-center w-[257px] gap-2  ">
     
     <img src={N} alt="" className=" h-[27px]"/>
     <h4 className="text-zinc-400 font-roboto text-xl">S E R I E S</h4>
   </div>

   <h2 className="text-4xl mt-[5px] ml-[45px] font-Libre">{visibleMovie.title}</h2>

   <div className="flex items-center gap-2 h-[25px] my-5">
     <img src={top10} alt="" className=" h-[25px]" />
     <h3 className="font-Noto text-xl">#1 in Movies Today</h3>
   </div>

   <p className="w-[450px]   text-ml">{visibleMovie.overview.slice(0,150)}...</p>
   <div className="flex gap-3 mt-3">

    <button className="flex h-[40px] items-center hover:bg-zinc-300 duration-200 transition ease-in gap-4 rounded-[4px] px-6 w-[130px] font-bold text-black bg-white" >
    <img src={Polygon} alt="" className=" h-[23px]"/>
    <p className="text-xl">Play</p>
    
    </button>

    <button className="hover:bg-zinc-500 duration-200 transition ease-in
    flex h-[40px] w-[200px] gap-3 items-center rounded-[4px] px-6   font-bold bg-[#515451] text-white">
    <img src={info} alt="" className="h-[23px] "/>More Info
    
    </button>
   </div>
</div>

        {/*  */}
      </div>
    )
  );
};

export default Home;
