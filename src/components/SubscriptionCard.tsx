// components/SubscriptionCard.tsx

"use client";

import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";
import Link from "next/link";
import React, { Fragment } from "react";

interface ListItem {
  id: number;
  listText: string;
}

interface CardData {
  id: number;
  amount: string;
  noOfSessions: string;
  mainPrice?: string;
  bgImage?: string;
  listData: ListItem[];
}

interface SubscriptionCardProps {
  cardData: CardData[];
  mainStyle?: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  cardData,
  mainStyle,
}) => {
  const styleText = (text: string) => {
    // Regular expression to match "10% off" and "Abdomax"
    const regex = /(10% off|Abdomax)/gi;
    
    return text.split(regex).map((part, index) => {
      if (part.toLowerCase() === "10% off") {
        return (
          <span key={index} className="text-lightGreen">
            {part}
          </span>
        );
      } else if (part.toLowerCase() === "abdomax") {
        return (
          <span key={index} className="text-lightGreen">
            {part}
          </span>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <Fragment>
      {cardData.map((data) => (
        <div
          key={data.id}
          className={cn(
            "p-3 bg-bgSubscriptionCard rounded-3xl bg-opacity-30 w-full bg-cover bg-right-top bg-no-repeat",
            mainStyle
          )}
          style={{
            backgroundImage: data.bgImage ? `url(${data.bgImage})` : undefined,
          }}
        >
          <div className="p-4">
            <h2 className="md:text-3xl text-2xl font-extrabold text-white font-Public_Sans uppercase">
              {data.amount}
              <sup>
                <span className="text-sm font-light capitalize pl-1">
                  /Subscription
                </span>
              </sup>
            </h2>
            <div className="flex justify-between items-center gap-2 borderCenter pb-5 mb-5 mt-1">
              <p className="text-sm font-medium font-Public_Sans text-lightBlue uppercase">
                {data.noOfSessions}
              </p>
              {data.mainPrice && (
                <p className="text-15p font-medium font-Public_Sans text-white text-opacity-75 line-through uppercase">
                  {data.mainPrice}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-5">
              {data.listData.map((item) => (
                <p
                  className="text-sm font-Public_Sans font-medium text-white"
                  key={item.id}
                >
                  + {styleText(item.listText)}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full pt-5">
            <Link
              href="/bookAppointment"
              className="flex items-center justify-center text-lightGreen text-sm font-medium font-Public_Sans border border-lightGreen w-full h-52p rounded-xl hover:bg-lightBlue hover:text-white hover:border-white transition-colors duration-300 ease-in-out"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default SubscriptionCard;
