import DateBanner from "@/components/banner/DateBanner";
import Journey from "@/components/journey/Journey";
import { ImageExport } from "@/shared/images";
import React from "react";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("Index");

  return (
    <div className="w-full bg-black mobile:pt-20 pt-16">
      <DateBanner
        backgroundImage="/images/contactUsBanner.png"
        heading={t("Contact")}
        colorHeading={t("Us")}
      />
      <Journey />
      <div className="w-full md:px-10 px-5 pb-10 rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.181431988831!2d6.629548015778755!3d46.52517507913954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6f3ccafcd7d9%3A0xb72c57bc5037b1bb!2sPlace%20Chauderon%2018%2C%202nd%20floor%2C%201003%20Lausanne!5e0!3m2!1sen!2sch!4v1633334447607!5m2!1sen!2sch"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Map of Place Chauderon 18, Lausanne"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
