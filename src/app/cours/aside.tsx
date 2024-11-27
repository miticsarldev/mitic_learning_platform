"use client";

import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="shadow-md p-4 rounded-lg relative h-full flex flex-col">
      {/* Conteneur du titre et des flèches */}
      <div className="flex items-center justify-between mb-4 bg-[#25026B] p-4">
        {/* Flèche gauche */}
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => {
            const container = document.getElementById("lessonList");
            if (container) container.scrollBy({ top: -100, behavior: "smooth" });
          }}
        >
          <FaArrowLeft />
        </button>

        {/* Titre */}
        <h3 className="text-lg font-semibold text-white text-center flex-grow">
          Nom Leçons en cours
        </h3>

        {/* Flèche droite */}
        <button
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={() => {
            const container = document.getElementById("lessonList");
            if (container) container.scrollBy({ top: 100, behavior: "smooth" });
          }}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Liste scrollable */}
      <ul
        id="lessonList"
        className="space-y-2 overflow-y-auto no-scrollbar flex-grow"
      >
        {/* Ajouter des éléments statiques pour le défilement */}
        {Array.from({ length: 20 }).map((_, index) => (
          <li className="flex items-center" key={index}>
            <span className="bg-[#25026B] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
              <FaCheck className="text-xs" />
            </span>
            Leçon Statique {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

