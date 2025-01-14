import React from "react";
import { useTranslation } from "react-i18next";
import X_icon from "icons/X_icon.svg";
import FrItem from "./FrItem";

import { useState } from "react";
const FrequentlyAsked = () => {
  const [openItem, setOpenItem] = useState(null);
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: t("whatIsNetflix"),
      description: t("whatIsNetflixDescription"),
    },
    {
      id: 2,
      title: t("howMuchDoesNetflixCost"),
      description: t("howMuchDoesNetflixCostDescription"),
    },
    {
      id: 3,
      title: t("whereCanIWatch"),
      description: t("whereCanIWatchDescription"),
    },
    {
      id: 4,
      title: t("howDoICancel"),
      description: t("howDoICancelDescription"),
    },
    {
      id: 5,
      title: t("whatCanIWatchOnNetflix"),
      description: t("whatCanIWatchOnNetflixDescription"),
    },
    {
      id: 6,
      title: t("isNetflixGoodForKids"),
      description: t("isNetflixGoodForKidsDescription"),
    },
    {
      id: 7,
      title: t("whyAmISeeingThisLanguage"),
      description: t("whyAmISeeingThisLanguageDescription"),
    },
  ];

  return (
    <div className="px-10 md:px-20 lg:px-36 w-full mt-[64px] mb-[70px] ">
      <h2 className="text-white text-2xl font-semibold mb-4">
        {t("FrequentlyAsked")}
      </h2>

      <div className="flex flex-col gap-[8px]">
        {items.map((item, itemindex) => (
          <FrItem
            key={itemindex}
            item={item}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
