// "use client"; // Ajoute cette ligne en haut du fichier
// import React, { useState } from "react";

// const StudentFeedback = () => {
//   const feedbacks = [
//     {
//       name: "Jatin Baghel",
//       role: "Concepteur UI UX chez Frost Interactive",
//       comment:
//         "Excellent cours. Joe est le meilleur instructeur ! Tout est expliqué de manière claire et concise, ce qui facilite grandement la compréhension. J'apprécie particulièrement les points à retenir à la fin de chaque section, qui sont très utiles pour récapituler les informations essentielles.",
//       image: "https://via.placeholder.com/150", // Remplacez par le lien de l'image réelle
//     },
//     {
//       name: "Sophia Leclerc",
//       role: "Designer chez Creative Studio",
//       comment:
//         "J'ai beaucoup appris grâce à ce cours. Les explications sont simples et efficaces, et les exemples concrets m'ont permis d'appliquer directement les concepts !",
//       image: "https://via.placeholder.com/150", // Lien de l'image
//     },
//     // Ajoutez plus de feedbacks si nécessaire
//   ];

//   const [currentFeedback, setCurrentFeedback] = useState(0);

//   const handleNext = () => {
//     setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
//   };

//   const handlePrev = () => {
//     setCurrentFeedback(
//       (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
//     );
//   };

//   return (
//     <div className="bg-[#2F008E] py-16 px-8">
//       <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/7b38cb8edd6084424d0c98a1f5fc95658ef88ebeca4cfcb3fefdc4548feb6abc?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
//             alt=""
//             className="object-contain  rounded-none aspect-[0.7] max-md:mt-10"
//           />
//       {/* Section principale */}
//       <div className="max-w-5xl mx-auto text-center text-white">
//         {/* Header */}
//         <h3 className="uppercase text-sm font-semibold tracking-wide text-[#B8A4F9] mb-3">
//           Commentaires des étudiants
//         </h3>
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Excellent cours.{" "}
//           <span>Joe est le meilleur instructeur !</span>
//         </h2>

//         {/* Feedback Section */}
//         <div className="relative bg-[#490AC6] shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center text-left">
//           {/* Image du commentateur */}
//           <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
//             <img
//               src={feedbacks[currentFeedback].image}
//               alt={feedbacks[currentFeedback].name}
//               className="rounded-full w-32 h-32 object-cover border-4 border-[#25026B]"
//             />
//           </div>

//           {/* Texte du commentaire */}
//           <div>
//             <p className="text-lg italic leading-relaxed mb-6">
//               &quot;{feedbacks[currentFeedback].comment}&quot;
//             </p>
//             <h4 className="font-bold text-xl">{feedbacks[currentFeedback].name}</h4>
//             <p className="text-[#B8A4F9] text-sm">
//               {feedbacks[currentFeedback].role}
//             </p>
//           </div>

//           {/* Navigation */}
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <button
//               onClick={handlePrev}
//               className="text-white text-2xl font-bold px-3"
//             >
//               ‹
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               onClick={handleNext}
//               className="text-white text-2xl font-bold px-3"
//             >
//               ›
//             </button>
//           </div>
//         </div>

//         {/* Points de navigation (indicateurs) */}
//         <div className="flex justify-center space-x-2 mt-6">
//           {feedbacks.map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentFeedback ? "bg-[#490AC6]" : "bg-[#B8A4F9]"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentFeedback;
"use client"; // Ajoute cette ligne en haut du fichier
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
    setCurrentFeedback(
      (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <div className="bg-[#490AC6] py-16 px-8">
      {/* Conteneur principal avec flex pour diviser en 3 */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-8">
        {/* Image prenant 1/3 de la largeur */}
        <div className="md:w-1/3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/7b38cb8edd6084424d0c98a1f5fc95658ef88ebeca4cfcb3fefdc4548feb6abc?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
            alt=""
            className="object-contain rounded-none aspect-[0.7] w-full"
          />
        </div>

        {/* Section des commentaires prenant 2/3 de la largeur */}
<div className="md:w-2/3 text-white">
  <h3 className="uppercase text-sm font-semibold tracking-wide text-[#B8A4F9] mb-3">
    Commentaires des étudiants
  </h3>
  <h2 className="text-3xl md:text-4xl font-bold mb-8">
    Excellent cours. <span>Joe est le meilleur instructeur !</span>
  </h2>

  {/* Conteneur pour le commentaire et le commentateur */}
  <div className="relative p-8 bg-[#490AC6] shadow-lg rounded-lg">
    {/* Texte du commentaire */}
    <div className="text-lg italic leading-relaxed text-center mb-6">
      &quot;{feedbacks[currentFeedback].comment}&quot;
    </div>

    {/* Section image + nom */}
    <div className="flex items-center justify-center">
      {/* Image du commentateur */}
      <div className="flex-shrink-0">
        <img
          src={feedbacks[currentFeedback].image}
          alt={feedbacks[currentFeedback].name}
          className="rounded-full w-32 h-32 object-cover border-4 border-[#25026B]"
        />
      </div>

      {/* Nom et rôle du commentateur */}
      <div className="ml-6 text-center md:text-left">
        <h4 className="font-bold text-xl">{feedbacks[currentFeedback].name}</h4>
        <p className="text-[#B8A4F9] text-sm">
          {feedbacks[currentFeedback].role}
        </p>
      </div>
    </div>

    {/* Navigation */}
    <div className="absolute inset-y-0 left-0 flex items-center">
      <button
        onClick={handlePrev}
        className="text-white text-2xl font-bold px-3"
      >
        ‹
      </button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <button
        onClick={handleNext}
        className="text-white text-2xl font-bold px-3"
      >
        ›
      </button>
    </div>
  </div>

  {/* Points de navigation (indicateurs) */}
  <div className="flex justify-center space-x-2 mt-6">
    {feedbacks.map((_, index) => (
      <span
        key={index}
        className={`w-3 h-3 rounded-full ${
          index === currentFeedback ? "bg-[#25026B]" : "bg-[#B8A4F9]"
        }`}
      ></span>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default StudentFeedback;
