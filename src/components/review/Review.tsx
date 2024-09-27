/* eslint-disable @next/next/no-img-element */
// components/review/Review.tsx
"use client";
import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import ReviewSlider from "./ReviewSlider";
import { useTranslations } from "next-intl";

const Review = () => {
  const t = useTranslations("Index");
  return (
    <Fragment>
      <div className="w-full flex flex-col sm:items-center lg:pt-20 pt-8 px-5 bg-bgreview ">
        <div className="flex sm:gap-1 gap-0 sm:justify-center items-start">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-14 mobile:h-11 h-5 sm:block hidden"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase text-left sm:text-center">
           
            {t("review")}<span className="text-lightGreen"> {t("Customer")} </span>{t("Says")}
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full 2xl:text-lg text-15p font-normal font-Public_Sans text-white sm:text-center md:mt-2 mt-4 mb-7 text-left leading-7">
          {t("reviewsub")}
        </p>
      </div>
      <div className="sm:pt-10">
        <ReviewSlider />
      </div>
    </Fragment>
  );
};

export default Review;
