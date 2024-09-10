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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bannerSlider flex justify-center px-5 lg:px-0">
      <div className="relative overflow-hidden max-w-screen-lg arrowStyle">
        <img src={ImageExport.FAQBORDER} alt="border" className="w-full" />
        <Slider ref={sliderRef} {...settings}>
          {reviewData.map((items) => (
            <div key={items.id}>
              <div className="mobile:px-20 px-10 flex flex-col gap-5 border-r first:border-l border-txtArrow border-opacity-10 py-10">
                <p className="font-normal text-base font-Public_Sans text-white">
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
          ))}
        </Slider>
        <img src={ImageExport.FAQBORDER} alt="border" className="w-full" />
      </div>
    </div>
  );
};

export default ReviewSlider;
