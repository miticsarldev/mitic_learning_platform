// "use client";

// import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     <aside className="bg-white shadow-md p-4 rounded-lg relative">
//       {/* Conteneur du titre et des flèches, agrandi */}
//       <div className="flex items-center justify-between mb-4 bg-[#490AC6] p-4">
//         {/* Flèche gauche */}
//         <button
//           className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
//           onClick={() => {
//             const container = document.getElementById("lessonList");
//             if (container) container.scrollBy({ left: -100, behavior: "smooth" });
//           }}
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Titre */}
//         <h3 className="text-lg font-semibold text-white text-center flex-grow">
//           Nom Leçons en cours
//         </h3>

//         {/* Flèche droite */}
//         <button
//           className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
//           onClick={() => {
//             const container = document.getElementById("lessonList");
//             if (container) container.scrollBy({ left: 100, behavior: "smooth" });
//           }}
//         >
//           <FaArrowRight />
//         </button>
//       </div>

//       {/* Liste scrollable */}
//       <ul
//         id="lessonList"
//         className="space-y-2 overflow-x-auto no-scrollbar"
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <li className="flex items-center">
//           <span className="bg-[#490AC6] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
//             <FaCheck className="text-xs" />
//           </span>
//           Perkenalan Instruktur
//         </li>
//         <li className="flex items-center">
//           <span className="bg-[#490AC6] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
//             <FaCheck className="text-xs" />
//           </span>
//           Download Tools
//         </li>
//         <li className="flex items-center">
//           <span className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-gray-500 mr-2">
//             <FaCheck className="text-xs" />
//           </span>
//           Basic Pengunaan Tools
//         </li>
//         {/* Ajouter d'autres leçons */}
//       </ul>
//     </aside>
//   );
// }
"use client";

import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md p-4 rounded-lg relative">
      {/* Conteneur du titre et des flèches */}
      <div className="flex items-center justify-between mb-4 bg-[#490AC6] p-4">
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
        className="space-y-2 overflow-y-auto no-scrollbar h-64"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Ajouter des éléments statiques pour le défilement */}
        {Array.from({ length: 20 }).map((_, index) => (
          <li className="flex items-center" key={index}>
            <span className="bg-[#490AC6] w-6 h-6 rounded-full flex items-center justify-center text-white mr-2">
              <FaCheck className="text-xs" />
            </span>
            Leçon Statique {index + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
}
