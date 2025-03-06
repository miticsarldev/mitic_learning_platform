import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryButton } from "./ui/CategoryButton";
import { SearchBar } from "./ui/SearchBar";
import { FilterDropdown } from "./ui/FilterDropdown";
import { CourseDetails } from "@/app/types";



interface Category {
  _id: string;
  name: string;
  description: string;
}

interface CourseFilterZoneProps {
  courses: CourseDetails[];
  setFilteredCourses: (courses: CourseDetails[]) => void;
}

export const CourseFilterZone: React.FC<CourseFilterZoneProps> = ({
  courses,
  setFilteredCourses,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // Charger les catégories depuis la BDD
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4444/api/category");
        const dbCategories: Category[] = response.data;
        setCategories([{ _id: "Tous", name: "Tous", description: "" }, ...dbCategories]);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Appliquer les filtres
  useEffect(() => {
    let filteredCourses = courses;

    // Filtrer par catégorie
    if (activeCategory !== "Tous") {
      filteredCourses = filteredCourses.filter(
        (course) => course.category_id?._id === activeCategory
      );
    }

    // Filtrer par recherche
    if (searchQuery.trim()) {
      filteredCourses = filteredCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Trier les cours en fonction du filtre sélectionné
    if (selectedFilter === "nouveaute") {
      filteredCourses = [...filteredCourses].sort(
        (a, b) => b._id.localeCompare(a._id) // Tri par ordre décroissant des IDs
      );
    } else if (selectedFilter === "Popularité") {
      // Ajouter la logique de popularité ici si applicable
    } else if (selectedFilter === "Date") {
      filteredCourses = [...filteredCourses].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }


    // Mettre à jour la liste filtrée
    setFilteredCourses(filteredCourses);
    console.log(filteredCourses);

  }, [activeCategory, searchQuery, selectedFilter, courses, setFilteredCourses]);

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
              key={category._id}
              label={category.name}
              isActive={activeCategory === category._id}
              onClick={() => setActiveCategory(category._id)}
            />
          ))}
        </div>

        {/* Barre de recherche */}
        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch">
          <SearchBar onSearch={(query) => setSearchQuery(query)} />
          <FilterDropdown
            options={["nouveaute", "Popularité", "Date"]}
            onSelect={(filter) => setSelectedFilter(filter)}
          />
        </div>

      </div>
    </div>
  );
};
