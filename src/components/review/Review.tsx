/* eslint-disable @next/next/no-img-element */
// components/review/Review.tsx

import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center lg:pt-20 px-5">
        <div className="flex gap-1 justify-center items-start">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-12 sm:h-8 mobile:h-6 h-5 mt-1"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-6xl lg:text-4xl md:text-3xl mobile:text-3xl text-xl uppercase">
            Our <span className="text-lightGreen"> Customer’s </span>Says
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full 2xl:text-lg md:text-base text-sm font-normal font-Public_Sans text-white text-center my-7">
          Sculpt your core in 30 minutes! Our revolutionary method uses advanced
          tech for effortless, painless toning. No sweat, no strain, just
          results.
        </p>
      </div>
      <div className="py-10">
        <ReviewSlider />
      </div>
    </Fragment>
  );
};

export default Review;
