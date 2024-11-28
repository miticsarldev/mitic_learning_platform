import * as React from "react";
import { PartnerCardProps } from "./types";

export const PartnerCard: React.FC<PartnerCardProps> = ({ id }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full ">
        <div className="flex flex-col max-w-full rounded-3xl ">
          <div 
            className="flex shrink-0 rounded-3xl bg-indigo-950 bg-opacity-40 h-[451px] max-md:max-w-full"
            role="img"
            aria-label={`Partner ${id}`}
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
};