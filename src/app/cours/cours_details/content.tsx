"use client"; // Ajoute cette ligne en haut du fichier
import React, { useState } from "react";

const Content = () => {
  const [expandedLesson, setExpandedLesson] = useState(null);

  const lessons = [
    {
      title: "Leçon 1",
      sections: 2,
      duration: "15 minutes",
      details: [],
    },
    {
      title: "Leçon 2",
      sections: 2,
      duration: "30 minutes",
      details: [],
    },
    {
      title: "Exercice : Exercice 2",
      sections: 6,
      duration: "120 minutes",
      details: [
        { type: "texte", title: "Énoncé", duration: "8 minutes" },
        { type: "video", title: "Vidéo 1", duration: "15 minutes" },
        { type: "video", title: "Vidéo 2", duration: "20 minutes" },
        { type: "texte", title: "Correction", duration: "40 minutes" },
      ],
    },
    // Ajoutez d'autres leçons ici
  ];

  const toggleLesson = (index) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">Contenu</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#25026B] mb-4">
          Nos cours sont un mélange équilibré de vidéos et d’articles
        </h2>
        <div className="flex items-center space-x-4 text-gray-500 mb-8">
          <span>10 Leçons</span>
          <span>20 Vidéos</span>
          <span>20 Articles</span>
          <span>18 Exercices</span>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <div
                className="flex justify-between items-center bg-white p-4 cursor-pointer"
                onClick={() => toggleLesson(index)}
              >
                <div>
                  <h3 className="font-bold text-[#25026B]">{lesson.title}</h3>
                  <p className="text-gray-500">
                    {lesson.sections} Sections • {lesson.duration}
                  </p>
                </div>
                <button>
                  {expandedLesson === index ? (
                    <span className="text-[#490AC6]">-</span>
                  ) : (
                    <span className="text-[#490AC6]">+</span>
                  )}
                </button>
              </div>
              {expandedLesson === index && (
                <div className="bg-gray-50 p-4">
                  {lesson.details.length > 0 ? (
                    <ul className="space-y-2">
                      {lesson.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-gray-700"
                        >
                          <div className="flex items-center space-x-2">
                            {detail.type === "video" && (
                              <span className="text-[#490AC6]">🎥</span>
                            )}
                            {detail.type === "texte" && (
                              <span className="text-[#25026B]">📄</span>
                            )}
                            <span>{detail.title}</span>
                          </div>
                          <span className="text-gray-500">{detail.duration}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Aucun détail disponible</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
