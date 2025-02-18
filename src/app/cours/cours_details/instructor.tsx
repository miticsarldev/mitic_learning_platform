import React from "react";
import Image from "next/image";

// Définition du type pour éviter l'utilisation de `any`
interface InstructorProps {
  instructor: {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
  };
}

const Instructor: React.FC<InstructorProps> = ({ instructor }) => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      <div className="flex items-center space-x-2 mb-6">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-xl font-bold text-[#25026B]">Professeurs</h1>
      </div>

      <div className="flex flex-row gap-5 md:flex-row items-start bg-white shadow-lg rounded-lg p-6">
        {/* Informations sur l'instructeur */}
        <div className="flex-1 ml-0 md:ml-8">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-bold text-[#25026B]">
              {instructor.firstname} {instructor.lastname}
            </h3>
            <Image
              width={20}
              height={20}
              src="https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/673dab1fd4f209a6937fcc8a/img/icon---filled---check-6.svg"
              alt="Check"
            />
          </div>

          <p className="text-gray-700 mt-2">
            {instructor.phone} • {instructor.email}
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Photo de l'instructeur et statistiques */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          {/* Statistiques alignées verticalement */}
          <div className="space-y-4">
            {[
              {
                src: "https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--ratinngs-1.svg",
                alt: "Ratings",
                value: "0",
                label: "Avis favorables",
              },
              {
                src: "https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled--students-1.svg",
                alt: "Students",
                value: "2",
                label: "Étudiants",
              },
              {
                src: "https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---video-6.svg",
                alt: "Courses",
                value: "1",
                label: "Cours",
              },
              {
                src: "https://cdn.animaapp.com/projects/66e43e8462936f6a78000b5b/releases/6746f29d9faa9b04bc700d2f/img/icon---filled---star-3.svg",
                alt: "Rating",
                value: "4.5",
                label: "Évaluation",
              },
            ].map(({ src, alt, value, label }) => (
              <div key={alt} className="flex items-center">
                <Image width={24} height={24} src={src} alt={alt} />
                <span className="ml-2">
                  <span className="font-bold">{value}</span> {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
