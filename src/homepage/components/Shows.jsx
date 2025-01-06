import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Shows = () => {
  const [trendingShows, setTrendingShows] = useState([]);
  const getShows = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/tv/trending`);
      const result = await response.json();
      console.log("Fetched data:", result.content);

      if (response.ok) {
        setTrendingShows(result.content);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getShows();
  },[]);
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration:1.5,ease:"easeIn" } }}
      > 
    <div className="grid grid-cols-5 px-[90px] pt-[120px] gap-10 mb-10 overflow-hidden no-scrollbar">
      {trendingShows.map((item) => (
        <button>
          <img
            className=" min-w-[180px] h-[250px] hover:scale-110 z-10   transition duration-150 ease-in"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt=""
          />
        </button>
      ))}
    </div>
    </motion.div >
  );
};

export default Shows;
