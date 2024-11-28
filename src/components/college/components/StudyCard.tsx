import React from "react";

interface StudyCardProps {
    title: string;
    description: string;
    image: string;
}

const StudyCard: React.FC<StudyCardProps> = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-24 h-24 mb-4 object-contain"
            />

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
