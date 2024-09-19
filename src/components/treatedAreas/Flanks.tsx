import React from "react";
import AppointmentButton from "../AppointmentButton";
import { ImageExport } from "@/shared/images";

const Flanks = () => {
  return (
    <div className="w-full 2xl:h-700 md:h-600 sm:h-500 h-full sm:bg-bgFlanks bg-none bg-no-repeat bg-cover md:pt-24 sm:pt-14 pt-0 md:pl-16 sm:pl-5 pl-0">
      <div className="relative sm:hidden block">
        <img src={ImageExport.FLANKSBG} alt="abs" className="" />
        <div className="absolute bottom-3 left-5">
          <h2 className="font-bold 2xl:text-3xl md:text-2xl text-3xl text-white font-DIN uppercase">
            Flanks
          </h2>
          <p className="text-white font-Public_Sans font-normal md:text-base text-sm pt-3">
            High Radiation Frequency · Fat Loss | HIFEM+ · Muscle Gain
          </p>
        </div>
      </div>
      <div className="sm:w-400 w-full flex flex-col gap-3 px-5 sm:px-0">
        <h2 className="font-bold 2xl:text-4xl text-3xl text-white font-DIN uppercase hidden sm:block">
          Flanks
        </h2>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm pb-3 hidden sm:block">
          High Radiation Frequency · Fat Loss | HIFEM+ · Muscle Gain
        </p>
        <p className="text-white font-Public_Sans font-normal md:text-base text-15p leading-7">
          The flanks, sometimes referred to as "love handles," are a frequent
          place for fat to accumulate. Our Emsculpt treatment with the EDGE
          applicator can help patients who have trouble shedding fat in these
          regions. This device is capable of treating every area of the lateral
          abdomen, including all oblique muscles and 4 fat spots (the greatest
          treatment area of any body-sculpting device in the industry).
        </p>
      </div>
      <div className="pt-7 px-5 sm:px-0">
        <AppointmentButton href="/bookAppointment" />
      </div>
    </div>
  );
};

export default Flanks;
