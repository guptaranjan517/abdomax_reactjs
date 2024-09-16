/* eslint-disable @next/next/no-img-element */
// component/layout/Header
import { footerLinksData, socialIcons } from "@/shared/config";
import { ImageExport } from "@/shared/images";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-bgFooter">
      <div className="w-full xl:px-32 md:px-24 mobile:px-14 px-7 mobile:py-12 py-8 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full">
          <div className="mobile:w-40 w-32 mobile:h-20 h-14">
            <img
              src={ImageExport.LOGO}
              className="w-full h-full"
              alt="United AI"
            />
          </div>
          <p className="xl:w-3/4 md:w-3/4 font-normal text-base leading-7 font-Public_Sans text-white pt-5">
            AbdoMax is based on high intensity focused electromagnetic energy.
            It is the latest technology in non-invasive body slimming and
            contouring, which can both build muscle and burn fat.
          </p>
        </div>
        <div className="w-full grid mobile:grid-cols-3 grid-cols-2 gap-10">
          {footerLinksData.map((data) => {
            return (
              <div className="w-full" key={data.id}>
                <h1 className="text-white sm:text-lg pb-6 text-base font-semibold font-Public_Sans">
                  {data.title}
                </h1>
                <div className="flex flex-col gap-6">
                  {data.subTitle.map((item) => {
                    return (
                      <Link
                        href={item.link}
                        className="text-white hover:text-lightGreen sm:text-15 text-xs xl:text-sm font-normal font-Public_Sans transition-all duration-200 ease-in-out"
                        key={item.id}
                      >
                        {item.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center sm:justify-start justify-center gap-5 xl:px-32 md:px-24 px-14 mobile:pb-12 pb-8 pt-5">
        {socialIcons.map((data) => {
          return (
            <Link
              href={data.link}
              className="w-11 h-11 rounded-full bg-bgSocialIcon bg-white border-opacity-10 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out"
              key={data.id}
            >
              <img src={data.icon} alt={data.alt} />
            </Link>
          );
        })}
      </div>
      <div className="full h-16 flex items-center justify-center border-t border-white border-opacity-10">
        <p className="text-xs font-normal font-Public_Sans text-white text-opacity-70">
          © 2023 ABDOEMAX, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
