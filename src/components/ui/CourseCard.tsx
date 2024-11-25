import React from "react";

type CardProps = {
  image: string;
  category: string;
  duration: string;
  title: string;
  description: string;
  price: string;
  author: string;
};

import { Timer, CircleUserRound, Computer } from "lucide-react";

export const CourseCard: React.FC<CardProps> = ({
  image,
  category,
  duration,
  title,
  description,
  price,
  author,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute top-2 right-2 flex space-x-1">
          {/* Étoiles */}
          {[...Array(3)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">★</span>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Catégorie et Durée */}
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center space-x-1">
            <Computer className="w-4 h-4"/>
            <span>{category}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Timer className="w-4 h-4"/>
            <span>{duration}</span>
          </span>
        </div>

        {/* Titre */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 my-2">{description}</p>

        {/* Auteur et Prix */}
        <div className="flex justify-between items-center text-gray-700 mt-4">
          <span className="flex items-center space-x-2">
            <CircleUserRound className="w-5 h-5"/>
            <span>{author}</span>
          </span>
          <span className="text-[#25026B] font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};
