"use client";
import React, { Fragment, useEffect, useState } from "react";
import { appointmentData } from "@/shared/config";
import Button from "../Button";
import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";
import useGlobalStore from "@/stores/useGlobalStore";
import useAppointmentStore from "@/stores/useAppointmentStore";
import { getTimeSlots } from "@/shared/lib/common";
import { isErrorResponse } from "@/shared/lib/axiosInstance";
import { toast } from "react-toastify";
import { formatDate } from "@/app/utils/formatter";

const SelectTime = () => {
  const step = 2;
  const { language } = useGlobalStore();
  const { setStepData, nextStep, stepsData } = useAppointmentStore();
  const t = useTranslations("Index");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showTime, setshowTime] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [slotsData, setSlotsData] = useState(appointmentData); // Use state to manage available slots

  useEffect(() => {
    if (stepsData && stepsData[1] && stepsData[1]?.date) {
      getAvailableSlots(stepsData[1]?.date);
    } else {
      setSelectedTime(null);
    }
  }, [stepsData]);

  const getAvailableSlots = async (date: any) => {
    const formattedDate = formatDate(date);
    setLoading(true);
    try {
      const { availableSlots } = await getTimeSlots(formattedDate);
      if (availableSlots && availableSlots.result) {
        // Process the slots to disable unavailable times
        updateAvailableSlots(availableSlots.result);
      }
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (isErrorResponse(error)) {
        toast.error(error.message);
      }
    }
  };

  const updateAvailableSlots = (bookedSlots: Array<{ time: string }>) => {
    const updatedData = appointmentData.map((data) => ({
      ...data,
      timeData: data.timeData.map((slot) => ({
        ...slot,
        available: !bookedSlots.some(
          (bookedSlot) => bookedSlot.time === slot.time.en // Check the 'en' time string
        ),
      })),
    }));
    setSlotsData(updatedData); // Update the state with processed data
  };

  useEffect(() => {
    if (stepsData && stepsData[step] && stepsData[step].time) {
      const [time, period] = stepsData?.[2]?.time?.split(" ") || [];
      const translatedPeriod =
        period === "AM" || period === "SUIS" ? t("AM") : t("PM");
      const timeSeleted = time + " " + translatedPeriod;
      setshowTime(timeSeleted);
      setSelectedTime(timeSeleted);
    } else {
      setSelectedTime(null);
    }
  }, [stepsData, step]);

  const handleTimeClick = (selected: string, show: string) => {
    setshowTime(show);
    setSelectedTime(selected);
  };

  const onSubmit = () => {
    setStepData(step, {
      time: selectedTime,
    });
    nextStep(); // Move to the next step
  };

  return (
    <Fragment>
      <div className="bg-selecttimebg h-auto max-w-screen-md rounded-3xl shadow-inner lg:p-12 mobile:px-6 px-3 py-12">
        <p className="text-white font-Public_Sans text-2xl font-medium">
          {t("selecttime")}
        </p>
        {slotsData.map((data: any) => (
          <div key={data.id}>
            <p className="bg-selecttimebggradient text-center text-xl font-Public_Sans font-medium py-4 mt-8 border-y border-morningafterborder text-morningaftertxt">
              {data.title[language]}
            </p>
            <div className="flex flex-wrap gap-3 justify-start py-8">
              {data.timeData.map((timeSlot: any) => (
                <button
                  type="button"
                  key={timeSlot.id}
                  className={cn(
                    "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white hover:bg-lightBlue rounded-lg group transition-colors ease-in duration-300",
                    timeSlot.available ? "" : "pointer-events-none" // Disable if not available
                  )}
                  onClick={() => {
                    if (timeSlot.available) {
                      handleTimeClick(
                        timeSlot.time["en"],
                        timeSlot.time[language]
                      );
                    }
                  }}
                >
                  <span
                    className="relative sm:text-base text-sm font-medium font-Public_Sans sm:px-5 px-2 py-3 rounded-lg"
                    style={{
                      backgroundColor:
                        showTime === timeSlot.time[language]
                          ? "#95DB32" // Active state color
                          : timeSlot.available
                          ? "#000000" // Available color
                          : "#525252", // Unavailable color
                    }}
                  >
                    {timeSlot.time[language]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-4 flex justify-end">
          <Button
            textButton={t("next")}
            restStyle={cn(
              "!w-48 !justify-between",
              selectedTime === null ? "pointer-events-none" : ""
            )}
            onClick={onSubmit}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectTime;
