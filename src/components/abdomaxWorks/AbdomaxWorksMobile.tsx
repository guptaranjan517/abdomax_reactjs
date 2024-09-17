/* eslint-disable @next/next/no-img-element */
// components/abdomaxWorks/abdomaxWorks
import React, { Fragment } from "react";
import AppointmentButton from "../AppointmentButton";

const AbdomaxWorksMobile = () => {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center text-start pt-12 px-5">
        <div className="w-full">
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
            How <span className="text-lightGreen"> AbdoMax </span>works?
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full md:text-lg text-15p font-normal font-Public_Sans text-white  mb-7 text-start leading-7">
          Sculpt your core in 30 minutes! Our revolutionary method uses advanced
          tech for effortless, painless toning. No sweat, no strain, just
          results.
        </p>

        <ul className="w-full grid gap-5">
          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans font-semibold">
                1
              </span>
              Make an appointment
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>

          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans">
                2
              </span>
              Make an appointment
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>

          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans">
                3
              </span>
              Make an appointment
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full px-5 pt-6 pb-16 text-start">
        <AppointmentButton href="/bookAppointment" />
      </div>
    </Fragment>
  );
};

export default AbdomaxWorksMobile;
