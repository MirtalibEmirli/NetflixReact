import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import CustomSelect from "./CustomSelect";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import Ellips from "./Ellips";
import ScrollButton from "./ScrollButton";

const Trending = ({ scrollY }) => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState({
    title: t("tv_shows"),
    value: "tv",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const options = [
    { title: t("tv_shows"), value: "tv" },
    { title: t("movie"), value: "movie" },
  ];

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedOption.value}/trending`
      );
      const result = await response.json();
      console.log("Fetched data:", result.content); // Konsolda yoxlayın
      setData(result.content || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedOption]);

  // Close modal
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  // Handle modal open
  useEffect(() => {
    if (selectedItem) {
      setModalOpen(true);
    }
  }, [selectedItem]);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  return (
    <>
      <Ellips />
      <div className="w-full py-20 relative z-10 px-10 md:px-40 lg:px-36 -mt-16 -mb-4">
        <h3 className="text-white text-2xl font-semibold mb-4">
          {t("trending_now")}
        </h3>
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
        <div
          className="w-full flex gap-6 overflow-y-hidden z-16
          overflow-x-scroll no-scrollbar items-center py-5 pl-7 relative"
        >
         <ScrollButton direction="left" />
     

          <div id="movie-card-container" className="flex gap-12     no-scrollbar   overflow-x-scroll">
            {data.map((item, index) => (
              <MovieCard
                key={item.id || index}
                setSelectedItem={setSelectedItem}
                item={item}
                index={index}
              />
            ))}
          </div>
          <ScrollButton direction="right" />
        </div>
        {modalOpen && (
          <Modal
            scrollY={scrollY}
            data={selectedItem}
            handleModalClose={() => {
              setModalOpen(false);
              setSelectedItem(null);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Trending;
