import React from "react";
import AppointmentButton from "../AppointmentButton";
import { ImageExport } from "@/shared/images";

const UpperArms = () => {
  return (
    <div className="w-full 2xl:h-700 md:h-600 sm:h-500 h-full sm:bg-bgUpperArms bg-none bg-no-repeat bg-cover md:pt-24 sm:pt-14 pt-0 md:pl-16 sm:pl-5 pl-0">
      <div className="relative sm:hidden block">
        <img src={ImageExport.UPPERARMSBG} alt="abs" className="" />
        <div className="absolute bottom-3 left-5">
          <h2 className="font-bold 2xl:text-3xl md:text-2xl text-3xl text-white font-DIN uppercase">
            Upper Arms
          </h2>
          <p className="text-white font-Public_Sans font-normal md:text-base text-sm pt-3">
            HIFEM+ · Muscle Growth | High RF · Fat Reduction | Biceps: HIFEM+ ·
            Muscle Growth
          </p>
        </div>
      </div>
      <div className="sm:w-400 w-full flex flex-col gap-3 px-5 sm:px-0">
        <h2 className="font-bold 2xl:text-4xl text-3xl text-white font-DIN uppercase hidden sm:block">
          Upper Arms
        </h2>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm pb-3 hidden sm:block">
          HIFEM+ · Muscle Growth | High RF · Fat Reduction | Biceps: HIFEM+ ·
          Muscle Growth
        </p>
        <p className="text-white font-Public_Sans font-normal md:text-base text-15p leading-7">
          Applying Emsculpt to the arms helps reduce adipose tissue and
          highlight the underlying muscular definition. High RF is now used in
          this treatment to significantly improve fat loss. Leaner arms radiate
          vitality and appear healthier.
        </p>
      </div>
      <div className="pt-7 px-5 sm:px-0">
        <AppointmentButton href="/bookAppointment" />
      </div>
    </div>
  );
};

export default UpperArms;
