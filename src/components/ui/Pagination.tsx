
import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ICourse } from "@/app/types";

type PaginationProps = {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ courses, setCourses }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCourses = courses.slice(startIndex, startIndex + itemsPerPage);
    setCourses(paginatedCourses);
  }, [currentPage, courses]);

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

  const getPageNumbers = () => {
    const pages = [];
    const visiblePages = 2; // Nombre de pages visibles autour de la page actuelle

    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    pages.push(1);
    if (currentPage > visiblePages + 1) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage - visiblePages);
    const endPage = Math.min(totalPages - 1, currentPage + visiblePages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - visiblePages) {
      pages.push("...");
    }
    pages.push(totalPages);

    return pages;
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
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Numéros de pages avec gestion des "..." */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageClick(Number(page))}
            className={`px-3 py-1 border rounded ${
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
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};