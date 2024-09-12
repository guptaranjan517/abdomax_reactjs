/* eslint-disable @next/next/no-img-element */
import React from "react";
import PrevArrowIcon from "../svg/PrevArrowIcon";
import NextArrowIcon from "../svg/NextArrowIcon";

export const PrevArrow = (props: { onClick?: any }) => {
  const { onClick } = props;
  return (
    <button className="absolute left-0 z-20 bg-bgSliderArrow mobile:size-11 size-9 rounded-full border border-txtArrow flex items-center justify-center text-txtArrow hover:text-lightGreen hover:border-lightGreen transition-colors ease-in prev" onClick={onClick}>
      <PrevArrowIcon />
    </button>
  );
};

export const NextArrow = (props: { onClick?: any }) => {
  const { onClick } = props;
  return (
    <button className="absolute right-0 bg-bgSliderArrow mobile:size-11 size-9 rounded-full border border-txtArrow flex items-center justify-center text-txtArrow hover:text-lightGreen hover:border-lightGreen transition-colors ease-in next" onClick={onClick}>
      <NextArrowIcon />
    </button>
  );
};
