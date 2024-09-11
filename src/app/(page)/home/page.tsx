/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// home/page.tsx

"use client";
import AppointmentButton from "@/components/AppointmentButton";
import AbdomaxWorks from "@/components/abdomaxWorks/AbdomaxWorks";
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
      <Banner />
      <div className="w-full grid lg:grid-cols-4 mobile:grid-cols-2 grid-cols-1 gap-5 pt-16 md:px-14 px-5 sm:pb-32 pb-20 group">
        {exerciseCardData.map((data) => {
          return (
            <div
              className="bg-transparent w-full h-full flex flex-col justify-center items-center rounded-3xl shadow-cardshadow relative lg:even:mt-24 mobile:even:mt-10 group-hover:lg:even:mt-0 mobile:group-hover:mobile:even:mt-0 group-hover:lg:odd:mt-24 mobile:group-hover:odd:mt-10 transition-all duration-300 mobile:px-0 px-5"
              key={data.id}
            >
              <img
                src={ImageExport.BORDERCARD}
                className="w-full h-full object-center"
              />
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center px-8 py-4">
                <img src={data.icon} alt="Icon" />
                <p className="text-white font-medium md:text-lg mobile:text-sm text-base font-Public_Sans">
                  {data.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-full">
        <img
          src={ImageExport.BODYPARTS}
          className="w-full h-full"
          alt="body parts"
        />
      </div>
      <div className="bg-bgTreatedArea w-full">
        <TreatedAreas />
      </div>
      <div className="bg-black w-full flex justify-center px-5">
        <TreatmentCards />
      </div>
      <div className="bg-bgAbout pb-10">
        <About />
      </div>
      <div className="pb-10 background-container-works px-5">
        <AbdomaxWorks />
      </div>
      <div className="bg-bgAnyQuestion w-full lg:bg-cover bg-right bg-no-repeat h-full lg:py-24 py-16 md:pl-20 mb-10 lg:mb-0">
        <div className="w-full flex flex-col px-5">
          <div className="flex gap-1">
            <img
              src={ImageExport.BLACKLINESTART}
              alt="line"
              className="2xl:h-12 sm:h-8 mobile:h-6 h-5 mt-1"
            />
            <h2 className="font-bold font-DIN text-black 2xl:text-6xl lg:text-4xl md:text-3xl mobile:text-3xl text-xl uppercase">
              Do you have any
              <span className="text-lightGreen"> questions?</span>
            </h2>
          </div>
          <p className="2xl:text-xl md:text-lg text-sm font-normal font-Public_Sans text-lightBlack my-5 mobile:ml-10 ml-6">
            If you have any questions, do not hesitate to contact us!
          </p>
        </div>
        <div className="mobile:pl-14 pl-10 pt-4">
          <AppointmentButton href="/bookAppointment" />
        </div>
      </div>
      <div className="pb-10">
        <Review />
      </div>
      <div className="pb-10">
        <Faq />
      </div>
      <div id="Journey">
        <Journey />
      </div>
    </div>
  );
};

export default Home;
