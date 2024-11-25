import React, { useState } from "react";
import { CategoryButton } from "./ui/CategoryButton";
import { SearchBar } from "./ui/SearchBar";
import { FilterDropdown } from "./ui/FilterDropdown";


export const CourseFilterZone: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const categories = [
    "Tous",
    "Programmation",
    "Littérature",
    "Design",
    "Comptabilité",
    "Conceptions",
    "Analyse de données",
    "Anglais",
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleFilterSelect = (filter: string) => {
    console.log("Filtré par:", filter);
  };

  return (
    <div
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/liste_cour.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Boutons de catégorie */}
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>

        {/* Barre de recherche */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <FilterDropdown
            options={["nouveaute", "Popularité", "Date"]}
            onSelect={handleFilterSelect}
          />
        </div>
      </div>
    </div>
  );
};
