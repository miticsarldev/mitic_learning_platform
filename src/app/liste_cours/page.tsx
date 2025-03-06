//src/app/liste_cours/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { CourseFilterZone } from "@/components/CourseFilterZone";
import { CourseCard } from "@/components/ui/CourseCard";
import FilterPopup from "@/components/ui/FilterPopup";
import { Pagination } from "@/components/ui/Pagination";
import { PaintBucket, MonitorDot, Database, Briefcase } from "lucide-react";
import { CategoryCard } from "@/components/ui/CategoryCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Navbar from "@/components/navbar";
import { CourseDetails,  Testimonial } from "../types";
import { fetchCourses } from "../services/courseService";
import { CourseFilterZoneTest } from "@/components/CourseFilterZoneTest";

// Définir le type de la réponse de l'API

export default function ListeCours() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [courses, setCourses] = useState<CourseDetails[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseDetails[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [paginatedCourses, setPaginatedCourses] = useState<CourseDetails[]>([]);

  const categories = [
    { icon: <PaintBucket size={24} />, title: "Design", description: "Lorem ipsum dolor sit amet." },
    { icon: <MonitorDot size={24} />, title: "Developement", description: "Lorem ipsum dolor sit amet." },
    { icon: <Database size={24} />, title: "Data Science", description: "Lorem ipsum dolor sit amet." },
    { icon: <Briefcase size={24} />, title: "Business", description: "Lorem ipsum dolor sit amet." },
  ];

  const testimonials: Testimonial[] = [
    { name: "Salimata Sanogo", email: "sali.hill@example.com", description: "Lorem ipsum dolor sit amet.", avatar: "/images/Capture.png" },
  ];

  useEffect(() => {
    const getCourses = async () => {
      try {
        // fetchCourses retourne directement un tableau de CourseDetails[]
        const responses = await fetchCourses();

        // Tu affectes simplement le tableau directement
        setCourses(responses);

        // Définir filteredCourses uniquement après un premier rendu ou filtre
        setFilteredCourses(responses);

        // Paginer les résultats, ici je suppose que responses est un tableau
        setPaginatedCourses(responses.slice(0, 6));
      } catch {
        setError("Une erreur est survenue");
      }
    };

    getCourses();
  }, []);


  // Éviter de filtrer immédiatement
  useEffect(() => {
    setFilteredCourses(courses);  // Appliquer un filtrage seulement après que l'utilisateur interagit
  }, [courses]);

  if (error) return (
    <div>
      <p>Une erreur s'est produite : {error}</p>
      <button onClick={() => setError(null)}>Réessayer</button>
    </div>
  );


  return (
    <>
      <Navbar />
      <CourseFilterZone courses={courses} setFilteredCourses={setFilteredCourses} />
      <div className="grid min-h-screen lg:grid-cols-3 gap-6 mt-5">
        <div className="hidden lg:block lg:col-span-1 p-6">
          <CourseFilterZoneTest courses={courses} setFilteredCourses={setFilteredCourses} />
        </div>
        <div className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Métiers ({filteredCourses.length})
            </h2>
            <button onClick={() => setIsFilterOpen(true)} className="lg:hidden bg-[#25026B] text-white px-4 py-2 rounded-lg" aria-label="Ouvrir le filtre">
              Filtrer
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center place-items-center">
            {paginatedCourses.map((card) => (
              <CourseCard key={card._id} {...card} />
            ))}
          </div>
          <Pagination courses={filteredCourses} setCourses={setPaginatedCourses} />
        </div>
        <FilterPopup isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} courses={courses} setFilteredCourses={setFilteredCourses} />
      </div>
      <section className="py-7">
        <h2 className="text-2xl font-bold text-[#25026B] text-center mb-6">
          Faites un choix parmi le top de nos métiers !
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((card, index) => (
            <CategoryCard key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </section>
      <section className="py-10 bg-[#F4E9FF]">
        <div className="flex justify-evenly gap-10">
          <h2 className="text-2xl font-bold text-[#25026B] mb-6 text-start">
            Recommandé pour vous
          </h2>
          <p className="text-[#25026B] cursor-pointer hover:underline">Voir tout</p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {filteredCourses.slice(0, 3).map((card, index) => (
            <CourseCard key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="py-12 px-6 bg-[#F4E9FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#25026B] mb-8 text-start">
            Ce que nos étudiants ont à dire
          </h2>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}
