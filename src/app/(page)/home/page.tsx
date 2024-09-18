/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// home/page.tsx

"use client";
import AppointmentButton from "@/components/AppointmentButton";
import AbdomaxWorks from "@/components/abdomaxWorks/AbdomaxWorks";
import AbdomaxWorksMobile from "@/components/abdomaxWorks/AbdomaxWorksMobile";
import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Faq from "@/components/faq/Faq";
import Journey from "@/components/journey/Journey";
import Review from "@/components/review/Review";
import TreatedAreas from "@/components/treatedAreas/TreatedAreas";
import TreatmentCards from "@/components/treatmentCards/TreatmentCards";
import { exerciseCardData, faqData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React from "react";

const Home = () => {
  return (
    <div className="w-full bg-black pt-16">
      <div className="flex justify-center lg:bg-bgStar bg-no-repeat bg-left-top">
        <Banner />
      </div>
      <div className="w-full flex justify-center md:items-start items-center  max-w-screen mx-auto lg:-mt-34 mt-5">
        <div className="w-full lg:max-w-screen-2xl max-w-screen-sm flex flex-col md:items-start items-center mobile:grid lg:grid-cols-4 mobile:grid-cols-2 grid-cols-1 gap-5 sm:gap-10 lg:gap-2 xl:gap-5 2xl:gap-10 pt-5 2xl:px-0 md:px-14 px-5 sm:pb-10 pb-5 group">
          {exerciseCardData.map((data) => {
            return (
              <div
                className="bg-transparent mobile:w-full w-72 h-auto flex flex-col justify-center md:items-start items-center rounded-3xl shadow-cardshadow relative custom-even hover:scale-105 transition-all duration-300 mobile:px-0 px-5"
                key={data.id}
              >
                <img
                  src={ImageExport.BORDERCARD}
                  className="w-full h-full object-center"
                />
                <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center px-8 py-4">
                  <img src={data.icon} alt="Icon" />
                  <p className="text-white font-medium md:text-lg mobile:text-sm text-base font-Public_Sans sm:mx-0 mx-2">
                    {data.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full sm:pb-0 pb-10 lg:-mt-8">
        <img
          src={ImageExport.BODYPARTS}
          className="w-full h-full sm:block hidden"
          alt="body parts"
        />
        <img
          src={ImageExport.MOBILEBODYPARTS}
          className="w-full h-full block sm:hidden"
          alt="body parts"
        />
      </div>
      <div className="w-full h-full" id="treatedAreasScroll">
        <TreatedAreas />
      </div>
      <div className="bg-black w-full flex justify-center desktop:py-10 sm:px-10 px-0">
        <TreatmentCards />
      </div>
      <div className="sm:bg-bgAbout  bg-black sm:pb-10 pb-0">
        <About />
      </div>
      <div className="pb-10 background-container-works px-5 sm:block hidden">
        <AbdomaxWorks />
      </div>
      <div className="sm:hidden block">
        <AbdomaxWorksMobile />
      </div>
      <div className="sm:bg-bgAnyQuestion bg-bgAnyQuestionMobile h-600 w-full bg-cover bg-right-bottom bg-no-repeat sm:h-full lg:py-24 py-16 desktop:pl-20 mb-10 lg:mb-0">
        <div className="w-full flex flex-col px-5">
          <div className="flex gap-1">
            <img
              src={ImageExport.BLACKLINESTART}
              alt="line"
              className="2xl:h-14 mobile:h-11 sm:block hidden"
            />
            <h2 className="font-bold font-DIN text-black 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
              Do you have any
              <span className="text-lightGreen"> questions?</span>
            </h2>
          </div>
          <p className="2xl:text-xl md:text-lg text-base leading-7 font-normal font-Public_Sans text-lightBlack md:my-2 sm:ml-10  2xl:ml-14">
            If you have any questions, do not hesitate to contact us!
          </p>
        </div>
        <div className="sm:pl-14 pl-5 pt-7">
          <AppointmentButton href="/bookAppointment" />
        </div>
      </div>
      <Review />
      <div className="">
        <Faq />
      </div>
      <div id="Journey">
        <Journey />
      </div>
    </div>
  );
};

export default Home;
