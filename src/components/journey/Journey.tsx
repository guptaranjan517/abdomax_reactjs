/* eslint-disable @next/next/no-img-element */
// components/journey/Journey.tsx

"use client";
import { ImageExport } from "@/shared/images";
import React, { Fragment } from "react";
import { contactData } from "@/shared/config";
import InputField from "../InputField";
import Button from "../Button";

const Journey = () => {
  return (
    <Fragment>
      <div className="bg-bgJourney bg-left-top w-full bg-28% bg-no-repeat h-fit lg:py-20 py-16 md:px-20 px-5">
        <div className="w-full flex flex-col md:items-center items-start lg:px-5 px-4">
          <div className="flex gap-1 text-center">
            <img
              src={ImageExport.STARTLINE}
              alt="line"
              className="2xl:h-12 sm:h-8 mobile:h-6 h-5 mt-1"
            />
            <h2 className="font-bold font-DIN text-white 2xl:text-6xl lg:text-4xl md:text-3xl mobile:text-3xl text-xl uppercase text-start">
              Let's launch your <br />
              <span className="text-lightGreen">journey</span>
            </h2>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col desktop:gap-10 gap-5 justify-between items-center lg:px-0 px-4">
          <div className="block md:w-1/2 w-full">
            <p className="mt-2 mb-8 block text-white text-base font-Public_Sans py-2 lg:text-left text-start">
              We’d love to hear from you! Let’s get <br />
              in touch
            </p>

            <ul className="grid grid-rows-3 gap-3">
              {contactData.map((data) => {
                return (
                  <li className="flex items-center" key={data.id}>
                    <div className="flex items-center mb-4 sm:gap-5 gap-2">
                      <img src={data.icon} alt="icon" />
                      <span className="text-white self-center font-Public_Sans lg:text-lg text-base font-normal dark:text-white">
                        {data.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="block md:w-1/2 w-full">
            <img
              src={ImageExport.JOURNEYIMG}
              alt="line"
              className="sm:h-52 mobile:h-6 h-5 -mt-5 md:block hidden"
            />

            <form className="my-8">
              <InputField
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                label="Full Name"
                htmlFor="floating_first_name"
              />
              <InputField
                type="text"
                name="floating_email"
                id="floating_email"
                label="Email ID"
                htmlFor="floating_email"
              />
              <InputField
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                label="Mobile Number"
                htmlFor="floating_phone"
              />
              <InputField
                type="text"
                name="floating_message"
                id="floating_message"
                label="Message"
                htmlFor="floating_message"
              />

              <Button textButton="Send Message" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Journey;
