/* eslint-disable @next/next/no-img-element */
// component/ButtonProps.tsx

"use client";
import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";
import { useTranslations } from "next-intl";
import React, { ButtonHTMLAttributes, Fragment } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton?: string;
  restStyle?: string;
  loading?: boolean; // New prop for loading state
}

const Button: React.FC<ButtonProps> = ({
  textButton,
  restStyle,
  loading,
  ...props
}) => {
  const t = useTranslations("Index");
  return (
    <Fragment>
      <button
        {...props}
        className={cn(
          "rounded-xl bg-lightGreen h-14 sm:w-fit w-full pl-4 pr-2p flex gap-6 items-center hover:bg-lightBlue transition-colors duration-300 ease-in-out group",
          restStyle
        )}
        disabled={loading || props.disabled} // Disable button when loading
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></span>{" "}
            {/* Spinner */}
            <span className="text-white font-bold">{t("Waiting")}...</span>
            {/* Waiting text */}
          </div>
        ) : (
          <>
            <span className="text-black font-bold font-Public_Sans sm:text-base text-sm uppercase group-hover:text-white transition-colors duration-300 ease-in-out w-10/12 text-start">
              {textButton}
            </span>
            <span className="w-52p h-52p bg-bgArrow group-hover:bg-DarkBlue rounded-xl flex items-center justify-center transition-colors duration-300 ease-in-out">
              <img src={ImageExport.TOPRIGHTARROW} alt="arrow" />
            </span>
          </>
        )}
      </button>
    </Fragment>
  );
};

export default Button;
