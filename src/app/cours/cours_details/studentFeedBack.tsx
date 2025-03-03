"use client";
import Image from "next/image";
import React, { useState } from "react";

const StudentFeedback = () => {
  const feedbacks = [
    {
      name: "Jatin Baghel",
      role: "Concepteur UI UX chez Frost Interactive",
      comment:
        "Excellent cours. Joe est le meilleur instructeur ! Tout est expliqué de manière claire et concise, ce qui facilite grandement la compréhension. J'apprécie particulièrement les points à retenir à la fin de chaque section, qui sont très utiles pour récapituler les informations essentielles.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sophia Leclerc",
      role: "Designer chez Creative Studio",
      comment:
        "J'ai beaucoup appris grâce à ce cours. Les explications sont simples et efficaces, et les exemples concrets m'ont permis d'appliquer directement les concepts !",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNext = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="bg-[#490AC6] py-10 px-4 md:py-16 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-x-8">
        {/* Image */}
        <div className="md:w-1/3 w-full">
          <div className="relative w-full aspect-[0.7]">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/7b38cb8edd6084424d0c98a1f5fc95658ef88ebeca4cfcb3fefdc4548feb6abc?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
              alt="Image de l'instructeur"
              className="object-contain rounded-md"
              fill
            />
          </div>
        </div>

        {/* Contenu */}
        <div className="md:w-2/3 text-white space-y-4">
          <h3 className="uppercase text-xs sm:text-sm font-semibold tracking-wide text-[#B8A4F9] mb-3">
            Commentaires des étudiants
          </h3>

          <div className="relative p-6 md:p-8 bg-[#490AC6] shadow-lg rounded-lg">
            <div className="text-base sm:text-lg italic leading-relaxed text-center mb-4">
              &quot;{feedbacks[currentFeedback].comment}&quot;
            </div>

            <div className="flex flex-col items-center">
              <h4 className="font-bold text-lg sm:text-xl">{feedbacks[currentFeedback].name}</h4>
              <p className="text-[#B8A4F9] text-xs sm:text-sm">
                {feedbacks[currentFeedback].role}
              </p>
            </div>

            {/* Boutons de navigation */}
            <div className="absolute inset-y-0 left-2 flex items-center">
              <button
                onClick={handlePrev}
                className={`text-white text-xl sm:text-2xl font-bold px-2 sm:px-3 ${currentFeedback === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={currentFeedback === 0}
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button
                onClick={handleNext}
                className={`text-white text-xl sm:text-2xl font-bold px-2 sm:px-3 ${currentFeedback === feedbacks.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={currentFeedback === feedbacks.length - 1}
              >
                ›
              </button>
            </div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center space-x-2 mt-4">
            {feedbacks.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${index === currentFeedback ? "bg-[#25026B]" : "bg-[#B8A4F9]"
                  }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;