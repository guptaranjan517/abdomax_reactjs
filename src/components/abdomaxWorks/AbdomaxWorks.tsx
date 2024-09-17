/* eslint-disable @next/next/no-img-element */
// components/abdomaxWorks/abdomaxWorks
import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import AppointmentButton from "../AppointmentButton";

const AbdomaxWorks = () => {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center pt-20 px-5">
        <div className="flex gap-1 justify-center items-start mb-2">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-14 mobile:h-11"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
            How <span className="text-lightGreen"> AbdoMax </span>works?
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full md:text-lg text-15p leading-7 font-normal font-Public_Sans text-white text-center mb-10">
          Sculpt your core in 30 minutes! Our revolutionary method uses advanced
          tech for effortless, painless toning. No sweat, no strain, just
          results.
        </p>
        <AppointmentButton href="/bookAppointment" />
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="max-w-screen-md">
          <img src={ImageExport.ABDOMAXWORKS} alt="works" className="w-full" />
        </div>
      </div>
    </Fragment>
  );
};

export default AbdomaxWorks;
