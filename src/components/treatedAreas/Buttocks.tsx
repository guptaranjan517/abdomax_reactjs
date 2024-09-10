import React from "react";
import AppointmentButton from "../AppointmentButton";

const Buttocks = () => {
  return (
    <div className="w-full md:h-600 h-500 bg-bgAbs bg-no-repeat bg-cover md:pt-24 pt-14 md:pl-16 pl-5">
      <div className="sm:w-400 w-full flex flex-col gap-3 mb-7 pr-5 sm:pr-0">
        <h2 className="font-bold 2xl:text-3xl md:text-2xl text-xl text-white font-DIN uppercase">
          Abdomen
        </h2>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm">
          High RF · Fat Reduction | HIFEM+ · Muscle Growth
        </p>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm">
          More than most other areas of the body, the stomach is particularly
          prone to developing excess fat. After undergoing just one treatment
          with Emsculpt, patients can experience a sizable increase in tone. The
          lean, muscular abs that are hiding beneath layers of fat are finally
          revealed.
        </p>
      </div>
      <AppointmentButton href="/bookAppointment" />
    </div>
  );
};

export default Buttocks;
