// component/faq/Faq.tsx
"use client";

import { faqData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React, { Fragment, useState } from "react";
import FaqSection from "./FaqSection";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";

const Faq = () => {
  const { language, setLanguage } = useGlobalStore();
  const t = useTranslations("Index");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  type Language = "en" | "fr";
  
  return (
    <Fragment>
      <div className="flex gap-1 justify-center pt-10 md:px-0 px-5">
        <img
          src={ImageExport.STARTLINE}
          alt="line"
          className="2xl:h-14 mobile:h-11 h-5 sm:block hidden"
        />
        <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
          {t("faq")}
          <span className="text-lightGreen"> {t("faqgreen")}</span>
        </h2>
      </div>

      <div className="pb-10 flex justify-end px-5 2xl:px-20">
        <div className="sm:max-w-screen-lg xl:max-w-screen-xl w-full">
          <div className="sm:pl-36 xl:pl-64 3xl:pl-32 pl-0">
            {faqData?.map((data, index) => {
              return (
                <div className="" key={data.id}>
                  <FaqSection
                    question={data.question[language as Language]}
                    answer={data.answer[language as Language]}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
