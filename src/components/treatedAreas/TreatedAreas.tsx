"use client";
import { treatedAreasMenus } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React, { useState, useEffect } from "react";
import Abs from "./Abs";
import { cn } from "@/app/utils/merger";
import Flanks from "./Flanks";
import UpperArms from "./UpperArms";
import Buttocks from "./Buttocks";
import Thighs from "./Thighs";
import Calves from "./Calves";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";

const TreatedAreas: React.FC = () => {
   const {language, setLanguage} = useGlobalStore()
  const t = useTranslations("Index");
  const [activeMenu, setActiveMenu] = useState<any>("");

  useEffect(() => {
    if (treatedAreasMenus.length > 0) {
      setActiveMenu(treatedAreasMenus[0].id);
    }
  }, []);

  const handleMenuChange = (menuId: any) => {
    if (treatedAreasMenus.some((menu) => menu.id === menuId)) {
      setActiveMenu(menuId);
    }
  };

  const renderComponent = () => {
    switch (activeMenu) {
      case 1:
        return <Abs />;
      case 2:
        return <Flanks />;
      case 3:
        return <UpperArms />;
      case 4:
        return <Buttocks />;
      case 5:
        return <Thighs />;
      default:
        return <Calves />;
    }
  };

  return (
    <>
      <div className="bg-bgTreatedArea">
        <div className="w-full flex flex-col items-center sm:pt-20 pt-16 px-5">
          <div className="flex gap-1 justify-center items-start">
            <img
              src={ImageExport.STARTLINE}
              alt="line"
              className="2xl:h-14 mobile:h-11 sm:block hidden h-44 sm:auto"
            />
            <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase sm:text-left text-center">
              {t("What")} <span className="text-lightGreen">{t("areas")}</span>{" "}
              {t("treated")}{" "}
              <span className="text-lightGreen"> {t("Abdomaxname")} </span>
            </h2>
          </div>
          <p className="md:max-w-screen-md w-full md:text-lg text-15p font-normal font-Public_Sans text-white text-center md:mt-2 mt-4 mb-10 leading-7">
            {t("areastreatedsub")}
          </p>
        </div>
        <div className="w-full flex sm:justify-center border-t border-b borderCenter border-opacity-20 overflow-x-auto px-10">
          <div className="md:max-w-screen-md flex items-center lg:gap-20 gap-10 h-16">
            {treatedAreasMenus.map((data: any) => {
              const isActive = activeMenu === data.id;
              return (
                <h4
                  className={cn(
                    "text-white text-opacity-80 2xl:text-lg md:text-base text-sm font-Public_Sans cursor-pointer whitespace-nowrap hover:text-lightBlue transition-colors duration-300 ease-out",
                    isActive
                      ? "text-lightBlue"
                      : "text-white font-light"
                  )}
                  key={data.id}
                  onClick={() => handleMenuChange(data.id)}
                >
                  {data.menu[language]}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">{renderComponent()}</div>
    </>
  );
};

export default TreatedAreas;
