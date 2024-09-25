/* eslint-disable @next/next/no-img-element */
// component/AppointmentButton.tsx
import { ImageExport } from "@/shared/images";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const AppointmentButton = () => {
   const {language, setLanguage} = useGlobalStore()
  const bookAppointment = {
    en: "/en/book-appointment",
    fr: "/fr/book-appointment",
  };

  const t = useTranslations("Index");
  type Language = "en" | "fr";

  return (
    <div>
      <Link
        href={bookAppointment[language as Language]}
        className="rounded-xl bg-lightGreen h-14 w-fit pl-4 pr-2p flex gap-6 items-center hover:bg-lightBlue transition-colors duration-300 ease-in-out group"
      >
        <span className="text-black font-bold font-Public_Sans sm:text-base text-sm uppercase group-hover:text-white transition-colors duration-300 ease-in-out">
          {t("makeanappointment")}
        </span>
        <span className="w-52p h-52p bg-bgArrow group-hover:bg-DarkBlue rounded-xl flex items-center justify-center transition-colors duration-300 ease-in-out">
          <img src={ImageExport.TOPRIGHTARROW} alt="arrow" />
        </span>
      </Link>
    </div>
  );
};

export default AppointmentButton;
