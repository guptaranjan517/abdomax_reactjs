import React from "react";
import AppointmentButton from "../AppointmentButton";
import { ImageExport } from "@/shared/images";

const Calves = () => {
  return (
    <div className="w-full 2xl:h-700 md:h-600 sm:h-500 h-full sm:bg-bgClaves bg-none bg-no-repeat bg-cover 2xl:bg-bottom md:pt-24 sm:pt-14 pt-0 md:pl-16 sm:pl-5 pl-0 relative">
      <div className="relative sm:hidden block">
        <img src={ImageExport.CLAVESBG} alt="abs" className="" />
        <div className="absolute bottom-3 left-5">
          <h2 className="font-bold 2xl:text-3xl md:text-2xl text-3xl text-white font-DIN uppercase">
            Calves
          </h2>
          <p className="text-white font-Public_Sans font-normal md:text-base text-sm pt-3">
            HIFEM+ · Gain of Muscle
          </p>
        </div>
      </div>
      <div className="sm:w-400 w-full flex flex-col gap-3 px-5 sm:px-0">
        <h2 className="font-bold 2xl:text-4xl text-3xl text-white font-DIN uppercase hidden sm:block">
          Calves
        </h2>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm pb-1 hidden sm:block">
          HIFEM+ · Gain of Muscle
        </p>
        <p className="text-white font-Public_Sans font-normal md:text-base text-15p leading-7">
          Even though a lot of us rely on running to get toned and defined
          calves, exercise alone isn't always sufficient. Emsculpt can help the
          calves' muscle outlines "pop out" more by removing resistant fat
          layers. Having strong, toned calves is a sign of optimal physical
          health, even if it is sometimes disregarded.
        </p>
      </div>
      <div className="desktop:pt-9 pt-7 px-5 sm:px-0">
        <AppointmentButton href="/bookAppointment" />
      </div>
    </div>
  );
};

export default Calves;
