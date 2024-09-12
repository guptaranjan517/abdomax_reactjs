"use client";

import React from "react";
import AppointmentButton from "../AppointmentButton";
import { cn } from "@/app/utils/merger";

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
  return (
    <div
      className={cn(
        "w-full h-600 bg-no-repeat bg-cover bg-center 2xl:bg-top flex items-end",
        mainStyle
      )}
    >
      <div className="w-full flex flex-col items-center gap-3">
        <h2 className="font-bold font-DIN text-white 2xl:text-8xl lg:text-7xl mobile:text-6xl text-5xl text-center">
          {title}
          <span className="text-lightGreen"> {colorTitle}</span>
        </h2>
        <p className="md:text-lg max-w-screen-sm text-sm font-normal font-Public_Sans text-white my-5 mobile:ml-10 ml-6 text-center">
          {desc}
        </p>
        <AppointmentButton href="/bookAppointment" />
      </div>
    </div>
  );
};

export default CommonBanner;
