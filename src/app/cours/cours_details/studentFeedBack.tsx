"use client"; // Ajoute cette ligne en haut du fichier
import React, { useState } from "react";

const StudentFeedback = () => {
  const feedbacks = [
    {
      name: "Jatin Baghel",
      role: "Concepteur UI UX chez Frost Interactive",
      comment:
        "Excellent cours. Joe est le meilleur instructeur ! Tout est expliqué de manière claire et concise, ce qui facilite grandement la compréhension. J'apprécie particulièrement les points à retenir à la fin de chaque section, qui sont très utiles pour récapituler les informations essentielles.",
      image: "https://via.placeholder.com/150", // Remplacez par le lien de l'image réelle
    },
    {
      name: "Sophia Leclerc",
      role: "Designer chez Creative Studio",
      comment:
        "J'ai beaucoup appris grâce à ce cours. Les explications sont simples et efficaces, et les exemples concrets m'ont permis d'appliquer directement les concepts !",
      image: "https://via.placeholder.com/150", // Lien de l'image
    },
    // Ajoutez plus de feedbacks si nécessaire
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNext = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentFeedback(
      (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <div className="bg-[#2F008E] py-16 px-8">
      {/* Section principale */}
      <div className="max-w-5xl mx-auto text-center text-white">
        {/* Header */}
        <h3 className="uppercase text-sm font-semibold tracking-wide text-[#B8A4F9] mb-3">
          Commentaires des étudiants
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Excellent cours.{" "}
          <span>Joe est le meilleur instructeur !</span>
        </h2>

        {/* Feedback Section */}
        <div className="relative bg-[#490AC6] shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center text-left">
          {/* Image du commentateur */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src={feedbacks[currentFeedback].image}
              alt={feedbacks[currentFeedback].name}
              className="rounded-full w-32 h-32 object-cover border-4 border-[#25026B]"
            />
          </div>

          {/* Texte du commentaire */}
          <div>
            <p className="text-lg italic leading-relaxed mb-6">
              &quot;{feedbacks[currentFeedback].comment}&quot;
            </p>
            <h4 className="font-bold text-xl">{feedbacks[currentFeedback].name}</h4>
            <p className="text-[#B8A4F9] text-sm">
              {feedbacks[currentFeedback].role}
            </p>
          </div>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={handlePrev}
              className="text-white text-2xl font-bold px-3"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={handleNext}
              className="text-white text-2xl font-bold px-3"
            >
              ›
            </button>
          </div>
        </div>

        {/* Points de navigation (indicateurs) */}
        <div className="flex justify-center space-x-2 mt-6">
          {feedbacks.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentFeedback ? "bg-[#490AC6]" : "bg-[#B8A4F9]"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
