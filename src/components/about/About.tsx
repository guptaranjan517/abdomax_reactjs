/* eslint-disable @next/next/no-img-element */
// components/about/About.tsx

"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import AppointmentButton from "../AppointmentButton";
import Link from "next/link";
import { ImageExport } from "@/shared/images";
import { aboutData, aboutDataMobile } from "@/shared/config";
import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";

const PrevArrow = () => <div className="hidden"></div>;
const NextArrow = () => <div className="hidden"></div>;

const About = () => {
  const t = useTranslations("Aboutabdomax");
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
          "md:w-10 w-7 md:h-1 h-2p rounded",
          i === count ? "bg-lightGreen" : "bg-white bg-opacity-50"
        )}
      ></div>
    ),
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
    <div className="relative aboutSlider w-full flex justify-center">
      <div className="relative max-w-screen-xl w-full">
        <div className="w-full desktop:h-full px-10 md:pt-24 pt-16 desktop:grid desktop:grid-cols-2 grid-cols-1">
          <div className="desktop:w-600 2xl:max-w-screen-sm w-full desktop:block mb-7 pr-5 desktop:pr-0 hidden">
            <div className="flex gap-1 items-start">
              <img
                src={ImageExport.STARTLINE}
                alt="line"
                className="2xl:h-14 mobile:h-11"
              />
              <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase flex">
               {t("about")}  <span className="text-lightGreen pl-1"> {t("AbdoMax")}  </span>
              </h2>
            </div>
            <p className="text-white font-Public_Sans font-normal md:text-lg text-sm mb-3 md:mt-2">
            {t("firstpara")} 
            </p>
            <p className="text-white font-Public_Sans font-normal md:text-lg text-sm mb-3">
            {t("secondpara")} 
            </p>
            <p className="text-white font-Public_Sans font-normal md:text-lg text-sm mb-9">
            {t("thirdpara")} 
            </p>
            {/* <Link
              href="#"
              className="text-lightBlue md:text-lg text-base font-medium font-Public_Sans underline underline-offset-4 mb-5"
            >
              Read More
            </Link> */}
            <AppointmentButton  />
          </div>
          <Slider
            ref={sliderRef}
            {...settings}
            className="desktop:h-auto h-400 md:block hidden"
          >
            {aboutData.map((items) => (
              <div
                className="w-full relative !flex desktop:justify-start justify-center"
                key={items.id}
              >
                <div className="sm:w-1/2 w-full desktop:w-full">
                  <img
                    src={items.img}
                    className="w-full h-full"
                    alt="about-one"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider
            ref={sliderRef}
            {...settings}
            className="desktop:h-auto h-400 md:hidden block"
          >
            {aboutDataMobile.map((items) => (
              <div
                className="w-full relative !flex desktop:justify-start justify-center"
                key={items.id}
              >
                <img
                  src={items.img}
                  className="sm:w-1/2 w-500 desktop:w-full"
                  alt="about-one"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="desktop:w-400 2xl:max-w-screen-sm w-full flex-col gap-5 mb-7 px-5 desktop:pr-0 desktop:hidden block mt-8 desktop:mt-0">
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase flex pt-4">
            {t("about")} <span className="text-lightGreen pl-1"> {t("AbdoMax")} </span>
          </h2>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-15p leading-7 pb-1 mt-4 md:mt-0">
          {t("firstpara")} 
          </p>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-15p leading-7 py-1">
          {t("secondpara")} 
          </p>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-15p leading-7 py-1">
          {t("thirdpara")} 
          </p>
          {/* <Link
            href="#"
            className="text-lightBlue md:text-lg text-lg font-semibold font-Public_Sans underline underline-offset-4 mb-5"
          >
            Read More
          </Link> */}
          <div className="py-4 md:mt-5 mt-3">
            <AppointmentButton  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
