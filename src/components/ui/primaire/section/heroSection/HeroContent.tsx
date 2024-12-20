import * as React from "react";
import { HeroContentProps } from "./type";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
}) => (
  <div className="flex flex-col items-start mr-0 w-full text-white max-md:max-w-full">
    <h1 className="self-stretch text-7xl font-bold leading-[83px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
      {title.startsWith("Etudier") ? (
        <>
          {/* Colorer uniquement "Etudier" */}
          <span className="text-orange-500">Etudier</span>{" "}
          {title.replace("Etudier", "").trim()}
        </>
      ) : (
        // Afficher le titre tel quel si "Etudier" n'est pas au début
        title
      )}
    </h1>
    <p className="mt-3 text-xl leading-7 w-[440px] max-md:max-w-full">
      {description}
    </p>
    <div className="flex items-center space-x-6 py-6">
      <PrimaryButton label="Je me lance" />
      <SecondaryButton label="Comment ça marche ?" />
    </div>
  </div>
);
