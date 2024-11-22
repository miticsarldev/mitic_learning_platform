"use client"; // Ajoute cette ligne en haut du fichier
import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "À qui s'adresse ce cours ?",
      answer:
        "Ce cours s'adresse aux débutants en UX et design web ainsi qu'aux professionnels souhaitant approfondir leurs compétences.",
    },
    {
      question: "Quels sont les prérequis ?",
      answer:
        "Aucun prérequis n'est nécessaire, mais une connaissance de base en informatique est un plus.",
    },
    {
      question: "Combien de temps ai-je accès au cours ?",
      answer:
        "Vous avez un accès à vie au cours une fois que vous l'avez acheté.",
    },
  ];

  // State pour suivre les questions ouvertes
  const [openIndexes, setOpenIndexes] = useState([]);

  // Fonction pour gérer l'ouverture/fermeture d'une question
  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // Si déjà ouvert, on le ferme
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Sinon, on l'ajoute aux questions ouvertes
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      {/* En-tête */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">Foire aux Questions (FAQs)</h1>
      </div>

      <h2 className="text-2xl font-bold mb-8">Vous avez encore des doutes ? Soyons plus clairs</h2>

      {/* Section FAQ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              className="p-4 flex justify-between items-center cursor-pointer"
            >
              <h3 className="font-bold text-[#25026B]">{faq.question}</h3>
              {/* Bouton + ou - */}
              <button
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-[#25026B] font-bold"
                aria-label={openIndexes.includes(index) ? "Réduire" : "Développer"}
              >
                {openIndexes.includes(index) ? "-" : "+"}
              </button>
            </div>

            {/* Réponse (affichée uniquement si la question est ouverte) */}
            {openIndexes.includes(index) && (
              <div className="p-4 text-gray-700 bg-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
