// components/appointmentBook/SelectTime.tsx

"use client";

import React, { Fragment } from "react";
import { appointmentData } from "@/shared/config";
import Button from "../Button";

interface SelectTimeProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SelectTime:React.FC<SelectTimeProps> = ({onClick}) => {
  return (
    <Fragment>
      <div className="bg-selecttimebg h-auto max-w-screen-md rounded-3xl shadow-inner lg:p-12 mobile:px-6 px-3 py-12">
        <p className="text-white font-Public_Sans text-2xl font-medium">
          Select Time
        </p>

        {appointmentData.map((data) => {
          return (
            <div key={data.id}>
              <p className="bg-selecttimebggradient text-center text-xl font-Public_Sans font-medium py-4 mt-8  border-y border-morningafterborder text-morningaftertxt">
                {data.title}
              </p>

              <div className="flex flex-wrap gap-3 justify-start py-8">
                {data.timeData.map((data) => {
                  return (
                    <button
                      type="button"
                      key={data.id}
                      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white hover:text-black rounded-lg group"
                    >
                      <span className="relative sm:text-base text-sm font-medium font-Public_Sans sm:px-5 px-2 py-3 rounded-lg transition-all ease-in duration-300 bg-morningafterborder dark:bg-gray-900 group-hover:bg-lightGreen">
                        {data.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="mt-4 flex justify-end">
          <Button textButton="Next" restStyle="!w-48 !justify-between" onClick={onClick} />
        </div>
      </div>
    </Fragment>
  );
};

export default SelectTime;
