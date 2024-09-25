// components/appointmentBook/SelectTime.tsx

"use client";

import React, { Fragment, useState } from "react";
import { appointmentData } from "@/shared/config";
import Button from "../Button";
import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";
import useAppointmentStore from "@/stores/useAppointmentStore";

const SelectTime = () => {
  const step = 2;
  const { language } = useGlobalStore();
  const { setStepData, nextStep } = useAppointmentStore();
  const t = useTranslations("Index");
  type Language = "en" | "fr";
  const [isTime, setIsTime] = useState<string | null>(null);
  const handleTimeClick = (time: string) => {
    setIsTime(time);
  };

  const onSubmit = () => {
    setStepData(step, {
      time: isTime,
    });
    nextStep();
  };
  return (
    <Fragment>
      <div className="bg-selecttimebg h-auto max-w-screen-md rounded-3xl shadow-inner lg:p-12 mobile:px-6 px-3 py-12">
        <p className="text-white font-Public_Sans text-2xl font-medium">
          {t("selecttime")}
        </p>

        {appointmentData.map((data) => {
          return (
            <div key={data.id}>
              <p className="bg-selecttimebggradient text-center text-xl font-Public_Sans font-medium py-4 mt-8  border-y border-morningafterborder text-morningaftertxt">
                {data.title[language as Language]}
              </p>

              <div className="flex flex-wrap gap-3 justify-start py-8">
                {data.timeData.map((data) => {
                  return (
                    <button
                      type="button"
                      key={data.id}
                      className={cn(
                        "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white hover:bg-lightBlue rounded-lg group transition-colors ease-in duration-300",
                        data.unAvailable ? "pointer-events-none" : ""
                      )}
                      onClick={() => handleTimeClick(data.time)}
                    >
                      <span
                        className="relative sm:text-base text-sm font-medium font-Public_Sans sm:px-5 px-2 py-3 rounded-lg"
                        style={{
                          backgroundColor: data.available
                            ? "#95db32"
                            : data.unAvailable
                            ? "#525252"
                            : isTime === data.time
                            ? "#5429e0"
                            : "#272727",
                        }}
                      >
                        {data.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="mt-4 flex justify-end">
          <Button
            textButton={t("next")}
            restStyle={cn(
              "!w-48 !justify-between",
              isTime === null ? "pointer-events-none" : ""
            )}
            onClick={onSubmit}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectTime;
