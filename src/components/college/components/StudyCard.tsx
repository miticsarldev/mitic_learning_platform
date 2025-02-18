import React from "react";
import Image from "next/image";

interface StudyCardProps {
    title: string;
    description: string;
    image: string;
}

const StudyCard: React.FC<StudyCardProps> = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
            {/* Image optimisée avec next/image */}
            <div className="w-24 h-24 relative mb-4">
                <Image
                    src={image || "/fallback-image.png"} // Fallback en cas d'erreur
                    alt={title}
                    layout="fill" // Permet de s'adapter au conteneur
                    objectFit="contain" // Garde l'image bien proportionnée
                    priority // Charge l'image plus rapidement si nécessaire
                />
            </div>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-[#1A013F] mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{description}</p>

            {/* Bouton */}
            <button className="bg-[#29015D] text-white py-2 px-4 rounded-md hover:bg-[#3A1A75] transition">
                En savoir plus
            </button>
        </div>
    );
};

export default StudyCard;
