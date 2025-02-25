"use client";

import React, { useState, useMemo } from "react";
import { FaGraduationCap, FaLaptop, FaUniversalAccess, FaGlobe, FaClosedCaptioning } from "react-icons/fa";
import { jsPDF } from "jspdf";
import { DetailLesson } from "@/app/types";

interface DetailsProps {
  lessons: DetailLesson[];
}

const Details: React.FC<DetailsProps> = ({ lessons }) => {
  const [showMore, setShowMore] = useState(false);

  const featureList = useMemo(() => [
    { icon: <FaGraduationCap />, title: "Certificat", description: "Recevez un certificat officiel après la réussite du programme." },
    { icon: <FaLaptop />, title: "Classe en ligne", description: "Suivez les cours à votre rythme, où que vous soyez." },
    { icon: <FaUniversalAccess />, title: "Accessibilité à vie", description: "Accédez au contenu à tout moment après l'achat." },
    { icon: <FaGlobe />, title: "Tous les niveaux", description: "Le programme est adapté à tous les niveaux de compétence." },
    { icon: <FaClosedCaptioning />, title: "Sous-titres disponibles", description: "Profitez des sous-titres en plusieurs langues." },
  ], []);


  const handleDownload = async () => {
    const doc = new jsPDF();

    // Titre principal
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Liste des Leçons", 105, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    let y = 30; // Position verticale

    lessons.forEach((lesson, index) => {
      // Affichage de la leçon
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 255); // Bleu
      doc.text(`Leçon ${index + 1} : ${lesson.title}`, 20, y);
      y += 7;

      // Description de la leçon (avec retour à la ligne automatique)
      doc.setFont("helvetica", "italic");
      doc.setFontSize(11);
      doc.setTextColor(50, 50, 50); // Gris foncé
      const descriptionLines = doc.splitTextToSize(lesson.description, 180); // 180 est la largeur de la zone où le texte peut s'étendre
      doc.text(descriptionLines, 25, y);
      y += descriptionLines.length * 6; // Ajuster la position en fonction du nombre de lignes générées

      // Affichage des sections
      lesson.sections.forEach((section, secIndex) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Noir
        doc.text(`- Section ${secIndex + 1} : ${section}`, 30, y);
        y += 6;
      });

      // Ligne de séparation
      doc.setDrawColor(200, 200, 200);
      doc.line(20, y, 190, y);
      y += 7;
    });

    doc.save("lessons.pdf");
  };


  return (
    <div className="bg-gray-50 py-6 px-4 md:py-10 md:px-20 max-w-7xl mx-auto">
      {/* Titre */}
      <div className="flex items-center space-x-2 mb-4 md:mb-6">
        <span className="w-6 h-0.5 bg-[#490AC6]"></span>
        <h1 className="text-lg md:text-xl font-bold text-[#25026B]">À Propos</h1>
      </div>

      {/* Contenu Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Texte */}
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Couvre à peu près tout ce que vous devez savoir sur l’UX
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          {/* Liste des points clés */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            {showMore && (
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            )}
          </ul>

          {/* Bouton Voir Plus */}
          <button
            className="text-[#490AC6] font-semibold mt-3 text-sm md:text-base"
            onClick={() => setShowMore(!showMore)}
            aria-label={showMore ? "Réduire le texte" : "Afficher plus de détails"}
          >
            {showMore ? "Voir moins" : "Voir plus"}
          </button>
        </div>

        {/* Liste des fonctionnalités */}
        <div className="space-y-4">
          {featureList.map((item) => (
            <div className="flex items-center space-x-3" key={item.title}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25026B] text-white rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Bouton Télécharger */}
          <div className="mt-4 md:mt-6">
            <button
              className="bg-[#25026B] text-white py-2 px-4 md:py-3 md:px-6 rounded-md w-full md:w-auto text-sm md:text-base"
              onClick={handleDownload}
            >
              Télécharger le programme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
