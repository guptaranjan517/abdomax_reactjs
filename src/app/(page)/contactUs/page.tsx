import DateBanner from "@/components/banner/DateBanner";
import Journey from "@/components/journey/Journey";
import { ImageExport } from "@/shared/images";
import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full bg-black pt-20">
      <DateBanner
        backgroundImage="/images/contactUsBanner.png"
        heading="Contact"
        colorHeading="Us"
      />
      <Journey />
      <div className="w-full md:px-10 px-5 pb-10">
        <img src={ImageExport.MAPIMG} alt="map" className="w-full" />
      </div>
    </div>
  );
};

export default ContactUs;
