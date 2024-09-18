import React from "react";
import AppointmentButton from "../AppointmentButton";
import { ImageExport } from "@/shared/images";

const Abs = () => {
  return (
    <div className="w-full md:h-700 sm:h-500 h-full sm:bg-bgAbs bg-none bg-no-repeat bg-cover md:pt-24 sm:pt-14 pt-0 md:pl-16 sm:pl-5 pl-0 relative">

    {/* <div className="absolute w-full h-00 bottom-0 bg-bgBlush bg-right-bottom bg-repeat-x flex flex-col items-start justify-center z-10 ">
    </div> */}

      <div className="relative sm:hidden block">
        <img src={ImageExport.ABSBG} alt="abs" className="" />
        <div className="absolute bottom-3 left-5">
          <h2 className="font-bold 2xl:text-3xl md:text-2xl text-3xl text-white font-DIN uppercase">
            Abdomen
          </h2>
          <p className="text-white font-Public_Sans font-normal md:text-base text-sm pt-3">
            High RF · Fat Reduction | HIFEM+ · Muscle Growth
          </p>
        </div>
      </div>
      <div className="sm:w-400 w-full flex flex-col gap-3 px-5 sm:px-0">
        <h2 className="font-bold 2xl:text-3xl md:text-2xl text-3xl text-white font-DIN uppercase hidden sm:block">
          Abdomen
        </h2>
        <p className="text-white font-Public_Sans font-normal md:text-base text-sm pb-1 hidden sm:block">
          High RF · Fat Reduction | HIFEM+ · Muscle Growth
        </p>
        <p className="text-white font-Public_Sans font-normal md:text-base text-15p leading-7">
          More than most other areas of the body, the stomach is particularly
          prone to developing excess fat. After undergoing just one treatment
          with Emsculpt, patients can experience a sizable increase in tone. The
          lean, muscular abs that are hiding beneath layers of fat are finally
          revealed.
        </p>
      </div>
      <div className="desktop:pt-9 pt-7 px-5 sm:px-0">
        <AppointmentButton href="/bookAppointment" />
      </div>
    </div>
  );
};

export default Abs;
