import SubscriptionCard from "@/components/SubscriptionCard";
import CommonBanner from "@/components/commonBanner/CommonBanner";
import Faq from "@/components/faq/Faq";
import FaqSection from "@/components/faq/FaqSection";
import Journey from "@/components/journey/Journey";
import Review from "@/components/review/Review";
import { faqData, subscriptionCardData } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import React from "react";

const ListOfPrice = () => {
  return (
    <div className="w-full bg-black pt-20">
      <CommonBanner
        title="List of"
        colorTitle="Price"
        desc="Sculpt your core in 30 minutes! Our revolutionary method uses advanced tech for effortless, painless toning. No sweat, no strain, just results."
        mainStyle="bg-listOfPriceBanner md:!bg-center !bg-left"
      />
      <div className="w-full flex justify-center pb-10">
        <div className="max-w-[1400px] flex flex-wrap justify-center desktop:gap-10 gap-5 py-20 mobile:px-10 px-5">
          <SubscriptionCard
            cardData={subscriptionCardData}
            mainStyle="desktop:max-w-[360px] md:max-w-[300px] sm:max-w-[250px] w-full"
          />
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
