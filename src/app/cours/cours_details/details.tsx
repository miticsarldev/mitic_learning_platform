// "use client"; // Ajoute cette ligne en haut du fichier

// import React, { useState } from "react";

// const Details = () => {
//   const [showMore, setShowMore] = useState(false); // Etat pour afficher ou masquer le texte

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex items-center space-x-2">
//         <span className="w-6 h-0.5 bg-[#490AC6]"></span> {/* Tiret plus long */}
//         <h1 className="text-xl font-bold text-[#25026B]">A Propos</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Partie gauche : Texte détaillant l'UX */}
//         <div>
//       <h2 className="text-3xl font-bold mb-6">
//         Couvre à peu près tout ce que vous devez savoir sur l’UX
//       </h2>
//       <p className="text-lg text-gray-700 mb-6">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat.
//       </p>
//       <ul className="list-disc pl-6 space-y-3 text-gray-700 mt-6">
//         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//         {showMore && (
//           <li>
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </li>
//         )}
//       </ul>
//       <button
//         className="text-[#490AC6] font-semibold mt-4"
//         onClick={() => setShowMore(!showMore)}
//       >
//         {showMore ? "Voir moins" : "Voir plus"}
//       </button>
//     </div>

//         {/* Partie droite : Icônes et titres */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
//               {/* Remplacez cette icône par l'icône appropriée */}
//               <span className="text-xl">🎓</span>
//             </div>
//             <h3 className="text-xl font-semibold">Certificat</h3>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
//               <span className="text-xl">💻</span>
//             </div>
//             <h3 className="text-xl font-semibold">Classe en ligne</h3>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
//               <span className="text-xl">♿</span>
//             </div>
//             <h3 className="text-xl font-semibold">Accessibilité à vie</h3>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
//               <span className="text-xl">🔢</span>
//             </div>
//             <h3 className="text-xl font-semibold">Tous les niveaux</h3>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
//               <span className="text-xl">📜</span>
//             </div>
//             <h3 className="text-xl font-semibold">
//               Prise en charge des sous-titres
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;
"use client"; // Ajoute cette ligne en haut du fichier

import React, { useState } from "react";

const Details = () => {
  const [showMore, setShowMore] = useState(false); // Etat pour afficher ou masquer le texte

  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 max-w-7xl mx-auto p-6">
      <div className="flex items-center space-x-2">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span> {/* Tiret plus long */}
        <h1 className="text-xl font-bold text-[#25026B]">A Propos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Partie gauche : Texte détaillant l'UX */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Couvre à peu près tout ce que vous devez savoir sur l’UX
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mt-6">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            {showMore && (
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
            )}
          </ul>
          <button
            className="text-[#490AC6] font-semibold mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir moins" : "Voir plus"}
          </button>
        </div>

        {/* Partie droite : Icônes et titres */}
        <div className="space-y-6">
        <div className="flex items-center space-x-3">
  <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
    {/* Remplacez cette icône par l'icône appropriée */}
    <span className="text-xl">🎓</span>
  </div>
  <div>
    <h3 className="text-xl font-semibold">Certificat</h3>
    <p className="text-sm text-gray-500">Recevez un certificat officiel après la réussite du programme.</p> {/* Sous-titre */}
  </div>
</div>

<div className="flex items-center space-x-3">
  <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
    <span className="text-xl">💻</span>
  </div>
  <div>
    <h3 className="text-xl font-semibold">Classe en ligne</h3>
    <p className="text-sm text-gray-500">Suivez les cours à votre rythme, où que vous soyez.</p> {/* Sous-titre */}
  </div>
</div>

<div className="flex items-center space-x-3">
  <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
    <span className="text-xl">♿</span>
  </div>
  <div>
    <h3 className="text-xl font-semibold">Accessibilité à vie</h3>
    <p className="text-sm text-gray-500">Accédez au contenu à tout moment après l&apos;achat.</p> {/* Sous-titre */}
  </div>
</div>

<div className="flex items-center space-x-3">
  <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
    <span className="text-xl">🔢</span>
  </div>
  <div>
    <h3 className="text-xl font-semibold">Tous les niveaux</h3>
    <p className="text-sm text-gray-500">Le programme est adapté à tous les niveaux de compétence.</p> {/* Sous-titre */}
  </div>
</div>

<div className="flex items-center space-x-3">
  <div className="w-12 h-12 bg-[#490AC6] text-white rounded-full flex items-center justify-center">
    <span className="text-xl">📜</span>
  </div>
  <div>
    <h3 className="text-xl font-semibold">Prise en charge des sous-titres</h3>
    <p className="text-sm text-gray-500">Profitez des sous-titres en plusieurs langues pour une meilleure compréhension.</p> {/* Sous-titre */}
  </div>
</div>


          {/* Bouton de téléchargement */}
          <div className="mt-6 text-right">
            <button
              className="bg-[#490AC6] text-white py-2 px-6 rounded-full w-full md:w-auto"
              onClick={() => alert("Télécharger le programme")} // Remplacer par la fonction de téléchargement réelle
            >
              Télécharger le programme pour plus de détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
