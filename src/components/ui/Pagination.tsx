import React, { useState } from "react";

type PaginationProps = {
  totalPages: number;
};

import { ChevronRight, ChevronLeft } from "lucide-react";

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      {/* Bouton Précédent */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-2 py-1 border rounded ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="w-5 h-5"/>
      </button>

      {/* Numéros de pages */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-2  border rounded ${
              currentPage === page
                ? "bg-[#25026B] text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Bouton Suivant */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 border rounded ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        <ChevronRight className="w-5 h-5"/>
      </button>
    </div>
  );
};
