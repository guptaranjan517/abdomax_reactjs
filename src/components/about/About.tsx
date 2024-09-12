/* eslint-disable @next/next/no-img-element */
// components/about/About.tsx

"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import AppointmentButton from "../AppointmentButton";
import Link from "next/link";
import { ImageExport } from "@/shared/images";
import { aboutData } from "@/shared/config";
import { cn } from "@/app/utils/merger";

const PrevArrow = () => <div className="hidden"></div>;
const NextArrow = () => <div className="hidden"></div>;

const About = () => {
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
        <Slider ref={sliderRef} {...settings} className="desktop:h-auto h-400">
          {aboutData.map((items) => (
            <div key={items.id}>
              <div className="w-full h-full px-10 md:pt-24 pt-14 grid desktop:grid-cols-2 grid-cols-1">
                <div className="desktop:w-400 2xl:max-w-screen-sm w-full desktop:flex flex-col gap-5 mb-7 pr-5 desktop:pr-0 hidden">
                  <div className="flex gap-1 items-start">
                    <img
                      src={ImageExport.STARTLINE}
                      alt="line"
                      className="2xl:h-14 mobile:h-11"
                    />
                    <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase flex">
                      About{" "}
                      <span className="text-lightGreen pl-1"> Abdomax</span>
                    </h2>
                  </div>
                  <p className="text-white font-Public_Sans font-normal md:text-lg text-sm">
                    High-intensity pulsed electromagnetic stimulation provides
                    continuous muscle contraction without muscle relaxation,
                    allowing the muscle to work at its maximum capacity.
                  </p>
                  <p className="text-white font-Public_Sans font-normal md:text-lg text-sm">
                    AbdoMax is based on high intensity focused electromagnetic
                    energy. It is the latest technology in non-invasive body
                    slimming and contouring, which can both build muscle and
                    burn fat.
                  </p>
                  <p className="text-white font-Public_Sans font-normal md:text-lg text-sm">
                    A single session of AbdoMax causes thousands of powerful
                    muscle contractions which are extremely important for
                    improving the tone and strength of your muscles.
                  </p>
                  <Link
                    href="#"
                    className="text-lightBlue md:text-lg text-base font-medium font-Public_Sans underline underline-offset-4 mb-5"
                  >
                    Read More
                  </Link>
                  <AppointmentButton href="/bookAppointment" />
                </div>
                <div className="w-full relative flex desktop:justify-start justify-center">
                  <img
                    src={items.img}
                    className="sm:w-1/2 w-4/5 desktop:w-full"
                    alt="about-one"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="desktop:w-400 2xl:max-w-screen-sm w-full flex-col gap-5 mb-7 px-5 desktop:pr-0 desktop:hidden block mt-8 desktop:mt-0">
          <div className="flex gap-1 items-start">
            <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase flex py-4">
              About <span className="text-lightGreen pl-1"> Abdomax</span>
            </h2>
          </div>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-base py-4">
            High-intensity pulsed electromagnetic stimulation provides
            continuous muscle contraction without muscle relaxation, allowing
            the muscle to work at its maximum capacity.
          </p>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-base py-4">
            AbdoMax is based on high intensity focused electromagnetic energy.
            It is the latest technology in non-invasive body slimming and
            contouring, which can both build muscle and burn fat.
          </p>
          <p className="text-white font-Public_Sans font-normal md:text-lg text-base py-4">
            A single session of AbdoMax causes thousands of powerful muscle
            contractions which are extremely important for improving the tone
            and strength of your muscles.
          </p>
          <Link
            href="#"
            className="text-lightBlue md:text-lg text-lg font-semibold font-Public_Sans underline underline-offset-4 mb-5"
          >
            Read More
          </Link>
          <div className="py-4 mt-8">
            <AppointmentButton href="/bookAppointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
