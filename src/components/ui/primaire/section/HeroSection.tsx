import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importation des composants de Swiper
import "swiper/css"; // Styles de base de Swiper
import "swiper/css/effect-fade"; // Styles pour un effet spécifique
import "swiper/css/navigation"; // Styles pour les boutons de navigation
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import ImageSection from "../components/ImageSection";
import Navbar from "../../navbar/Navbar";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#1A013F] text-white px-10">
      {/* Barre de navigation */}
      <Navbar />

      {/* Section principale */}
      <section className="py-12 md:py-20 rounded-bottom">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Texte à gauche */}
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
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

          {/* Slider des images à droite */}
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay]} // Modules utilisés
              effect="fade" // Effet de transition
              autoplay={{ delay: 3000 }} // Défilement automatique toutes les 3s
              loop={true} // Répète les images en boucle
              className="rounded-lg shadow-lg" // Ajout d'une ombre et de coins arrondis
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <ImageSection
                  imageUrl="/images/teacher-helping-kids-class.jpg"
                  alt="Enfant 1"
                />
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <ImageSection
                  imageUrl="/images/shallow-focus-shot-african-child-learning-school.jpg"
                  alt="Enfant 1"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
