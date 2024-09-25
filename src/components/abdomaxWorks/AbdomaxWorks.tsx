/* eslint-disable @next/next/no-img-element */
// components/abdomaxWorks/abdomaxWorks
import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import AppointmentButton from "../AppointmentButton";
import { useTranslations } from "next-intl";

const AbdomaxWorks = () => {
  const t = useTranslations("Abdomaxwork");
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center pt-20 px-5">
        <div className="flex gap-1 justify-center items-start mb-2">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-14 mobile:h-11"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
            {t("how")} <span className="text-lightGreen"> {t("AbdoMax")} </span>
            {t("works")}
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full md:text-lg text-15p leading-7 font-normal font-Public_Sans text-white text-center mb-9">
          {t("worksub")}
        </p>
        <AppointmentButton />
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="max-w-screen-md">
          {/* <img src={ImageExport.ABDOMAXWORKS} alt="works" className="w-full" /> */}

          <div className="w-[600px] mx-auto">
            <div className=" relative border-r-2  border-t-2 border-dashed border-journerwhiteborder ml-24 m-0 py-12 pr-24 rounded-r-[120px] before:absolute before:-left-5 before:-top-1 before:transform before:-translate-y-1/2 before:bg-[url('/images/journey-arrow.svg')] before:bg-no-repeat before:bg-contain before:w-8 before:h-8">
              <div className="flex relative">
                <div className="mr-0 absolute -left-[120px]">
                  <img
                    src="/images/appointement.png"
                    alt="Icon"
                    className="w-14"
                  />
                </div>
                <div className="block">
                  <p className="text-white font-semibold font-Public_Sans text-xl">
                    <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mb-4 mr-4 text-black font-Public_Sans font-semibold">
                      1
                    </span>
                    {t("appointment")}
                  </p>
                  <p className="text-white px-0 py-2 md:text-base text-15p leading-7 mt-2">
                    {t("appointmentsub")}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-l-2 border-dashed border-journerborder  py-12 pr-0 mr-[110px] rounded-l-[120px]">
              <div className="flex ml-20 relative">
                <div className="block text-end">
                  <p className="text-white font-semibold font-Public_Sans text-xl relative pt-12">
                    <span className="absolute right-0 top-0 flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mb-4 mr-0 text-black font-Public_Sans font-semibold">
                      2
                    </span>
                    {t("datetime")}
                  </p>
                  <p className="text-white px-0 py-2 md:text-base text-15p leading-7 mt-2">
                    {t("datetimesub")}
                  </p>
                </div>

                <div className="ml-8 absolute -right-[120px]">
                  <img
                    src="/images/date-time-1.png"
                    alt="Icon"
                    className="w-14"
                  />
                </div>
              </div>
            </div>
            <div className="relative border-t-2 border-b-2 border-dashed border-journerborder pr-24 m-0 py-12 pl-0 ml-[110px] rounded-r-[120px] before:absolute before:left-0 before:-bottom-4 before:transform  before:bg-[url('/images/last-dot.svg')] before:bg-no-repeat before:bg-contain before:w-8 before:h-8">
              <div className="flex relative">
                <div className="mr-0 absolute -left-[120px]">
                  <img
                    src="/images/appointment.png"
                    alt="Icon"
                    className="w-14"
                  />
                </div>
                <div className="block">
                  <p className="text-white font-semibold font-Public_Sans text-xl">
                    <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mb-4 mr-4 text-black font-Public_Sans font-semibold">
                      3
                    </span>
                    {t("booking")}
                  </p>
                  <p className="text-white px-0 py-2 md:text-base text-15p leading-7 mt-2">
                    {t("bookingsub")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AbdomaxWorks;
