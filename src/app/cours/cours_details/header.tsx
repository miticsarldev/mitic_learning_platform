import { Button } from "@/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#490AC6] text-white p-8 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Conteneur Texte */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Master UX & Web Design : Stratégie, Design, Développement
          </h1>
          <p className="text-lg leading-relaxed">
            Apprenez à appliquer les principes de l&apos;UX à vos conceptions web,
            à coder divers sites, et à augmenter vos ventes grâce à des
            stratégies efficaces et innovantes !
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
            className="bg-[#25026B] hover:bg-[#25026B]/90 text-white px-8 py-3 rounded-lg"
          >
            Acheter Maintenant
          </Button>
        </div>

        {/* Conteneur Image avec Overlay */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
          <div className="w-2/3 lg:w-3/4">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Voir demo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/70 text-[#25026B] font-bold py-3 px-5 rounded-lg shadow-md hover:bg-white">
                Voir demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Espacement supplémentaire en bas */}
      <div className="mt-12"></div>
    </header>
  );
};

export default Header;

