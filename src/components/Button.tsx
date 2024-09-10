/* eslint-disable @next/next/no-img-element */
// component/ButtonProps.tsx

"use client";
import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";
import React, { ButtonHTMLAttributes, Fragment } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton?: string;
  restStyle?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Fragment>
      <button
        {...props}
        className={cn("rounded-xl bg-lightGreen h-14 w-fit pl-4 pr-2p flex gap-6 items-center hover:bg-lightBlue transition-colors duration-300 ease-in-out group", props.restStyle)}
      >
        <span className="text-black font-bold font-Public_Sans sm:text-base text-sm uppercase group-hover:text-white transition-colors duration-300 ease-in-out">
          {props.textButton}
        </span>
        <span className="w-52p h-52p bg-bgArrow group-hover:bg-DarkBlue rounded-xl flex items-center justify-center transition-colors duration-300 ease-in-out">
          <img src={ImageExport.TOPRIGHTARROW} alt="arrow" />
        </span>
      </button>
    </Fragment>
  );
};

export default Button;
