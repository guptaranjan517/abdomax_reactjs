/* eslint-disable @next/next/no-img-element */
// components/about/About.tsx

"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import AppointmentButton from "../AppointmentButton";
import { bannerData, mobileBannerData } from "@/shared/config";
import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";

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
    fade: true,
    cssEase: "linear",
    autoplay: false,
    afterChange: (current: number) => setCount(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: any) => (
      <div style={{ display: "flex" }}>
        <ul className="font-arial font-normal gap-2 sm:flex hidden">
          {" "}
          {dots}{" "}
        </ul>
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
    <div className="relative w-full">
      <div className="relative bannerSlider overflow-hidden hidden desktop:block mt-4 md:h-[900px]">
        <Slider ref={sliderRef} {...settings}>
          {bannerData.map((items) => (
            <div key={items.id}>
              <div
                className="w-full h-screen md:h-[75vh] desktop:h-[90vh] 2xl:h-[100vh] 3xl:h-[800px] lg:px-20 sm:px-14 mobile:px-12 px-7 md:pt-4 pt-14 3xl:pb-0 pb-8 flex items-end 2xl:items-center bg-bgBanner bg-no-repeat sm:bg-right-top bg-top"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                {/* Empty div to allow Slider to work properly */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Static text and button */}
      <div className="absolute inset-0 desktop:flex flex-col items-start justify-center z-10 text-center md:pt-0 pt-4 3xl:pb-0 pb-8 bg-bgBlush bg-right-bottom bg-no-repeat hidden 2xl:bottom-16 3xl:bottom-0 2xl:pl-20">
        <div className="w-fit flex flex-col gap-2 mb-7 pr-5 desktop:pr-0 pl-7 2xl:pl-0">
          <h2 className="w-fit font-bold font-DIN text-white 2xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-start relative">
            <span className="text-lightGreen">20,000 abs </span>
            <br className="desktop:block hidden" />
            comfortably and <br className="desktop:block hidden" /> effortlessly
            in
            <span className="text-lightBlue">
              <br className="desktop:block hidden" /> 30 minutes
            </span>
            <img
              src={ImageExport.STARICON}
              alt="star icon"
              className="absolute size-12 -top-5 right-12 xl:right-16 2xl:right-24"
            />
          </h2>
          <p className="desktop:max-w-screen-sm text-white font-Public_Sans font-normal md:text-lg text-sm mb-10 sm:pr-40 mobile:pr-20 text-start leading-9">
            Sculpt your core in 30 minutes! Our revolutionary method uses
            advanced tech for effortless, painless toning. No sweat, no strain,
            just results.
          </p>
          <AppointmentButton href="/bookAppointment" />
        </div>
      </div>

      <div className="relative bannerSliderMobile overflow-hidden block desktop:hidden">
        <Slider ref={sliderRef} {...settings}>
          {mobileBannerData.map((items) => (
            <div key={items.id}>
              <div
                className="w-full h-[300px] lg:px-20 sm:px-14 mobile:px-12 px-7 md:pt-24 pt-14 flex items-end 2xl:items-center bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                <div className="h-full w-full bg-mobileBlushImg bg-bottom bg-no-repeat"></div>
                {/* Empty div to allow Slider to work properly */}
              </div>
            </div>
          ))}
        </Slider>

        {/* Static text and button */}
        <div className="flex flex-col items-start justify-center z-10 text-center  desktop:hidden">
          <div className="w-fit flex flex-col md:gap-2 pr-5 desktop:pr-0 pl-7 2xl:pl-0">
            <h2 className="w-fit font-bold font-DIN text-white 2xl:text-8xl lg:text-7xl mobile:text-6xl text-6xl text-start relative">
              <span className="text-lightGreen">20,000 abs </span>
              <br className="desktop:block mobile:hidden block" />
              comfortably and{" "}
              <br className="desktop:block mobile:hidden block" /> effortlessly
              in
              <span className="text-lightBlue">
                <br className="desktop:block mobile:hidden block" /> 30 minutes
              </span>
              <img
                src={ImageExport.STARICON}
                alt="star icon"
                className="absolute mobile:hidden block size-12 -top-6 right-8"
              />
            </h2>
            <p className="desktop:max-w-screen-sm text-white font-Public_Sans font-normal md:text-lg text-15p md:mb-7 mb-6 sm:pr-40 mobile:pr-20 text-start desktop:leading-9 leading-7">
              Sculpt your core in 30 minutes! Our revolutionary method uses
              advanced tech for effortless, painless toning. No sweat, no
              strain, just results.
            </p>
            <AppointmentButton href="/bookAppointment" />
          </div>
        </div>
      </div>
      <div className="w-full h-7 desktop:flex justify-center absolute hidden bottom-28 3xl:bottom-24 z-10">
        <a
          href="#treatedAreasScroll"
          className="flex items-center gap-2 animate-bounce hover:animate-pulse"
        >
          <p className="uppercase text-white font-medium font-Public_Sans 2xl:text-15p text-xs">
            Scroll for more
          </p>
          <img
            src={ImageExport.SCROLLFORMORE}
            alt="scroll for more"
            className="h-3 w-5 2xl:h-5 2xl:w-7"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
