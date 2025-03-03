import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  description: string;
  price: number;
  path_image: string;
}

interface ConfirmationModalProps {
  course: Course;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ course, onClose, onConfirm }) => {
  const { title = "Titre du Cours", description = "Description non disponible", price = 0, path_image } = course || {};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-blue-100 p-8 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 transform scale-105 transition-all">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Résumé</h2>

        {/* Section Info du cours */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="relative w-24 h-24">
            <Image
              src={path_image || "https://via.placeholder.com/100"}
              alt={title}
              layout="fill"
              objectFit="cover"
              fill
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-medium text-gray-800">{title}</h3>
            <p className="text-gray-500 text-sm line-clamp-4">{description}</p>
            <p className="text-2xl font-bold text-gray-900">{price.toFixed(2)} FCFA</p>
          </div>
        </div>

        {/* Détails du paiement */}
        <div className="mt-6 border-t pt-4 text-gray-800">
          <div className="flex justify-between mb-3 text-lg">
            <span className="font-semibold">Sous-total</span>
            <span>{price.toFixed(2)} FCFA</span>
          </div>
          <div className="flex justify-between mb-3 text-lg">
            <span className="font-semibold">Réduction Coupon</span>
            <span>0 %</span>
          </div>
          <div className="flex justify-between mb-3 text-lg">
            <span className="font-semibold">TVA</span>
            <span>5%</span>
          </div>
          <div className="flex justify-between border-t pt-3 text-xl font-bold">
            <span>Total</span>
            <span>{(price * 1.05).toFixed(2)} FCFA</span>
          </div>
        </div>

        {/* Boutons Annuler & Valider */}
        <div className="flex justify-center gap-6 mt-6">
          <Button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md">
            Annuler
          </Button>
          <Button onClick={onConfirm} className="bg-[#25026B] hover:bg-[#25026ba2] text-white font-bold py-3 px-6 rounded-lg shadow-md">
            Valider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;