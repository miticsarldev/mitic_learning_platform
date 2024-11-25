import React from "react";

interface FormationCardProps {
  icon: string;
  title: string;
  description: string;
  age: string;
}

const FormationCard: React.FC<FormationCardProps> = ({ icon, title, description, age }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative hover:scale-105 transition-transform duration-300">
      {/* Icône du cours */}
      <div className="absolute -top-6 left-4 bg-white rounded-full p-2 shadow-md">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>

      {/* Contenu principal */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-[#1A013F] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {/* Label âge */}
        <div className="absolute top-4 right-4 bg-[#5803BF] text-white text-xs py-1 px-3 rounded-full">
          À partir de {age}
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
