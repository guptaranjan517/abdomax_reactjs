"use client";
import SubscriptionCard from "@/components/SubscriptionCard";
import CommonBanner from "@/components/commonBanner/CommonBanner";
import Faq from "@/components/faq/Faq";
import Journey from "@/components/journey/Journey";
import Review from "@/components/review/Review";
import React from "react";
import { useTranslations } from "next-intl";

const ListOfPrice = () => {
  const t = useTranslations("Index");
  return (
    <div className="w-full bg-black mobile:pt-20 pt-16">
      <CommonBanner
        title={t("List of")}
        colorTitle={t("Price")}
        desc={t("Sculpt your core")}
        mainStyle="sm:bg-listOfPriceBanner bg-listOfPriceBannermobile md:!bg-center !bg-left mob"
      />
      <div className="w-full flex justify-center sm:pb-10">
        <div className="max-w-[1400px] flex flex-wrap justify-center desktop:gap-10 gap-5 py-20 mobile:px-10 px-5">
          <SubscriptionCard mainStyle="desktop:max-w-[360px] md:max-w-[300px] sm:max-w-[250px] w-full" />
        </div>
      </div>
      <div className="md:pb-10">
        <Review />
      </div>
      <div className="pb-10">
        <Faq />
      </div>
      <Journey />
    </div>
  );
};

export default ListOfPrice;
