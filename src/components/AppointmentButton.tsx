/* eslint-disable @next/next/no-img-element */
// component/AppointmentButton.tsx
import { ImageExport } from "@/shared/images";
import Link from "next/link";
import React from "react";

interface AppointmentButtonProps {
  href: string;
  textButton?: string;
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ href,textButton }) => {
  return (
    <div>
      <Link
        href={href}
        className="rounded-xl bg-lightGreen h-14 w-fit pl-4 pr-2p flex gap-6 items-center hover:bg-lightBlue transition-colors duration-300 ease-in-out group"
      >
        <span className="text-black font-bold font-Public_Sans sm:text-base text-sm uppercase group-hover:text-white transition-colors duration-300 ease-in-out">
          {textButton ? textButton : "Make an Appointment" }
        </span>
        <span className="w-52p h-52p bg-bgArrow group-hover:bg-DarkBlue rounded-xl flex items-center justify-center transition-colors duration-300 ease-in-out">
          <img src={ImageExport.TOPRIGHTARROW} alt="arrow" />
        </span>
      </Link>
    </div>
  );
};

export default AppointmentButton;
