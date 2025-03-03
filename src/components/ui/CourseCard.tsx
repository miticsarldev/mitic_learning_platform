
import React from "react";
import { Timer, CircleUserRound, Computer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  _id: string;
  title: string;
  description?: string;
  path_image?: string;
  path_video?: string;
  price?: number;
  isCertified?: boolean;
  duration?: string;
  status?: boolean;
  created_by?: {
    firstname: string;
    lastname: string;
  };
  studyLevel_id?: {
    name: string;
  };
  job_id?: {
    name: string;
  };
  category_id?: {
    name: string;
  };
};

export const CourseCard: React.FC<CardProps> = ({
  _id,
  path_image,
  category_id,
  duration,
  title,
  description,
  price,
  created_by,
}) => {
  return (
    <Link
      href={`/cours/cours_details/${_id}`}
      className="bg-white shadow-md rounded-lg overflow-hidden w-72"
    >
      {/* Image */}
      <div className="relative">
        <div className="relative w-full h-40">
          <Image
            src={path_image || "/placeholder-image.jpg"}
            alt={title}
            className="object-cover"
            fill
          />
        </div>

        <div className="absolute top-2 right-2 flex space-x-1">
          {/* Étoiles */}
          {[...Array(3)].map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Catégorie et Durée */}
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center space-x-1">
            <Computer className="w-4 h-4" />
            <span>{category_id?.name || "Non spécifié"}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Timer className="w-4 h-4" />
            <span>{duration || "Indisponible"} h</span>
          </span>
        </div>

        {/* Titre */}
        <Link href={`/cours/${title}`} className="text-lg font-semibold text-gray-900">
          {title}
        </Link>

        {/* Description avec hauteur fixe */}
        <p className="text-sm text-gray-600 my-2 h-20 overflow-hidden line-clamp-4">
          {description || "Aucune description disponible."}
        </p>

        {/* Auteur et Prix */}
        <div className="flex justify-between items-center text-gray-700 mt-4">
          <span className="flex items-center space-x-2">
            <CircleUserRound className="w-5 h-5" />
            <span>
              {created_by
                ? `${created_by.firstname} ${created_by.lastname}`
                : "Auteur inconnu"}
            </span>
          </span>
          <span className="text-[#25026B] font-bold">
            {price !== undefined ? `${price} FCFA` : "Gratuit"}
          </span>
        </div>
      </div>
    </Link>
  );
};