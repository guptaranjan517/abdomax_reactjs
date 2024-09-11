/* eslint-disable @next/next/no-img-element */
// components/about/About.tsx

"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import AppointmentButton from "../AppointmentButton";
import { bannerData } from "@/shared/config";
import { cn } from "@/app/utils/merger";

const PrevArrow = () => <div className="hidden"></div>;
const NextArrow = () => <div className="hidden"></div>;

const Banner = () => {
  const [count, setCount] = useState(0);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: (current: number) => setCount(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: any) => (
      <div style={{ display: "flex" }}>
        <ul className="font-arial font-normal gap-2 flex"> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={cn(
          "w-10 h-1 rounded",
          i === count ? "bg-lightGreen" : "bg-white bg-opacity-50"
        )}
      ></div>
    ),
  };

  return (
    <div className="relative bg-bgBannercolor bannerSlider">
      <div className="relative overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {bannerData.map((items) => (
            <div key={items.id}>
              <div className="w-full h-screen 2xl:h-[90vh] lg:px-20 sm:px-14 mobile:px-12 px-7 md:pt-24 pt-14 pb-8  grid desktop:grid-cols-1 grid-cols-1 bg-bgBanner bg-no-repeat sm:bg-right-top bg-top">
                <div className="desktop:max-w-xl w-full flex flex-col gap-5 mb-7 pr-5 desktop:pr-0">
                  <h2 className="font-bold font-DIN text-white lg:text-7xl md:text-6xl mobile:text-4xl text-3xl">
                    <span className="text-lightGreen">20,000 abs </span>
                    <br className="desktop:block hidden" />
                    comfortably and effortlessly in
                    <span className="text-lightBlue">
                      <br className="desktop:block hidden" /> 30 minutes
                    </span>
                  </h2>
                  <p className="text-white font-Public_Sans font-normal md:text-lg text-sm mb-5 sm:pr-40 mobile:pr-20">
                    Sculpt your core in 30 minutes! Our revolutionary method
                    uses advanced tech for effortless, painless toning. No
                    sweat, no strain, just results.
                  </p>
                  <AppointmentButton href="/bookAppointment" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
