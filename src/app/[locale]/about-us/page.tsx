"use client";

import { aboutUsData } from "@/shared/config";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import React from "react";

const AboutUs = () => {
   const {language, setLanguage} = useGlobalStore()
  const t = useTranslations("About");

  type Language = "en" | "fr";
  return (
    <div className="w-full flex justify-center pt-20 pb-10 px-5">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl text-txtBlack font-semibold font-DIN text-center mb-5 underline underline-offset-4">
          {t("About Us")}
        </h1>
        {aboutUsData.map((data) => {
          return (
            <div className="mb-5" key={data.id}>
              <div className="flex gap-2 items-start mb-2">
                <span className="bg-txtBlack !h-2 w-2 mt-10p rounded-full border border-txtBlack"></span>
                <h2 className="text-lg text-txtBlack font-semibold font-Public_Sans">
                  {data.title[language as Language]}
                </h2>
              </div>
              <p className="text-sm text-txtBlack font-medium font-Public_Sans mx-4">
                {data.desc[language as Language]}
              </p>
            </div>
          );
        })}
        <div className="flex gap-2 items-start mb-2">
          <span className="bg-txtBlack !h-2 w-2 mt-10p rounded-full border border-txtBlack"></span>
          <h2 className="text-lg text-txtBlack font-semibold font-Public_Sans">
            {t("Our values")}
          </h2>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-sm text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">{t("Innovation")}: </span>
            {t("Using cutting-edge")}
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-sm text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">{t("Excellence")}: </span>
            {t("Providing high-quality")}
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-sm text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">{t("Well-being")}: </span>
            {t("Putting the health")}
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-sm text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">{t("Commitment")}: </span>
            {t(" Supporting each client")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
