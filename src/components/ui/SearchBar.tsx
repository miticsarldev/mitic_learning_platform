import React from "react";

import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border rounded-md overflow-hidden bg-white shadow-md">
      <input
        type="text"
        placeholder="Recherche de cours"
        className="flex-1 px-4 py-2 text-sm outline-none"
      />
      <button className="p-2  bg-[#25026B] rounded-md text-white">
        <Search className="flex items-center h-4 w-4 font-bold"/>
      </button>
    </div>
  );
};
