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
    <div className="md:py-20 mobile:py-10 flex justify-end px-5 2xl:px-20">
      <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl w-full">
        <div className="flex gap-1">
          <img
            src={ImageExport.STARTLINE}
            alt="line"
            className="2xl:h-12 sm:h-8 mobile:h-6 h-5 mt-1"
          />
          <h2 className="font-bold font-DIN text-white 2xl:text-6xl lg:text-4xl md:text-3xl mobile:text-3xl text-xl uppercase">
            Frequently Asked
            <span className="text-lightGreen"> Question</span>
          </h2>
        </div>
        <div className="mobile:pl-10 pl-7">
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
