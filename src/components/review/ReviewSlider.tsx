/* eslint-disable @next/next/no-img-element */
// components/review/ReviewSlider.tsx

"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { reviewData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import { PrevArrow, NextArrow } from "./SliderArrow";

const ReviewSlider = () => {
  const [count, setCount] = useState(0);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: (current: number) => setCount(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bannerSlider flex justify-center sm:px-5 px-0 lg:px-0 pb-10">
      <div className="relative overflow-hidden max-w-screen-lg arrowStyle sm:px-5 px-0">
        <div className="borderCenterRating"></div>
        <div className="w-full md:flex justify-between items-start hidden">
          <img src={ImageExport.REVIEWDOT} alt="review" />
          <img src={ImageExport.REVIEWDOT} alt="review" />
        </div>
        <div className="borderLeft borderRight relative">
          <div className="borderRight h-full absolute left-1/2 sm:block hidden"></div>
          <Slider ref={sliderRef} {...settings}>
            {reviewData.map((items) => (
              <div key={items.id}>
                <div className="md:pb-0 pb-16">
                  <div className="flex flex-col gap-5 mobile:px-10 px-5 py-12 bg-bgReview sm:bg-transparent">
                    <p className="font-normal text-base leading-7 font-Public_Sans text-white">
                      {items.reviewText}
                    </p>
                    <div className="flex items-center gap-1">
                      <img src={ImageExport.STAR} alt="star" />
                      <img src={ImageExport.STAR} alt="star" />
                      <img src={ImageExport.STAR} alt="star" />
                      <img src={ImageExport.STAR} alt="star" />
                      <img src={ImageExport.STAR} alt="star" />
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={items.userImg}
                        alt="user"
                        className="bg-txtArrow rounded-full size-14"
                      />
                      <p className="text-base font-medium text-white">
                        {items.userName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:flex justify-between items-start hidden">
          <img src={ImageExport.REVIEWDOT} alt="review" />
          <img src={ImageExport.REVIEWDOT} alt="review" />
        </div>
        <div className="borderCenterRating"></div>
      </div>
    </div>
  );
};

export default ReviewSlider;
