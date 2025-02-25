"use client";
import React, { useState } from "react";
import { FileText } from "lucide-react"; // Pour remplacer l'emoji
import { Lesson } from "@/app/types";

const Content: React.FC<{ lessons: Lesson[] }> = ({ lessons }) => {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const toggleLesson = (id: string | null) => {
    setExpandedLesson(expandedLesson === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-6 px-4 sm:py-10 sm:px-10">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4 sm:mb-6">
        <span className="w-5 h-0.5 bg-[#490AC6] sm:w-6"></span>
        <h1 className="text-lg font-bold text-[#25026B] sm:text-xl">Contenu</h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-bold text-[#25026B] mb-3 sm:text-2xl">
          Nos cours sont un mélange équilibré de vidéos et d’articles
        </h2>
        <div className="flex items-center space-x-2 text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
          <span>{lessons.length} Leçons</span>
        </div>

        {/* Lessons List */}
        <div className="space-y-3 sm:space-y-4">
          {lessons.map((lesson) =>
            lesson._id ? (
              <div key={lesson._id} className="border rounded-lg shadow-sm">
                <div
                  className="flex justify-between items-center bg-white p-3 sm:p-4 cursor-pointer"
                  onClick={() => toggleLesson(lesson._id)}
                >
                  <div>
                    <h3 className="font-bold text-[#25026B] text-base sm:text-lg">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base">
                      {lesson.sections?.length || 0} Sections • {lesson.duration || "N/A"}
                    </p>
                  </div>
                  <button className="p-2 text-sm sm:text-base">
                    {expandedLesson === lesson._id ? (
                      <span className="text-[#490AC6] text-lg">-</span>
                    ) : (
                      <span className="text-[#490AC6] text-lg">+</span>
                    )}
                  </button>
                </div>
                {expandedLesson === lesson._id && (
                  <div className="bg-gray-50 p-3 sm:p-4">
                    {lesson.sections && lesson.sections.length > 0 ? (
                      <ul className="space-y-2">
                        {lesson.sections.map((section) =>
                          section._id ? (
                            <li
                              key={section._id}
                              className="flex justify-between items-center text-gray-700 text-sm sm:text-base"
                            >
                              <div className="flex items-center space-x-2">
                              <FileText className="text-[#490AC6] w-4 h-4 sm:w-5 sm:h-5" />
                                <span>{section.title}</span>
                              </div>
                              <span className="text-gray-500 text-xs sm:text-sm">
                                {section.description || "Pas de description"}
                              </span>
                            </li>
                          ) : null
                        )}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm sm:text-base">
                        Aucune section disponible
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
