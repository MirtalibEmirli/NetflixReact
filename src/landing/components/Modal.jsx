import GenreItems from "./GenreItems";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaXmark } from "react-icons/fa6";
// import {  } from "motion/react-client";
import { FaChevronRight } from "react-icons/fa";
const Modal = ({ handleModalClose, data, scrollY }) => {
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);
  const { t } = useTranslation();
  return createPortal(
    <div
      style={{ top: scrollY }}
      onClick={handleModalClose}
      className="absolute  w-screen h-screen bg-black/50 items-center justify-center flex left-0 z-50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration:1.5,ease:"easeIn" } }}
      />
      <div className=" max-h-[700px] max-w-[680px] border-px border-zinc-300 rounded-xl bg-zinc-900
        relative">
        <button
          onClick={handleModalClose}
          className="z-10 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25
      hover:cursor-pointer rounded-full p-2 flex items-center"
        >
          <FaXmark className="text-9xl font-bold size-16"></FaXmark>
        </button>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative"
        >
          <div
            className="absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55%
            flex items-end"
          >
            <h3 className="text-white text-5xl font-bold ml-8 mb-6">
              {data.media_type === "movie" ? data.title : data.name}
            </h3>
          </div>
          <img
            className="h-full w-full "
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt=""
          />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="px-8 pb-5"
        >
          <GenreItems genres={data.genres} />
          <p className="text-white">{data.overview}</p>
          <button
            className="flex bg-red-600 h-full mt-5 text-center font-bold text-2xl  px-4 py-3 pr-6 gap-4
          items-center justify-center rounded-md"
          >
            {t("callToAction")}
            <FaChevronRight className="text-xl mt-1 font-thin" />
          </button>
        </div>
      </div>
      <motion.div />
    </div>,

    document.getElementById("landing")
  );
};

export default Modal;
