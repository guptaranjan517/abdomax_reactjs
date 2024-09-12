/* eslint-disable @next/next/no-img-element */
import { teatmentImage } from "@/shared/config";
import Link from "next/link";
import React from "react";

const TreatmentCards = () => {
  return (
    <div className="max-w-[850px] py-10 flex flex-col sm:gap-10 gap-7 sm:px-10 px-5">
      {teatmentImage.map((data) => {
        return (
          <div key={data.id}>
            <div className="flex items-center justify-between sm:mb-5 mb-3">
              <h2 className="text-white font-Public_Sans font-semibold lg:text-22p sm:text-lg text-sm">
                {data.title}
              </h2>
              <Link
                href="#Journey"
                className="text-lightGreen hover:text-lightBlue md:text-lg sm:text-base text-xs font-medium font-Public_Sans underline underline-offset-4 transition-colors duration-300 ease-out"
              >
                Click Here
              </Link>
            </div>
            {/* <div className="w-full flex sm:flex-row flex-col desktop:gap-16 gap-10 items-center justify-between"> */}
            <div className="w-full grid grid-cols-2 desktop:gap-16 sm:gap-10 gap-5 items-center justify-between">
              <div className="">
                <img
                  src={data.beforeImage}
                  alt="before"
                  className="w-full hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="">
                <img
                  src={data.afterImage}
                  alt="after"
                  className="w-full hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TreatmentCards;
