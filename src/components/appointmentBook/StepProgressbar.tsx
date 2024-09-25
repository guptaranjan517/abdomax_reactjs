// components/appointmentBook/StepProgressbar.tsx

"use client";

import { cn } from "@/app/utils/merger";
import { useTranslations } from "next-intl";
import React from "react";

interface StepProgressbarProps {
  step: number;
}

const StepProgressbar: React.FC<StepProgressbarProps> = ({ step }) => {
  const t = useTranslations("Index");
  return (
    <div className="w-full">
      <ol className="py-4 flex items-center sm:px-16 px-4 lg:w-6/12 w-11/12 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mx-auto">
        <li
          className={`
            flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:border-dashed after:top-1 after:h-1 after:border-b-0 after:border-2 after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700
            ${
              step >= 2
                ? "after:border-bgNotification"
                : "after:border-txtBlack"
            }
          `}
        >
          <span className="block items-center after:content-[''] after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span
              className={cn(
                "w-9 h-9 rounded-full flex justify-center items-center mx-auto",
                step >= 1 ? "bg-bgNotification" : "bg-txtBlack"
              )}
            >
              {step >= 1 && (
                <img
                  src="/images/vector-tick.png"
                  alt="Step 1"
                  className="inline-block"
                />
              )}
            </span>
          </span>
        </li>
        <li
          className={`
            flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:border-dashed after:border-b-0 after:border-2 after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700
            ${
              step >= 3
                ? "after:border-bgNotification"
                : "after:border-txtBlack"
            }
          `}
        >
          <span className="block items-center after:content-[''] after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span
              className={cn(
                "w-9 h-9 rounded-full flex justify-center items-center mx-auto",
                step >= 2 ? "bg-bgNotification" : "bg-txtBlack"
              )}
            >
              {step >= 2 && (
                <img
                  src="/images/vector-tick.png"
                  alt="Step 2"
                  className="inline-block"
                />
              )}
            </span>
          </span>
        </li>
        <li className="flex items-center">
          <span className="flex items-center after:content-[''] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span
              className={cn(
                "w-9 h-9 rounded-full flex justify-center items-center mx-auto",
                step >= 3 ? "bg-bgNotification" : "bg-txtBlack"
              )}
            >
              {step >= 3 && (
                <img
                  src="/images/vector-tick.png"
                  alt="Step 3"
                  className="inline-block"
                />
              )}
            </span>
          </span>
        </li>
      </ol>

      <ol className="mb-12 flex items-center lg:w-6/12 w-11/12 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mx-auto">
        <li className="flex w-full items-center">
          <span className="sm:w-40 w-20 sm:px-4 px-0 text-white sm:text-base text-sm font-Public_Sans font-medium">
            <span className="text-stepstext mb-1 block text-xs font-Public_Sans font-normal">
             {t('step')} 1
            </span>
            {t('selectdate')}
          </span>
        </li>
        <li className="flex w-full items-center">
          <span className="sm:w-40 w-20 sm:px-4 px-0 text-white sm:text-base text-sm font-Public_Sans font-medium">
            <span className="text-stepstext mb-1 block text-xs font-Public_Sans font-normal">
            {t('step')} 2
            </span>
            {t('selecttime')}
          </span>
        </li>
        <li className="flex items-center">
          <span className="sm:w-40 w-24 sm:px-4 px-0 text-white sm:text-base text-sm font-Public_Sans font-medium">
            <span className="text-stepstext mb-1 block text-xs font-Public_Sans font-normal">
            {t('step')} 3
            </span>
            Personal Details
          </span>
        </li>
      </ol>
    </div>
  );
};

export default StepProgressbar;
