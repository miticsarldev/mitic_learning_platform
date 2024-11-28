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
          <div className="flex flex-col w-[50%] max-md:w-full">
  <div className="flex flex-col justify-center items-center self-stretch px-10 py-8 my-6 w-[90%] mx-auto bg-neutral-100 rounded-2xl max-md:px-4 max-md:w-full">
    <div className="flex flex-col max-w-[450px] w-full">
      <h1 className="text-3xl font-bold leading-snug text-black">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gray-500">
        {description}
      </p>
      <div className="mt-4 ml-40">
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