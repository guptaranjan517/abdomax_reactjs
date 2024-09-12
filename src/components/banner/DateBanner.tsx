"use client";

import { Fragment } from "react";

interface DateBannerProps {
  backgroundImage: string;
  heading: string;
  colorHeading: string;
  subheading?: string;
}

const DateBanner: React.FC<DateBannerProps> = ({
  backgroundImage,
  heading,
  colorHeading,
  subheading,
}) => {
  return (
    <Fragment>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-SelectDatebgshadow"></div>
        <div className="flex h-full items-center justify-center px-4 mt-8">
          <div className="text-white my-20 z-10">
            <h2 className="font-bold font-DIN text-white 2xl:text-8xl lg:text-7xl text-6xl capitalize">
              {heading}
              <span className="text-lightGreen ml-2">{colorHeading}</span>
            </h2>
            {subheading && (
              <h4 className="my-5 text-lg font-normal">{subheading}</h4>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DateBanner;
