"use client";
import React from "react";

const StepOne = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white p-6 shadow-md rounded-md mt-10">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[#29015D] font-semibold text-lg">
            Information basique
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
          <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Information basique</span>
          <span>Fichier des cours</span>
          <span>Leçons</span>
          <span>Valider</span>
        </div>
      </div>

      <form>
        <div className="mb-4">
          <label
            htmlFor="courseTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Titre du cours
          </label>
          <input
            type="text"
            id="courseTitle"
            placeholder="Titre du cours"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#29015D] focus:border-[#29015D] sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="courseCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Catégorie de cours
          </label>
          <select
            id="courseCategory"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#29015D] focus:border-[#29015D] sm:text-sm"
          >
            <option value="categorie1">Catégorie 01</option>
            <option value="categorie2">Catégorie 02</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="courseLevel"
            className="block text-sm font-medium text-gray-700"
          >
            Niveau du cours
          </label>
          <select
            id="courseLevel"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-focus:ring-[#29015D] focus:border-[#29015D] sm:text-sm"
          >
            <option value="niveau1">Niveau 01</option>
            <option value="niveau2">Niveau 02</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="courseDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description du cours
          </label>
          <textarea
            id="courseDescription"
            placeholder="Description du cours"
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#29015D] focus:border-[#29015D] sm:text-sm"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Retour
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Continuer
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
