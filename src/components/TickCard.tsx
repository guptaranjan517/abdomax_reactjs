import { cn } from "@/app/utils/merger";
import { ImageExport } from "@/shared/images";
import React from "react";

interface TickCardProps {
  text: any;
  background?: string;
}

const TickCard: React.FC<TickCardProps> = ({ text, background }) => {
  return (
    <div
      className={cn(
        "flex items-start gap-4 !rounded-xl w-full px-5 py-8",
        background
      )}
    >
      <img src={ImageExport.BLUETICK} alt="tick" className="size-5 mt-1 md:mt-0" />
      <p className="text-sm md:text-base 2xl:text-lg font-normal text-white font-Public_Sans leading-7">{text}</p>
    </div>
  );
};

export default TickCard;
