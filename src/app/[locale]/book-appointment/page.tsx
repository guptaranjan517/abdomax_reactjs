// bookAppointment/page.tsx

"use client";

import PersonalDetails from "@/components/appointmentBook/PersonalDetails";
import SelectDate from "@/components/appointmentBook/SelectDate";
import SelectTime from "@/components/appointmentBook/SelectTime";
import StepProgressbar from "@/components/appointmentBook/StepProgressbar";
import DateBanner from "@/components/banner/DateBanner";
import useAppointmentStore from "@/stores/useAppointmentStore";
import { useTranslations } from "next-intl";
import React from "react";

const BookAppointment = () => {
  const { currentStep } = useAppointmentStore();
  const t = useTranslations("Index");
  return (
    <div className="w-full bg-black mobile:pt-20 pt-16">
      <DateBanner
        backgroundImage="/images/datebanner.png"
        heading={t("scheduleyour")}
        colorHeading={t("appointmentonline")}
        subheading={t("youcanbook")}
      />

      <div className="bg-black w-full block px-auto py-16">
        <StepProgressbar step={currentStep} />

        <div className="w-full flex justify-center px-5">
          {currentStep === 1 && <SelectDate />}
          {currentStep === 2 && <SelectTime />}
          {currentStep === 3 && <PersonalDetails />}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
