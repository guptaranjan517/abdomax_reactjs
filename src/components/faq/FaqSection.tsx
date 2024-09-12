/* eslint-disable @next/next/no-img-element */
// components/faq/FaqSection.tsx

"use client";

import { ImageExport } from "@/shared/images";
import React, { Fragment, useState } from "react";

interface FaqProps {
  question?: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqSection: React.FC<FaqProps> = ({ question, answer, isOpen, onToggle }) => {
  // const [isOpenAns, setIsOpenAns] = useState(false);
  return (
    <Fragment>
      <div className="w-full h-auto sm:pt-10 pt-5 sm:pr-8 pr-1 borderCenter pb-5 sm:pb-10">
        <div
          className="flex items-start justify-between mobile:gap-3 gap-5 cursor-pointer"
          onClick={onToggle}
        >
          <h2 className="w-[calc(100%-20px)] 2xl:text-xl sm:text-lg text-base font-semibold font-Public_Sans text-white">
            {question}
          </h2>
          <div className="w-5 h-3 mt-1">
          <img
              src={isOpen ? ImageExport.ARROWTOP : ImageExport.ARROWBOTTOM}
              alt="arrow"
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          className={`text-sm 2xl:text-base font-light font-Public_Sans text-white pt-4 w-4/5 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {answer}
        </div>
      </div>
    </Fragment>
  );
};

export default FaqSection;
