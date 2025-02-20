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
    <div className="bg-[#490AC6] py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-8">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-[0.7]">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/7b38cb8edd6084424d0c98a1f5fc95658ef88ebeca4cfcb3fefdc4548feb6abc?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
              alt="Image de l'instructeur"
              className="object-contain rounded-none"
              fill
            />
          </div>
        </div>

        <div className="md:w-2/3 text-white">
          <h3 className="uppercase text-sm font-semibold tracking-wide text-[#B8A4F9] mb-3">
            Commentaires des étudiants
          </h3>
          

          <div className="relative p-8 bg-[#490AC6] shadow-lg rounded-lg">
            <div className="text-lg italic leading-relaxed text-center mb-6">
              &quot;{feedbacks[currentFeedback].comment}&quot;
            </div>

            <div className="flex items-center justify-center">
              <div className="ml-6 text-center md:text-left">
                <h4 className="font-bold text-xl">{feedbacks[currentFeedback].name}</h4>
                <p className="text-[#B8A4F9] text-sm">
                  {feedbacks[currentFeedback].role}
                </p>
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={handlePrev}
                className={`text-white text-2xl font-bold px-3 ${currentFeedback === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentFeedback === 0}
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={handleNext}
                className={`text-white text-2xl font-bold px-3 ${currentFeedback === feedbacks.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentFeedback === feedbacks.length - 1}
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {feedbacks.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentFeedback ? "bg-[#25026B]" : "bg-[#B8A4F9]"}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
