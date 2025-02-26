import React from "react";
import Image from "next/image";

interface InstructorProps {
  instructor: {
    firstname?: string;
    lastname?: string;
    phone?: string;
    email?: string;
  };
}

const Instructor: React.FC<InstructorProps> = ({ instructor }) => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:py-10 md:px-20">
      {/* Titre */}
      <div className="flex items-center space-x-2 mb-4 md:mb-6">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-lg md:text-2xl font-bold text-[#25026B]">Professeurs</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center md:items-start bg-white shadow-lg rounded-lg p-4 md:p-6">
        {/* Infos de l'instructeur */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <h3 className="text-lg md:text-xl font-bold text-[#25026B]">
              {instructor?.firstname ?? "Prénom"} {instructor?.lastname ?? "Nom"}
            </h3>
            <Image
              width={16}
              height={16}
              src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/673dab1fd4f209a6937fcc8a/img/icon---filled---check-6.svg"
              alt="Check"
            />
          </div>

          <p className="text-gray-700 text-sm md:text-base mt-1">
            {instructor?.phone ?? "N° inconnu"} • {instructor?.email ?? "Email inconnu"}
          </p>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Photo et statistiques */}
        <div className="flex-shrink-0 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
          <StatItem
            src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--ratinngs-1.svg"
            value="0"
            label="Avis favorables"
          />
          <StatItem
            src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--students-1.svg"
            value="2"
            label="Étudiants"
          />
          <StatItem
            src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---video-6.svg"
            value="1"
            label="Cours"
          />
          <StatItem
            src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---star-3.svg"
            value="4.5"
            label="Évaluation"
          />

        </div>
      </div>
    </div>
  );
};

// Composant réutilisable pour les statistiques
const StatItem: React.FC<{ src: string; value: string; label: string }> = ({ src, value, label }) => {
  return (
    <div className="flex items-center space-x-1">
      <Image width={20} height={20} src={src} alt={label} />
      <span className="text-sm md:text-base">
        <span className="font-bold">{value}</span> {label}
      </span>
    </div>
  );
};

export default Instructor;
