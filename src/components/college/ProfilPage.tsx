import { ChevronRightIcon, UsersIcon } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-gray-300 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-md flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="relative bg-[#2D4B85] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
            SS
            {/* Icône de stylo cliquable */}
            <button
              onClick={() => alert("Modifier")}
              className="absolute top-8 left-8 bg-white rounded-full p-1 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17h2a2 2 0 002-2v-1h-4v1a2 2 0 002 2zm4.293-9.707a1 1 0 00-1.414 0L5 16.586V19h2.414l9.293-9.293a1 1 0 000-1.414z"
                />
              </svg>
            </button>
          </div>

          <h1 className="text-xl font-bold">Sadio Sy Savane</h1>
        </div>
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
          Voir mon profil en tant que
        </button>
      </div>

      {/* Main Content */}
      <div className="flex mt-8">
        {/* Image Section (1/3 de la hauteur, collée à la card bleu ciel) */}
        <div className="flex items-center justify-center w-1/2">
          <div className="bg-blue-400 rounded-xl p-8 w-full h-3/4 flex items-center justify-center">
            <img
              src="/images/CaptureImage.png"
              alt="Student"
              className="rounded-lg max-w-[250px] max-h-[250px]"
            />
          </div>
        </div>

        {/* Cards Section (fond bleu ciel) */}
        {/* Section des cartes */}
        <div className="bg-sky-50 rounded-xl p-10 shadow-md w-1/2 flex flex-col gap-6">
          {/* Titre avec l'icône */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <UsersIcon className="h-8 w-8 text-blue-600" />{" "}
            {/* Icône users avec taille augmentée */}
            <h2 className="text-2xl font-bold text-gray-800">
              Infos personnelles
            </h2>{" "}
            {/* Texte agrandi */}
          </div>

          {/* Cartes d'informations */}
          <InfoCard
            title="Identité"
            description="Pour renseigner votre identité civile : date et lieu de naissance, etc."
          />
          <InfoCard
            title="Adresse et Contact"
            description="Pour vous contacter et nous adapter à votre situation géographique."
          />
          <InfoCard
            title="Niveau de langues"
            description="Votre niveau de maîtrise de français et d'anglais."
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button
        onClick={() => console.log("Chevron cliqué")}
        className="focus:outline-none"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
      </button>
    </div>
  );
};

export default ProfilePage;
