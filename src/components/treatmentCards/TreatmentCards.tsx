/* eslint-disable @next/next/no-img-element */
import { teatmentImage } from "@/shared/config";
import Link from "next/link";
import React from "react";

const TreatmentCards = () => {
  return (
    <div className="max-w-[850px] py-10 flex flex-col gap-10 px-10">
      {teatmentImage.map((data) => {
        return (
          <div key={data.id}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-Public_Sans font-semibold lg:text-22p text-lg">
                {data.title}
              </h2>
              <Link
                href="#Journey"
                className="text-lightGreen hover:text-lightBlue md:text-lg text-base font-medium font-Public_Sans underline underline-offset-4 transition-colors duration-300 ease-out"
              >
                Click Here
              </Link>
            </div>
            <div className="w-full flex sm:flex-row flex-col desktop:gap-16 gap-10 items-center justify-between">
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
