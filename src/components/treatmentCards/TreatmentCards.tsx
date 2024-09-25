// /* eslint-disable @next/next/no-img-element */

import { treatmentImage } from "@/shared/config";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";
const TreatmentCards = () => {
  const {language} = useGlobalStore();
  const t = useTranslations("Index");
  return (
    <div className="max-w-[850px] py-10 flex flex-col sm:gap-10 gap-7 sm:px-10 px-5">
      {treatmentImage.map((data: any) => {
        return (
          <div key={data.id}>
            <div className="flex items-center justify-between sm:mb-5 mb-3">
              <h2 className="text-white font-Public_Sans font-semibold lg:text-22p sm:text-lg text-sm">
                {data.title[language]}
              </h2>
              <Link
                href="#Journey"
                className="text-lightGreen hover:text-lightBlue md:text-lg sm:text-base text-xs font-medium font-Public_Sans underline underline-offset-4 transition-colors duration-300 ease-out"
              >
                {t("clickhere")}
              </Link>
            </div>
            <div className="w-full grid grid-cols-2 desktop:gap-16 sm:gap-10 gap-5 items-center justify-between">
              <div className="w-full">
                <div className="border border-black rounded-3xl bg-txtBlack  hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    src={data.beforeImage}
                    alt="before"
                    className="w-full"
                  />
                  <p className="flex items-center justify-center text-white sm:text-xl text-sm uppercase font-medium font-Public_Sans bg-selecttimebggradientcard text-center sm:h-16 h-8 border-b border-cardborder rounded-3xl">{t("before")}</p>
                </div>
              </div>
              <div className="w-full">
                <div className="border border-black rounded-3xl bg-txtBlack  hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    src={data.afterImage}
                    alt="after"
                    className="w-full "
                  />
                  <p className="flex items-center justify-center text-white sm:text-xl text-sm uppercase font-medium font-Public_Sans bg-selecttimebggradientcard text-center sm:h-16 h-8  border-b border-cardborder rounded-3xl">{t("aftre")}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TreatmentCards;
