import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryNavBar = () => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-6">
        {/* Centrer tout horizontalement */}
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {/* Liens de navigation */}
          <a href="#apropos" className="text-purple-700 font-semibold border-b-2 border-purple-700">
            À propos
          </a>
          <a href="#contenu" className="text-gray-500 hover:text-purple-700">
            Contenu
          </a>
          <a href="#professeur" className="text-gray-500 hover:text-purple-700">
            Professeur
          </a>
          <a href="#commentaires" className="text-gray-500 hover:text-purple-700">
            Commentaires
          </a>
          <a href="#faqs" className="text-gray-500 hover:text-purple-700">
            FAQs
          </a>
          {/* Boutons */}
          <Button
            variant="default"
            className="border border-[#25026B] bg-white text-[#25026B] px-6 py-2 rounded-md hover:bg-purple-100"
          >
            Voir démo
          </Button>
          <Button
            variant="default"
            className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-6 py-2 rounded-md"
          >
            Acheter Maintenant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
