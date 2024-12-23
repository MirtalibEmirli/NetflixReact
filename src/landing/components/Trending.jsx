import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import CustomSelect from "./CustomSelect";
import Modal from "./Modal";
const Trending = () => {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("Movie");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const options = ["Movie", "TV"];

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`
      );
      const data = await response.json();
      console.log(data.content);
      setData(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };
  useEffect(() => {
    getData();
  }, [selectedOption]);

  useEffect(() => {
    if (selectedItem) {
      setModalOpen(true);
    }
  }, [selectedItem]);
  
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "scroll";
  }, [modalOpen]);

  return <div>Trending</div>;
};

export default Trending;
