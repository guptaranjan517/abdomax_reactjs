"use client";

import React, { Fragment, useState } from "react";
import Button from "../Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImageExport } from "@/shared/images";
import { format, addDays } from "date-fns";
import { cn } from "@/app/utils/merger";

interface SelectDateProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SelectDate: React.FC<SelectDateProps> = ({ onClick }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate ? format(selectedDate, "d MMM") : "";
  const dayName = selectedDate ? format(selectedDate, "EEEE") : "";

  const availableDates = [addDays(new Date(), 1), addDays(new Date(), 3)];
  const unavailableDates = [addDays(new Date(), 2), addDays(new Date(), 4)];

  const getDayClassName = (date: Date) => {
    if (
      availableDates.some(
        (d) => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      )
    ) {
      return "available";
    }
    if (
      unavailableDates.some(
        (d) => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      )
    ) {
      return "unavailable pointer-events-none";
    }
    return "";
  };

  return (
    <Fragment>
      <div className="bg-selecttimebg h-auto max-w-screen-md w-full rounded-3xl shadow-inner lg:p-12 mobile:px-6 px-3 py-12">
        <p className="text-white font-Public_Sans text-2xl font-medium">
          Select Date
        </p>
        <div className="w-full selectDate">
          <DatePicker
            inline
            minDate={new Date()}
            selected={selectedDate}
            onChange={handleDateChange}
            dayClassName={(date) => getDayClassName(date)}
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
                    {format(date, "MMMM yyyy")}
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
            textButton="Next"
            restStyle={cn(
              "!w-48 !justify-between",
              selectedDate === null ? "pointer-events-none" : ""
            )}
            onClick={onClick}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectDate;
