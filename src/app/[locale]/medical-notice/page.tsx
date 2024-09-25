// medicalNotice/page.tsx

"use client";
import TickCard from "@/components/TickCard";
import CommonBanner from "@/components/commonBanner/CommonBanner";
import Faq from "@/components/faq/Faq";
import Journey from "@/components/journey/Journey";
import Review from "@/components/review/Review";
import { medicalContraindicationsData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import React from "react";

const MedicalNotice = () => {
   const {language, setLanguage} = useGlobalStore()
  const t = useTranslations("Index");
  type Language = "en" | "fr";
  return (
    <div className="w-full bg-black mobile:pt-20 pt-16">
      <CommonBanner
        title={t("Medical")}
        colorTitle={t("Notice")}
        desc={t("Sculpt your core")}
        mainStyle="bg-medicalNoticeBanner"
      />
      <div className="w-full md:px-10 px-5 lg:px-20 md:py-10 py-7 mt-10">
        <img
          src={ImageExport.MEDICALCONTRAINDICATION}
          alt="Course of a session"
          className="w-full"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:px-10 px-5 lg:px-20 pb-10">
        {medicalContraindicationsData.map((data) => {
          return (
            <div
              key={data.id}
              className="desktop:even:!bg-bgTickCardRight even:!bg-bgTickCardLeft odd:!bg-bgTickCardLeft desktop:odd:!bg-bgTickCardLeft rounded-xl flex items-center"
            >
              <TickCard
                text={data.text[language as Language]}
                background="!bg-transparent"
              />
            </div>
          );
        })}
      </div>
      <div className="md:pb-10">
        <Review />
      </div>
      <div className="pb-10">
        <Faq />
      </div>
      <Journey />
    </div>
  );
};

export default MedicalNotice;
