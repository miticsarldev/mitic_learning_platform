import { Button } from "@/components/ui/button";
import React from "react";

const SecondaryNavBar = () => {
  return (
    <div className="border-b border-gray-200 py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Centrer tout et gérer le responsive */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Liens de navigation */}
          <a href="#apropos" className="text-sm sm:text-base text-purple-700 font-semibold border-b-2 border-purple-700">
            À propos
          </a>
          <a href="#contenu" className="text-sm sm:text-base text-gray-500 hover:text-purple-700">
            Contenu
          </a>
          <a href="#professeur" className="text-sm sm:text-base text-gray-500 hover:text-purple-700">
            Professeur
          </a>
          <a href="#commentaires" className="text-sm sm:text-base text-gray-500 hover:text-purple-700">
            Commentaires
          </a>
          <a href="#faqs" className="text-sm sm:text-base text-gray-500 hover:text-purple-700">
            FAQs
          </a>

          {/* Boutons avec gestion mobile */}
          <div className="flex space-x-2 sm:space-x-4">
            <Button
              variant="default"
              className="border border-[#25026B] bg-white text-[#25026B] px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-purple-100 text-sm sm:text-base"
            >
              Voir démo
            </Button>
            <Button
              variant="default"
              className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md text-sm sm:text-base"
            >
              Acheter Maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;