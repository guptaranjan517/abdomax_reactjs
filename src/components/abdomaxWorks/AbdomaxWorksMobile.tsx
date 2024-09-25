/* eslint-disable @next/next/no-img-element */
// components/abdomaxWorks/abdomaxWorks
import React, { Fragment } from "react";
import AppointmentButton from "../AppointmentButton";
import { useTranslations } from "next-intl";

const AbdomaxWorksMobile = () => {
  const t = useTranslations("Abdomaxwork");
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center text-start pt-12 px-5">
        <div className="w-full">
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
            {t("how")} <span className="text-lightGreen"> {t("AbdoMax")} </span>{t("works")}
          </h2>
        </div>
        <p className="md:max-w-screen-md w-full md:text-lg text-15p font-normal font-Public_Sans text-white mt-4  mb-7 text-start leading-7">
          {t("worksub")}
        </p>

        <ul className="w-full grid gap-8">
          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans font-semibold">
                1
              </span>
              {t("appointment")}
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7 mt-2">
              {t("appointmentsub")}
            </p>
          </li>

          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans">
                2
              </span>
              {t("datetime")}
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7 mt-2">
            {t("datetimesub")}
            </p>
          </li>

          <li>
            <p className="flex items-center  text-white font-semibold font-Public_Sans text-xl">
              <span className="flex justify-center items-center bg-lightGreen w-8 h-8 rounded-full mr-4 text-black font-Public_Sans">
                3
              </span>
              {t("booking")}
            </p>
            <p className="text-white px-2 py-1 md:text-base text-15p leading-7 mt-2">
            {t("bookingsub")}
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full px-5 pt-10 pb-20 text-start">
        <AppointmentButton  />
      </div>
    </Fragment>
  );
};

export default AbdomaxWorksMobile;
