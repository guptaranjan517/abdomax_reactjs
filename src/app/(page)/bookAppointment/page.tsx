// bookAppointment/page.tsx

"use client";

import PersonalDetails from "@/components/appointmentBook/PersonalDetails";
import SelectDate from "@/components/appointmentBook/SelectDate";
import SelectTime from "@/components/appointmentBook/SelectTime";
import StepProgressbar from "@/components/appointmentBook/StepProgressbar";
import DateBanner from "@/components/banner/DateBanner";
import AppointmentConfirmed from "@/components/modal/AppointmentConfirmed";
import React, { useState } from "react";

const selectTime = () => {
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setOpenModal(true);
    }
  };
  return (
    <div className="w-full bg-black pt-20">
      <DateBanner
        backgroundImage="/images/datebanner.png"
        heading="Schedule Your"
        colorHeading="Appointment Online"
        subheading="You can book an appointment here only from Monday to Thursday."
      />

      <div className="bg-black w-full block px-auto py-16">
        <StepProgressbar step={step} />

        <div className="w-full flex justify-center px-5">
          {step === 1 && <SelectDate onClick={handleNext} />}
          {step === 2 && <SelectTime onClick={handleNext} />}
          {step === 3 && <PersonalDetails />}
        </div>
      </div>
      {<AppointmentConfirmed isOpen={openModal} setIsOpen={setOpenModal} />}
    </div>
  );
};

export default selectTime;
