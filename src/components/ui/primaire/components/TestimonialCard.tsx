import React from "react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  title: string;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, title, feedback }) => {
  return (
    <div className="bg-[#F6FBFF] rounded-xl p-6 shadow-lg flex items-center gap-6">
      {/* Image de profil */}
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full border-2 border-white shadow-md"
      />
      {/* Détails de l'avis */}
      <div>
        <h3 className="text-lg font-bold text-[#1A013F]">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{title}</p>
        <p className="text-sm text-gray-800 leading-relaxed">{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
