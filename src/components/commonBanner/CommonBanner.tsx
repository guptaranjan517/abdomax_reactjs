"use client";

import React from "react";
import AppointmentButton from "../AppointmentButton";
import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";

interface CommonBannerProps {
  title: string;
  colorTitle: string;
  desc?: string;
  mainStyle?: string;
}

const CommonBanner: React.FC<CommonBannerProps> = ({
  title,
  colorTitle,
  desc,
  mainStyle,
}) => {
  const t = useTranslations("Bannercont");
  return (
    <div
      className={cn(
        "w-full h-600 bg-no-repeat bg-cover bg-center 2xl:bg-top flex items-end",
        mainStyle
      )}
    >
      <div className="w-full flex flex-col items-center md:gap-3 gap-1 px-5">
        <h2 className="font-bold font-DIN text-white 2xl:text-8xl lg:text-7xl mobile:text-6xl text-5xl text-center">
          {title}
          <span className="text-lightGreen"> {colorTitle}</span>
        </h2>
        <p className="md:text-lg max-w-screen-sm text-15p font-normal font-Public_Sans text-white mb-6 text-center leading-7">
          {t("bannersubhead")}
        </p>
        <AppointmentButton  />
      </div>
    </div>
  );
};

export default CommonBanner;
