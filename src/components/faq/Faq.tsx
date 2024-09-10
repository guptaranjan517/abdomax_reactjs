import { faqData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React from "react";
import FaqSection from "./FaqSection";

const Faq = () => {
  return (
    <div className="md:py-20 mobile:py-10 flex justify-end px-10 mobile:px-5 2xl:px-20">
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
        <div className="pl-10">
          {faqData?.map((data) => {
            return (
              <div className="" key={data.id}>
                <FaqSection question={data.question} answer={data.answer} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
