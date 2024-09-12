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

const TreatedAreas: React.FC = () => {
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
      case "menu1":
        return <Abs />;
      case "menu2":
        return <Flanks />;
      case "menu3":
        return <UpperArms />;
      case "menu4":
        return <Buttocks />;
      case "menu5":
        return <Thighs />;
      default:
        return <Calves />;
    }
  };

  return (
    <>
      <div className="bg-bgTreatedArea">
        <div className="w-full flex flex-col items-center pt-20 px-5">
          <div className="flex gap-1 justify-center items-start">
            <img
              src={ImageExport.STARTLINE}
              alt="line"
              className="2xl:h-14 mobile:h-11 sm:block hidden"
            />
            <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase sm:text-left text-center">
              What <span className="text-lightGreen">areas</span> can be treated
              with <span className="text-lightGreen">Abdomax</span>
            </h2>
          </div>
          <p className="md:max-w-screen-md w-full md:text-lg text-sm font-normal font-Public_Sans text-white text-center my-7">
            Abdomax is the first and only non-invasive body shaping procedure
            that uses radio frequency heating for fat reduction and high
            intensity focused electromagnetic energy for muscle strengthening
            and toning in a 30-minute session.
          </p>
        </div>
        <div className="w-full flex sm:justify-center border-t border-b borderCenter border-opacity-20 overflow-x-auto px-10">
          <div className="md:max-w-screen-md flex items-center lg:gap-20 gap-10 h-16">
            {treatedAreasMenus.map((data: any) => {
              const isActive = activeMenu === data.id;
              return (
                <h4
                  className={cn(
                    "text-white text-opacity-80 2xl:text-lg md:text-base text-sm font-Public_Sans font-light cursor-pointer whitespace-nowrap hover:text-lightBlue transition-colors duration-300 ease-out",
                    isActive ? "text-lightBlue" : "text-white"
                  )}
                  key={data.id}
                  onClick={() => handleMenuChange(data.id)}
                >
                  {data.menu}
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
