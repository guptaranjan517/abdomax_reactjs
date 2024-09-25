"use client";

import { privacyPolicyData } from "@/shared/config";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import React from "react";

const PrivacyPolicy = () => {
   const {language, setLanguage} = useGlobalStore()
  const t = useTranslations("Index");
  type Language = "en" | "fr";
  return (
    <div className="w-full flex justify-center pt-20 pb-10 px-5">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl text-txtBlack font-semibold font-DIN text-center mb-5 underline underline-offset-4">
          {t("Privacy Policy")}
        </h1>
        {privacyPolicyData.map((data) => {
          return (
            <div className="mb-5" key={data.id}>
              <div className="flex gap-2 items-start mb-2">
                <span className="text-xl text-txtBlack font-semibold font-Public_Sans">
                  {data.id}.
                </span>
                <h2 className="text-lg text-txtBlack font-semibold font-Public_Sans">
                  {data.title[language as Language]}
                </h2>
              </div>
              <p className="text-sm text-txtBlack font-medium font-Public_Sans">
                {data.desc[language as Language]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
