"use client";

import React, { useEffect, useState } from "react";
import { CourseFilterZone } from "@/components/CourseFilterZone";
import { FilterZone } from "@/components/FilterZone";
import { CourseCard } from "@/components/ui/CourseCard";
import FilterPopup from "@/components/ui/FilterPopup";
import { Pagination } from "@/components/ui/Pagination";
import { PaintBucket, MonitorDot, Database, Briefcase } from "lucide-react";
import { CategoryCard } from "@/components/ui/CategoryCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Navbar from "@/components/navbar";
import { ICourse } from "../types";
import { fetchCourses } from "../services/courseService";

type Testimonial = {
  name: string;
  email: string;
  description: string;
  avatar: string;
};

export default function ListeCours() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [courses, setCourses] = useState<ICourse[]>([]); // Toutes les cours
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]); // Cours filtrés
  const [error, setError] = useState<string | null>(null);

  const categories = [
    {
      icon: <PaintBucket size={24} />,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: <MonitorDot size={24} />,
      title: "Developement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: <Database size={24} />,
      title: "Data Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Salimata Sanogo",
      email: "sali.hill@example.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      avatar: "/images/Capture d’écran 2024-11-21 162903.png",
    },
  ];

  // Fetch initial data
  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data?.data);
        setFilteredCourses(data?.data); // Initialement, tous les cours sont affichés
      } catch (err: any) {
        setError(err.message);
      }
    };

    getCourses();
  }, []);

  if (error) return <p>une erreur c'est produite {error}</p>

  return (
    <>
      <Navbar />
      <CourseFilterZone
        courses={courses} // Liste complète des cours
        setFilteredCourses={setFilteredCourses} // Met à jour uniquement les cours filtrés
      />
      <div className="grid min-h-screen lg:grid-cols-3 gap-6 mt-5">
        {/* Zone de filtre - visible uniquement sur écrans larges */}
        <div className="hidden lg:block lg:col-span-1 p-6">
          <FilterZone
            courses={courses}
            setFilteredCourses={setFilteredCourses}
          />
        </div>

        {/* Section des cours */}
        <div className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Métiers ({filteredCourses.length})
            </h2>
            {/* Bouton Filtre pour écrans petits */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden bg-[#25026B] text-white px-4 py-2 rounded-lg"
            >
              Filtrer
            </button>
          </div>

          {/* Grille des cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center place-items-center">
            {filteredCourses.map((card, index) => (
              <CourseCard key={index} {...card} />
            ))}
          </div>


          <Pagination totalPages={5} />
        </div>

        {/* Popup pour le filtre */}
        <FilterPopup
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </div>

      <section className="py-7">
        <h2 className="text-2xl font-bold text-[#25026B] text-center mb-6">
          Faites un choix parmi le top de nos métiers !
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((card, index) => (
            <CategoryCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="py-10 bg-[#F4E9FF]">
        <div className="flex justify-evenly gap-10">
          <h2 className="text-2xl font-bold text-[#25026B] mb-6 text-start">
            Recommandé pour vous
          </h2>
          <p className="text-[#25026B] cursor-pointer hover:underline">
            Voir tout
          </p>
        </div>
        <div className="">
          <div className="flex justify-center gap-10 flex-wrap">
            {filteredCourses.slice(0, 3).map((card, index) => (
              <CourseCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6 bg-[#F4E9FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#25026B] mb-8 text-start">
            Ce que nos étudiants ont à dire
          </h2>
          <div>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
