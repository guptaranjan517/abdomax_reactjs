// component/faq/Faq.tsx
"use client";

import { faqData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React, { useState } from "react";
import FaqSection from "./FaqSection";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="md:py-20 mobile:py-8 flex justify-end px-5 2xl:px-20">
      <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl w-full">
        <div className="flex gap-1">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-14 mobile:h-11 h-5 sm:block hidden"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-7xl mobile:text-6xl text-5xl uppercase">
            Frequently Asked
            <span className="text-lightGreen"> Question</span>
          </h2>
        </div>
        <div className="sm:pl-10">
          {faqData?.map((data, index) => {
            return (
              <div className="" key={data.id}>
                <FaqSection
                  question={data.question}
                  answer={data.answer}
                  isOpen={openIndex == index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
