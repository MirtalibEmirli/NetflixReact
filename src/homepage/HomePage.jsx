import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import Home from "./components/Home";
import { motion } from "motion/react";

import Navbar from "./components/Navbar";
const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState({
    title: "Home",
    value: "home",
  });
  const [trendinMovies, setTrendinMovies] = useState();

  const tabItems = [
    {
      title: "Home",
      value: "home",
    },
    {
      title: "Tv Shows",
      value: "tv",
    },
    {
      title: "Movies",
      value: "movie",
    },
  ];

  const getMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/movie/trending`
      );
      const result = await response.json();
      console.log("Fetched data:", result.content); // Konsolda yoxlayın

      if (response.ok) {
        setTrendinMovies(result.content);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const visibleTab = () => {
    if (!trendinMovies || trendinMovies.length === 0) {
      return <div className="text-white text-center mt-20">Loading...</div>;
    }

    switch (selectedTab.value) {
      case "movie":
        return <Movies trendingMovies={trendinMovies} />;
      case "tv":
        return <Shows />;
      default:
        return <Home visibleMovie={trendinMovies[0]} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeIn" } }}
    >
      <div className="relative overflow-x-hidden   ">
        <Navbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabItems={tabItems}
        />
        {trendinMovies?.length > 0 ? (
          visibleTab()
        ) : (
          <div className="text-white text-center mt-20">Loading...</div>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
