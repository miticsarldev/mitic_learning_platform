"use client";

import { CourseFilterZone } from "@/components/CourseFilterZone";
import { FilterZone } from "@/components/FilterZone";
import { CourseCard } from "@/components/ui/CourseCard";
import FilterPopup from "@/components/ui/FilterPopup";
import { Pagination } from "@/components/ui/Pagination";
import { useState } from "react";

export default function ListeCours() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const courses = [
        {
            image: "/images/course_card_image.jpg",
            category: "Développement",
            duration: "3 Mois",
            title: "AWS Certified solutions Architect",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            price: "7000 FCFA",
            author: "Isac Traore",
        },
        {
            image: "/images/course_card_image.jpg",
            category: "Développement",
            duration: "3 Mois",
            title: "AWS Certified solutions Architect",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            price: "7000 FCFA",
            author: "Isac Traore",
        },
        {
            image: "/images/course_card_image.jpg",
            category: "Développement",
            duration: "3 Mois",
            title: "AWS Certified solutions Architect",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            price: "7000 FCFA",
            author: "Isac Traore",
        },
    ];

    return (
        <>
            <CourseFilterZone />
            <div className="grid min-h-screen lg:grid-cols-3 gap-6 mt-5">
                {/* Zone de filtre - visible uniquement sur écrans larges */}
                <div className="hidden lg:block lg:col-span-1 p-6">
                    <FilterZone />
                </div>

                {/* Section des cours */}
                <div className="lg:col-span-2 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Métiers ({courses.length})</h2>
                        {/* Bouton Filtre pour écrans petits */}
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Filtrer
                        </button>
                    </div>

                    {/* Grille des cartes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((card, index) => (
                            <CourseCard key={index} {...card} />
                        ))}
                    </div>

                    <Pagination totalPages={5} />
                </div>

                {/* Popup pour le filtre */}
                <FilterPopup isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            </div>

        </>
    );
}
