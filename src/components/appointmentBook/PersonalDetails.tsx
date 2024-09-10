// components/appointmentBook/PersonalDetails.tsx

"use client";

import React, { Fragment } from "react";
import Button from "../Button";

interface PersonalDetailsProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onClick }) => {
  return (
    <Fragment>
      <div className="max-w-screen-md sm:px-10 px-5 w-full bg-selecttimebg h-auto rounded-3xl shadow-inner py-12 mb-4">
        <div className="flex justify-between items-center border-b border-morningafterborder pb-6">
          <p className="text-white text-opacity-70 text-base font-medium font-Public_Sans">
            Selected Date:
          </p>
          <p className="text-white  text-base font-medium font-Public_Sans">
            Thursday 12 Sep
          </p>
        </div>
        <div className="flex justify-between items-center py-6">
          <p className="text-white text-opacity-70 text-base font-medium font-Public_Sans">
            Selected Time:
          </p>
          <p className="text-white  text-base font-medium font-Public_Sans">
            10:45 AM
          </p>
        </div>
        <p className="text-white  text-2xl font-medium font-Public_Sans pt-5">
          Personal Details
        </p>
        <form className="">
          <div className="sm:flex block w-full gap-8 py-5">
            <div className="w-full mb-5 sm:mb-0">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-inputfieldtxt font-Public_Sans"
              >
                Full Name
              </label>
              <input
                type="email"
                id="email"
                className="h-12 px-6 font-Public_Sans bg-inputfieldbg  text-inputfieldtxt text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm text-inputfieldtxt font-Public_Sans">
                Enter Mobile Number
              </label>
              <div className="relative mt-2">
                <input
                  type="tel"
                  id="phoneNumberInput"
                  className="h-12 w-full font-Public_Sans bg-inputfieldbg placeholder:text-slate-400 text-inputfieldtxt text-sm  rounded-lg  pr-3 pl-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow placeholder:text-inputfieldtxt"
                  placeholder=""
                  pattern="[0-9]*"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-5 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-inputfieldtxt font-Public_Sans"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="h-12 px-6 font-Public_Sans bg-inputfieldbg  text-inputfieldtxt text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email ID"
              />
            </div>
          </div>
          <div className="mt-9 flex justify-end">
            <Button
              type="submit"
              textButton="Book an appointment"
              onClick={onClick}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default PersonalDetails;
