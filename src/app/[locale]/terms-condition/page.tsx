"use client";

import { termsConditionData } from "@/shared/config";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import React from "react";

const TermsAndCondition = () => {
   const {language, setLanguage} = useGlobalStore()
  const t = useTranslations("Index");
  type Language = "en" | "fr";
  return (
    <div className="w-full flex justify-center pt-20 pb-10 px-5">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl text-txtBlack font-semibold font-DIN text-center mb-5 underline underline-offset-4">
          {t("General Terms and Conditions")}
        </h1>
        {termsConditionData.map((data) => {
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
      </div>
    </div>
  );
};

export default TermsAndCondition;
