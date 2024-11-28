import * as React from "react";
import { JoinButton } from "./JoinButton";
export interface CourseHeroProps {
    title: string;
    description: string;
    onJoin: () => void;
    imageSrc: string;
    imageAlt: string;
  }

export const CourseHero: React.FC<CourseHeroProps> = ({
  title,
  description,
  onJoin,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="flex flex-col mt-9 w-full rounded-none max-md:max-w-full">
      <div className="px-20 pb-8 w-full bg-blue-300 rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-center self-stretch px-20 py-12 my-auto w-full bg-neutral-100 rounded-[80px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-3.5 max-w-full w-[576px]">
                <h1 className="self-start text-4xl font-bold leading-10 text-black max-md:max-w-full">
                  {title}
                </h1>
                <p className="mt-9 text-2xl tracking-wide leading-10 text-gray-500 max-md:max-w-full">
                  {description}
                </p>
                <div className="self-center mt-12">
                <JoinButton onClick={onJoin} color="bg-[#393FCF]" />

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="object-contain grow w-full aspect-[0.94] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};