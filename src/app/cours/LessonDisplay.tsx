import React from "react";
import { LessonDisplayProps } from "../types";
import Image from "next/image";

const LessonDisplay: React.FC<LessonDisplayProps> = ({ lessons, lessonId }) => {
  if (!lessons || lessons.length === 0) {
    return <p>Aucune leçon disponible</p>;
  }

  const lesson = lessons.find((lesson) => lesson._id === lessonId);

  if (!lesson) {
    return <p>Leçon introuvable</p>;
  }

  return (
    <div className="md:col-span-3">
      {/* Titre de la leçon */}
      <h2 className="text-2xl font-bold mt-6">{lesson.title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{lesson.description}</p>

      {/* Sections */}
      {lesson.sections.map((section) => (
        <div key={section._id} className="mt-6">
          {/* Titre de la section */}
          <h3 className="text-xl font-semibold">{section.title}</h3>

          {/* Description de la section */}
          <p className="text-gray-700 mt-2">{section.description}</p>

          {/* Image ou vidéo */}
          {section.path_image && (
            <div className="relative mt-4">
              <div className="relative w-full h-64"> {/* Ajuste la hauteur selon tes besoins */}
                <Image
                  src={section.path_image}
                  alt={section.title || "Image de la section"}
                  layout="fill"
                  objectFit="cover" // Ajuste l'image pour couvrir entièrement la div
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
          {section.path_video && (
            <div className="relative mt-4">
              <video
                src={section.path_video}
                controls
                className="rounded-lg shadow-md w-full mx-auto"
              ></video>
            </div>
          )}
        </div>
      ))}

      {/* Alerte */}
      <div className="mt-4 space-y-4">
        <div className="flex items-start bg-purple-100 p-4 rounded-lg">
          <span className="text-purple-500 text-lg">ℹ️</span>
          <p className="ml-4 text-gray-700">
            N'oubliez pas de prendre des notes pendant la leçon !
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonDisplay;
