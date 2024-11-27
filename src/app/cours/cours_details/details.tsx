"use client"; // Ajoute cette ligne en haut du fichier

import React, { useState } from "react";

const Details = () => {
  const [showMore, setShowMore] = useState(false); // Etat pour afficher ou masquer le texte

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 max-w-7xl mx-auto p-6">
      <div className="flex items-center space-x-2">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span> {/* Tiret plus long */}
        <h1 className="text-xl font-bold text-[#25026B]">À Propos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Partie gauche : Texte détaillant l'UX */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Couvre à peu près tout ce que vous devez savoir sur l’UX
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mt-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            {showMore && (
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            )}
          </ul>
          <button
            className="text-[#490AC6] font-semibold mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir moins" : "Voir plus"}
          </button>
        </div>

        {/* Partie droite : Icônes, titres et bouton */}
        <div className="space-y-6">
          {[
            {
              icon: "🎓",
              title: "Certificat",
              description:
                "Recevez un certificat officiel après la réussite du programme.",
            },
            {
              icon: "💻",
              title: "Classe en ligne",
              description:
                "Suivez les cours à votre rythme, où que vous soyez.",
            },
            {
              icon: "♿",
              title: "Accessibilité à vie",
              description:
                "Accédez au contenu à tout moment après l'achat.",
            },
            {
              icon: "🔢",
              title: "Tous les niveaux",
              description:
                "Le programme est adapté à tous les niveaux de compétence.",
            },
            {
              icon: "📜",
              title: "Prise en charge des sous-titres",
              description:
                "Profitez des sous-titres en plusieurs langues pour une meilleure compréhension.",
            },
          ].map((item, index) => (
            <div className="flex items-center space-x-3" key={index}>
              <div className="w-12 h-12 bg-[#25026B] text-white rounded-full flex items-center justify-center">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Bouton de téléchargement aligné */}
          <div className="flex justify-start md:justify-start mt-6">
            <button
              className="bg-[#25026B] text-white py-2 px-6 rounded-md w-full md:w-auto"
              onClick={() => alert("Télécharger le programme")} // Remplacez par une action réelle
            >
              Télécharger le programme pour plus de détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
