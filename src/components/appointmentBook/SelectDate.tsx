
"use client";
import React, { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImageExport } from "@/shared/images";
import { format, addDays } from "date-fns";
import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";
import { fr, enUS } from 'date-fns/locale'; // Import French and English locales
import useAppointmentStore from "@/stores/useAppointmentStore";
import useGlobalStore from "@/stores/useGlobalStore";

const SelectDate = () => {
  const step = 1;
  const { setStepData, nextStep, stepsData } = useAppointmentStore();
  const t = useTranslations("Index");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { language } = useGlobalStore();
  const [locale, setLocale] = useState(fr); // Initialize locale to French

  // Update the locale based on the current language
  useEffect(() => {
    setLocale(language === "fr" ? fr : enUS); // Set locale based on the language
  }, [language]);

  // Initialize selectedDate based on stepsData
  useEffect(() => {
    if (stepsData && stepsData[step] && stepsData[step].date) {
      const dateFromData = new Date(stepsData[step].date);
      setSelectedDate(dateFromData);
    } else {
      setSelectedDate(null);
    }
  }, [stepsData, step]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getDayClassName = (date: Date) => {
    const today = new Date();
    const formattedCurrentDate = format(date, "yyyy-MM-dd");
    // Disable today and past dates
    if (date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
      return "unavailableClass pointer-events-none";
    }
    if (
      selectedDate &&
      formattedCurrentDate === format(selectedDate, "yyyy-MM-dd", { locale })
    ) {
      return "selectedClass";
    }
    // Disable Friday, Saturday, and Sunday
    const day = date.getDay();
    if (day === 0 || day === 5 || day === 6) {
      return "unavailableClass pointer-events-none"; // Disable and grey out unavailable dates
    }
    return "defaultClass"; // Class for non-selected dates
  };

  const formattedDate = selectedDate ? format(selectedDate, "d MMM", { locale }) : "";
  const dayName = selectedDate ? format(selectedDate, "EEEE", { locale }) : "";

  const onSubmit = () => {
    setStepData(step, {
      date: selectedDate,
    });
    nextStep();
  };

  return (
    <Fragment>
      <div className="bg-selecttimebg h-auto max-w-screen-md w-full rounded-3xl shadow-inner lg:p-12 mobile:px-6 px-3 py-12">
        <p className="text-white font-Public_Sans text-2xl font-medium">
          {t("selectdate")}
        </p>
        <div className="w-full selectDate">
          <DatePicker
            inline
            minDate={addDays(new Date(), 1)}
            selected={selectedDate}
            onChange={handleDateChange}
            dayClassName={(date) => getDayClassName(date)}
            locale={locale} // Set the locale
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="custom-calendar-header">
                <button
                  aria-label="Previous Month"
                  className="react-datepicker__navigation react-datepicker__navigation--previous flex justify-center items-center size-11 rounded-full bg-bgSliderArrow"
                  onClick={decreaseMonth}
                >
                  <img src={ImageExport.CLEFTARROW} alt="arrow" />
                </button>
                <div className="react-datepicker__current-month-container">
                  <span className="react-datepicker__current-month">
                    {format(date, "MMMM yyyy", { locale })}
                  </span>
                  {selectedDate && (
                    <div className="selected-date-display">
                      <p className="mt-1 text-lightGreen font-Public_Sans text-lg">
                        {dayName} {formattedDate}
                      </p>
                    </div>
                  )}
                </div>
                <button
                  aria-label="Next Month"
                  className="react-datepicker__navigation react-datepicker__navigation--next flex justify-center items-center size-11 rounded-full bg-bgSliderArrow"
                  onClick={increaseMonth}
                >
                  <img src={ImageExport.CRIGHTARROW} alt="arrow" />
                </button>
              </div>
            )}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            textButton={t("next")}
            restStyle={cn(
              "!w-48 !justify-between",
              selectedDate === null ? "pointer-events-none" : ""
            )}
            onClick={onSubmit}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectDate;
