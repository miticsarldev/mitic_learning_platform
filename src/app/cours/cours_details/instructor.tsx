// import React from "react";

// const Instructor = () => {
//   return (
//     <div className="bg-gray-50 py-10 px-6 md:px-20">
//       <div className="flex items-center space-x-2 mb-6">
//         <span className="w-6 h-0.5 bg-[#490AC6]"></span>
//         <h1 className="text-xl font-bold text-[#25026B]">Professeurs</h1>
//       </div>

//       <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
//         {/* Photo de l'instructeur et statistiques */}
//         <div className="flex flex-col items-center md:items-start">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Franck Salvatore"
//             className="w-36 h-36 rounded-full mb-4"
//           />
//           {/* Statistiques alignées verticalement */}
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <img
//                 src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--ratinngs-1.svg"
//                 alt="Ratings"
//                 className="w-6 h-6 mr-2"
//               />
//               <span>
//                 <span className="font-bold">28,707</span> Avis favorables
//               </span>
//             </div>

//             <div className="flex items-center">
//               <img
//                 src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--students-1.svg"
//                 alt="Students"
//                 className="w-6 h-6 mr-2"
//               />
//               <span>
//                 <span className="font-bold">155,242</span> Étudiants
//               </span>
//             </div>

//             <div className="flex items-center">
//               <img
//                 src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---video-6.svg"
//                 alt="Courses"
//                 className="w-6 h-6 mr-2"
//               />
//               <span>
//                 <span className="font-bold">8</span> Cours
//               </span>
//             </div>

//             <div className="flex items-center">
//               <img
//                 src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---star-3.svg"
//                 alt="Rating"
//                 className="w-6 h-6 mr-2"
//               />
//               <span>
//                 <span className="font-bold">4.5</span> Évaluation
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Informations sur l'instructeur */}
//         <div className="flex-1 mt-6 md:mt-0 md:ml-8">
//           <div className="flex items-center space-x-2">
//             <h3 className="text-xl font-bold text-[#25026B]">Franck Salvatore</h3>
//             <img
//               className="w-5 h-5"
//               src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/673dab1fd4f209a6937fcc8a/img/icon---filled---check-6.svg"
//               alt="Check"
//             />
//           </div>

//           <p className="text-gray-700 mt-2">
//             Senior UX + Designer de 29 ans • Consultant, Auteur et Conférencier
//           </p>
//           <p className="text-gray-500 mt-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Instructor;
import React from "react";

const Instructor = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">Professeurs</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6">
        {/* Photo de l'instructeur et statistiques */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <img
            src="https://via.placeholder.com/150"
            alt="Franck Salvatore"
            className="w-36 h-36 rounded-full mb-4"
          />
          {/* Statistiques alignées verticalement */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--ratinngs-1.svg"
                alt="Ratings"
                className="w-6 h-6 mr-2"
              />
              <span>
                <span className="font-bold">28,707</span> Avis favorables
              </span>
            </div>

            <div className="flex items-center">
              <img
                src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--students-1.svg"
                alt="Students"
                className="w-6 h-6 mr-2"
              />
              <span>
                <span className="font-bold">155,242</span> Étudiants
              </span>
            </div>

            <div className="flex items-center">
              <img
                src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---video-6.svg"
                alt="Courses"
                className="w-6 h-6 mr-2"
              />
              <span>
                <span className="font-bold">8</span> Cours
              </span>
            </div>

            <div className="flex items-center">
              <img
                src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---star-3.svg"
                alt="Rating"
                className="w-6 h-6 mr-2"
              />
              <span>
                <span className="font-bold">4.5</span> Évaluation
              </span>
            </div>
          </div>
        </div>

        {/* Informations sur l'instructeur */}
        <div className="flex-1 ml-0 md:ml-8">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-bold text-[#25026B]">Franck Salvatore</h3>
            <img
              className="w-5 h-5"
              src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/673dab1fd4f209a6937fcc8a/img/icon---filled---check-6.svg"
              alt="Check"
            />
          </div>

          <p className="text-gray-700 mt-2">
            Senior UX + Designer de 29 ans • Consultant, Auteur et Conférencier
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
