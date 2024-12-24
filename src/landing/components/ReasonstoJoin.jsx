import React from "react";
import { useTranslation } from "react-i18next";
import ReasonCard from "./ReasonCard";
import dwIcon from "../../assets/netflix/dw.svg";
import kk from "../../assets/netflix/kk.svg";
import deskt from "../../assets/netflix/SVG.svg";
import tt from "../../assets/netflix/tt.svg";

const ReasonstoJoin = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      id: 1,
      title: t("enjoyOnYourTVTitle"),
      description: t("enjoyOnYourTVDescription"),
      img: deskt, // Yerli fayl
    },
    {
      id: 2,
      title: t("downloadYourShowsTitle"),
      description: t("downloadYourShowsDescription"),
      img: dwIcon,
    },
    {
      id: 3,
      title: t("watchEverywhereTitle"),
      description: t("watchEverywhereDescription"),
      img:tt,
    },
    {
      id: 4,
      title: t("createProfilesForKidsTitle"),
      description: t("createProfilesForKidsDescription"),
      img: kk,
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-40  ">
      <h2 className="text-white font-bold text-[22px] mb-4 ml-0  ">{t("moreReasonsToJoin")}</h2>
      <div className="flex gap-4">
        {reasons.map((item) => (
          <ReasonCard key={item.id} reason={item} />
        ))}
      </div>
    </div>
  );
};

export default ReasonstoJoin;