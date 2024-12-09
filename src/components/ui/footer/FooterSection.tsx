import React from "react";
import TitrePrincipal from "./TitrePrincipal";
import ColonneLiens from "./ColonneLiens";
import Contact from "./Contact";

const FooterSection: React.FC = () => (
  <footer className="bg-[#1A013F] py-10">
    <div className="max-w-6xl mx-auto">
      {/* Titre et réseaux sociaux */}
      <TitrePrincipal />
      {/* Grille principale */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-white">
        {/* Colonne 1 */}
        <ColonneLiens
          titre="POUR LES PARENTS"
          liens={[
            { label: "Blogue", url: "#" },
            { label: "Prix", url: "#" },
            { label: "Accord offre", url: "#" },
            { label: "politique de confidentialité", url: "#" },
          ]}
        />

        {/* Colonne 2 */}
        <ColonneLiens
          titre="À PROPOS DE NOUS"
          liens={[
            { label: "Avis", url: "#" },
            { label: "Notre équipe", url: "#" },
            { label: "Partenaires", url: "#" },
            { label: "Postes vacants", url: "#" },
          ]}
        />

        {/* Colonne 3 */}
        <ColonneLiens
          titre="INSTRUCTIONS"
          liens={[
            { label: "Programmation", url: "#" },
            { label: "Conception et créativité", url: "#" },
            { label: "Matières scolaires", url: "#" },
            { label: "Langues étrangères", url: "#" },
            { label: "Programmes de développement", url: "#" },
          ]}
        />

        {/* Colonne 4 */}
        <Contact />
      </div>

      {/* Informations légales */}
      <div className="mt-8 text-center text-gray-400">
        ITGENIO LP | SL035285 <br />5 South Charlotte Street, Edinburgh,
        Scotland, EH2 4AN
      </div>
    </div>
  </footer>
);

export default FooterSection;
