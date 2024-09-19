import { aboutUsData } from "@/shared/config";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center pt-20 pb-10 px-5">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl text-txtBlack font-semibold font-DIN text-center mb-5 underline underline-offset-4">
          About Us
        </h1>
        {aboutUsData.map((data) => {
          return (
            <div className="mb-5" key={data.id}>
              <div className="flex gap-2 items-start mb-2">
                <span className="bg-txtBlack !h-2 w-2 mt-3 rounded-full border border-txtBlack"></span>
                <h2 className="text-2xl text-black font-medium font-Public_Sans">
                  {data.title}
                </h2>
              </div>
              <p className="text-base text-txtBlack font-medium font-Public_Sans mx-4">
                {data.desc}
              </p>
            </div>
          );
        })}
        <div className="flex gap-2 items-start mb-2">
          <span className="bg-txtBlack !h-2 w-2 mt-3 rounded-full border border-txtBlack"></span>
          <h2 className="text-2xl text-black font-medium font-Public_Sans">
            Our values
          </h2>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-base text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">Innovation: </span>
            Using cutting-edge technologies to deliver optimal results.
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-base text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">Excellence: </span>
            Providing high-quality treatments with impeccable customer service.
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-base text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">Well-being: </span>
            Putting the health and comfort of our clients at the heart of our
            approach.
          </p>
        </div>
        <div className="flex gap-2 items-start mb-2 px-4">
          <p className="text-base text-txtBlack font-medium font-Public_Sans">
            <span className="text-base font-semibold">Commitment: </span>
            Supporting each client on their journey to becoming a better version
            of themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
