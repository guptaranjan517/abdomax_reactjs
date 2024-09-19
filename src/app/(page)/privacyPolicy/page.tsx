import { privacyPolicyData } from "@/shared/config";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex justify-center pt-20 pb-10 px-5">
      <div className="max-w-screen-lg w-full">
        <h1 className="text-4xl text-txtBlack font-semibold font-DIN text-center mb-5 underline underline-offset-4">
          Privacy Policy
        </h1>
        {privacyPolicyData.map((data) => {
          return (
            <div className="mb-5" key={data.id}>
              <div className="flex gap-2 items-start mb-2">
                <span className="text-xl text-txtBlack font-semibold font-Public_Sans">
                  {data.id}.
                </span>
                <h2 className="text-2xl text-black font-medium font-Public_Sans">
                  {data.title}
                </h2>
              </div>
              <p className="text-base text-txtBlack font-normal font-Public_Sans">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
