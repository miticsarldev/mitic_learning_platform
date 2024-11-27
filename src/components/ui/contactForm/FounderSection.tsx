import React from "react";
import { motion } from "framer-motion";

const FounderSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1A013F]">
        Notre Equipe
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12">

        {/* Image avec animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <img
            src="/images/user_profil.png"
            alt="Fondateur"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Contenu texte */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <span className="text-xs font-semibold bg-black text-white py-1 px-3 rounded-full inline-block mb-4">
            + Fondateur
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            SADIO SY
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            « Quand j'étais adolescente, je rêvais qu'étudier à l'école serait
            comme ça. Je me demande comment jouer à des jeux informatiques. J'ai
            grandi et créé une école qui me manquait alors. School Management -
            concepteur de plateforme éducative flexible, où les parents gèrent
            l'emploi du temps, et nous réfléchissons à chaque leçon. »
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Nos formateurs deviennent non seulement des mentors pour l'enfant,
            mais des fidèles amis qui le guident et le soutiennent.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
