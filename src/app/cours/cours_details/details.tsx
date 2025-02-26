"use client";

import React, { useState, useMemo } from "react";
import { FaGraduationCap, FaLaptop, FaUniversalAccess, FaGlobe, FaClosedCaptioning } from "react-icons/fa";

const Details = () => {
  const [showMore, setShowMore] = useState(false);

  const featureList = useMemo(() => [
    { icon: <FaGraduationCap />, title: "Certificat", description: "Recevez un certificat officiel après la réussite du programme." },
    { icon: <FaLaptop />, title: "Classe en ligne", description: "Suivez les cours à votre rythme, où que vous soyez." },
    { icon: <FaUniversalAccess />, title: "Accessibilité à vie", description: "Accédez au contenu à tout moment après l'achat." },
    { icon: <FaGlobe />, title: "Tous les niveaux", description: "Le programme est adapté à tous les niveaux de compétence." },
    { icon: <FaClosedCaptioning />, title: "Prise en charge des sous-titres", description: "Profitez des sous-titres en plusieurs langues pour une meilleure compréhension." },
  ], []);

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">À Propos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Couvre à peu près tout ce que vous devez savoir sur l’UX
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mt-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            {showMore && (
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            )}
          </ul>
          <button
            className="text-[#490AC6] font-semibold mt-4"
            onClick={() => setShowMore(!showMore)}
            aria-label={showMore ? "Réduire le texte" : "Afficher plus de détails"}
          >
            {showMore ? "Voir moins" : "Voir plus"}
          </button>
        </div>

        <div className="space-y-6">
          {featureList.map((item) => (
            <div className="flex items-center space-x-3" key={item.title}>
              <div className="w-12 h-12 bg-[#25026B] text-white rounded-full flex items-center justify-center">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-start md:justify-start mt-6">
            <button
              className="bg-[#25026B] text-white py-2 px-6 rounded-md w-full md:w-auto"
              onClick={() => console.log("Téléchargement en cours...")}
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
