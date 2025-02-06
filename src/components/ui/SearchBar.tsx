import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Gérer le changement de texte dans l'input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Appeler la fonction de recherche avec le terme actuel
  };

  // Gérer la recherche lorsqu'on clique sur le bouton
  const handleSearchClick = () => {
    onSearch(searchTerm); // Appeler la fonction de recherche
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden bg-white shadow-md">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Recherche de cours"
        className="flex-1 px-4 py-2 text-sm outline-none"
      />
      <button
        onClick={handleSearchClick}
        className="p-2 bg-[#25026B] rounded-md text-white"
      >
        <Search className="flex items-center h-4 w-4 font-bold" />
      </button>
    </div>
  );
};
