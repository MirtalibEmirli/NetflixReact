import React from "react";
import { useNavigate } from "react-router";
const Card = ({ item, type }) => {
  const navigate = useNavigate();
  return (
    <button className="hover:scale-110 transition duration-150 ease-in"
      onClick={() => {
        navigate("/details", {
          state: {
            type: type ? type : item.media_type,
            id: item.id,
          },
        });
      }}
    >
      <img
        className="sm:min-w-[180px] sm:w-[120px] h-[20px] sm:h-[250px]"
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt=""
      />
      <p className="text-white ">{type === "tv" ? item.name : item.title}</p>
    </button>
  );
};

export default Card;
