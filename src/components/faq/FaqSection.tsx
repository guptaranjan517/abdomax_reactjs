/* eslint-disable @next/next/no-img-element */
// components/faq/FaqSection.tsx

"use client";

import { ImageExport } from "@/shared/images";
import React, { Fragment, useState } from "react";

interface FaqProps {
  question?: string;
  answer?: string;
}

const FaqSection: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpenAns, setIsOpenAns] = useState(false);
  return (
    <Fragment>
      <div className="w-full h-auto pt-10 pr-8">
        <div
          className="flex items-start justify-between gap-3 cursor-pointer"
          onClick={() => setIsOpenAns(!isOpenAns)}
        >
          <h2 className="w-[calc(100%-20px)] 2xl:text-xl sm:text-lg text-lg font-semibold font-Public_Sans text-white">
            {question}
          </h2>
          <div className="w-5 h-3 mt-1">
            <img
              src={isOpenAns ? ImageExport.ARROWTOP : ImageExport.ARROWBOTTOM}
              alt="arrow"
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          className={`text-sm 2xl:text-base font-light font-Public_Sans text-white pt-4 w-4/5 ${
            isOpenAns ? "block" : "hidden"
          }`}
        >
          {answer}
        </div>
        <div className="w-full pt-10">
          <img src={ImageExport.FAQBORDER} className="w-full" alt="border" />
        </div>
      </div>
    </Fragment>
  );
};

export default FaqSection;
