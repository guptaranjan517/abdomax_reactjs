"use client";

import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";

interface FaqProps {
  question?: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqSection: React.FC<FaqProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <Fragment>
      <div className="w-full h-auto py-10 border-b gradient-border-bottom">
        <div
          className="flex items-start justify-between gap-3 cursor-pointer"
          onClick={onToggle}
        >
          <h2 className="w-[calc(100%-20px)] sm:text-lg text-lg font-semibold font-Public_Sans text-white">
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
          className={`text-sm font-light font-Public_Sans text-white pt-4 w-4/5 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {answer} {/* Changed to use the answer prop directly */}
        </div>
      </div>
    </Fragment>
  );
};

export default FaqSection;
