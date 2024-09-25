"use client";

import { cn } from "@/app/utils/merger";
import { subscriptionCardData } from "@/shared/config";
import useGlobalStore from "@/stores/useGlobalStore";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { Fragment } from "react";

interface SubscriptionCardProps {
  mainStyle?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ mainStyle }) => {
  const { language, setLanguage } = useGlobalStore();
  const t = useTranslations("Index");

  type Language = "en" | "fr";

  const styleText = (text: string) => {
    const regex = /(10% off|Abdomax)/gi;

    return text.split(regex).map((part, index) => {
      if (
        part.toLowerCase() === "10% off" ||
        part.toLowerCase() === "abdomax"
      ) {
        return (
          <span key={index} className="text-lightGreen">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const bookAppointment = {
    en: "/en/book-appointment",
    fr: "/fr/book-appointment",
  };

  return (
    <Fragment>
      {subscriptionCardData.map((data) => (
        <div
          key={data.id}
          className={cn(
            "p-3 bg-bgSubscriptionCard bg-opacity-30 w-full bg-cover bg-right-top bg-no-repeat",
            mainStyle
          )}
          style={{
            backgroundImage: data.bgImage ? `url(${data.bgImage})` : undefined,
            borderRadius: "16px"
          }}
        >
          <div className="p-4">
            <h2 className="md:text-3xl text-2xl font-extrabold text-white font-Public_Sans uppercase">
              {data.amount[language as Language]}
              <sup>
                <span className="text-sm font-light capitalize pl-1">
                  /{t("subscription")}
                </span>
              </sup>
            </h2>
            <div className="flex justify-between items-center gap-2 borderCenter pb-5 mb-5 mt-1">
              <p className="text-sm font-medium font-Public_Sans text-lightBlue uppercase">
                {data.noOfSessions[language as Language]}
              </p>
              {data.mainPrice && (
                <p className="text-15p font-medium font-Public_Sans text-white text-opacity-75 line-through uppercase">
                  {data.mainPrice[language as Language]}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-5">
              {data.listData.map((item) => (
                <p
                  className="text-sm font-Public_Sans font-medium text-white"
                  key={item.id}
                >
                  + {styleText(item.listText[language as Language])}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full pt-5">
            <Link
              href={bookAppointment[language as Language]}
              className="flex items-center justify-center text-lightGreen text-sm font-medium font-Public_Sans border border-lightGreen w-full h-52p rounded-xl hover:bg-lightBlue hover:text-white hover:border-white transition-colors duration-300 ease-in-out"
            >
              {t("makeanappointment")}
            </Link>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default SubscriptionCard;
