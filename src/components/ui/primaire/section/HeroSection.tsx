import React from "react";
import ImageSection from "../components/ImageSection";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#1A013F] text-white py-12 md:py-20 rounded-bottom">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Texte à gauche */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            L'école où vous souhaitez étudier
          </h1>
          <p className="text-lg mb-8">
            Nous préparons vos enfants de 5 à 17 ans à une carrière réussie dans
            l'informatique et dans d'autres domaines basés sur des programmes
            modernes.
          </p>
          <div className="flex items-center space-x-6">
            <PrimaryButton label="Je me lance" />
            <SecondaryButton label="Comment ça marche ?" />
          </div>
        </div>

        {/* Images à droite */}
        <div className="flex space-x-4">
          <ImageSection
            imageUrl="https://via.placeholder.com/200"
            alt="Enfant 1"
          />
          <ImageSection
            imageUrl="https://via.placeholder.com/200"
            alt="Enfant 2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
