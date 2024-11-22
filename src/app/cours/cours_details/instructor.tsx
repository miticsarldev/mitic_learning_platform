import React from "react";

const Instructor = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      <div className="flex items-center space-x-2">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span> {/* Tiret plus long */}
        <h1 className="text-xl font-bold text-[#25026B]">Professeurs</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Franck Salvatore"
          className="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-xl font-bold text-[#25026B]">Franck Salvatore</h3>
          <p className="text-gray-700 mt-2">
            Senior UX + Designer de 29 ans • Consultant, Auteur et Conférencier
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6">
            <p className="text-gray-700 font-medium">
              ⭐ **4.5 Évaluation de l&apos;instructeur**
            </p>
            <p className="text-gray-700 font-medium">
              📚 **185,242 Étudiants**
            </p>
            {/* Ajout du nombre de cours et d'avis favorables */}
            <p className="text-gray-700 font-medium mt-4">
              🎓 **25 Cours dispensés**
            </p>
            <p className="text-gray-700 font-medium mt-2">
              👍 **1,200 Avis favorables**
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
