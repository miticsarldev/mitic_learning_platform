"use client"; // Indique que ce composant doit être rendu côté client
import React, { useState } from "react";

const Content: React.FC<{ lessons: any[] }> = ({ lessons }) => {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const toggleLesson = (id: string | null) => {
    setExpandedLesson(expandedLesson === id ? null : id);
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
          <span>{lessons.length} Leçons</span>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson: any) => (
            <div
              key={lesson._id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div
                className="flex justify-between items-center bg-white p-4 cursor-pointer"
                onClick={() => toggleLesson(lesson._id)}
              >
                <div>
                  <h3 className="font-bold text-[#25026B]">{lesson.title}</h3>
                  <p className="text-gray-500">
                    {lesson.sections?.length || 0} Sections • {lesson.duration}
                  </p>
                </div>
                <button>
                  {expandedLesson === lesson._id ? (
                    <span className="text-[#490AC6]">-</span>
                  ) : (
                    <span className="text-[#490AC6]">+</span>
                  )}
                </button>
              </div>
              {expandedLesson === lesson._id && (
                <div className="bg-gray-50 p-4">
                  {lesson.sections && lesson.sections.length > 0 ? (
                    <ul className="space-y-2">
                      {lesson.sections.map((section: any) => (
                        <li
                          key={section._id}
                          className="flex justify-between items-center text-gray-700"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-[#490AC6]">📄</span>
                            <span>{section.title}</span>
                          </div>
                          <span className="text-gray-500">
                            {section.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Aucune section disponible</p>
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
