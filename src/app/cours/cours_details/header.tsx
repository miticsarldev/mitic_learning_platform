import { Button } from "@/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#490AC6] text-white p-6 min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Conteneur Texte */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">
            Master UX & Web Design : Stratégie, Design, Développement
          </h1>
          <p className="text-lg">
            Learn how to apply User Experience (UX) principles to your website
            designs, code a variety of sites, and increase sales!
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">4.5</span>
              <span className="text-sm">(2,540 Avis)</span>
            </div>
            <span className="text-sm">
              • Publié par <strong>Franck Salvatore</strong>
            </span>
          </div>
          {/* Bouton Acheter Maintenant */}
          <Button
            variant="default"
            className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-6 py-2 rounded"
          >
            Acheter Maintenant
          </Button>
        </div>

        {/* Conteneur Image avec Overlay */}
        <div className="md:w-1/2 mt-6 md:mt-0 relative flex justify-center">
          <div className="w-2/3">
            {" "}
            {/* Réduction de la largeur de la vidéo à 50% du conteneur parent */}
            <img
              src="https://via.placeholder.com/400x250"
              alt="Voir demo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/70 text-[#25026B] font-bold py-2 px-4 rounded-lg shadow-md hover:bg-white">
                Voir demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
