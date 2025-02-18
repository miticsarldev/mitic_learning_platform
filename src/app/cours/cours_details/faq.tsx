"use client"; // Ajoute cette ligne en haut du fichier
import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "Qu'est-ce qu'une plateforme e-learning ?",
      answer:
        "Une plateforme e-learning est un espace en ligne permettant d’accéder à des cours, suivre des formations, et interagir avec des instructeurs ou d’autres étudiants.",
    },
    {
      question: "Quels types de cours sont disponibles ?",
      answer:
        "Vous trouverez des cours variés couvrant des domaines tels que la programmation, le marketing, la gestion de projet, le développement personnel, et bien plus encore.",
    },
    {
      question: "Dois-je suivre les cours à des horaires fixes ?",
      answer:
        "Non, nos cours sont accessibles en ligne 24/7. Vous pouvez apprendre à votre rythme selon votre disponibilité.",
    },
    {
      question: "Puis-je obtenir un certificat après avoir terminé un cours ?",
      answer:
        "Oui, un certificat de complétion est délivré après avoir terminé un cours, ce qui peut être utile pour votre CV ou votre évolution professionnelle.",
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer:
        "Nous acceptons les paiements par carte bancaire, PayPal et parfois d'autres méthodes locales en fonction de votre pays.",
    },
    {
      question: "Puis-je accéder aux cours sur mobile ?",
      answer:
        "Oui, notre plateforme est optimisée pour les mobiles, et certains cours sont également accessibles via une application dédiée.",
    },
    {
      question: "Que faire si j’ai des questions sur un cours ?",
      answer:
        "Vous pouvez poser vos questions directement dans le forum du cours ou contacter l’instructeur via la messagerie intégrée.",
    },
  ];

  // State pour suivre les questions ouvertes
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Fonction pour gérer l'ouverture/fermeture d'une question
  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      {/* En-tête */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">
          Foire aux Questions (FAQs)
        </h1>
      </div>

      <h2 className="text-2xl font-bold mb-8">
        Vous avez encore des questions ? Voici quelques réponses !
      </h2>

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
                aria-label={
                  openIndexes.includes(index) ? "Réduire" : "Développer"
                }
              >
                {openIndexes.includes(index) ? "-" : "+"}
              </button>
            </div>

            {/* Réponse (affichée uniquement si la question est ouverte) */}
            {openIndexes.includes(index) && (
              <div className="p-4 text-gray-700 bg-gray-100">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
