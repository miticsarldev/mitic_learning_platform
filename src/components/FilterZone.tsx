import React, { useEffect, useState } from "react";
import { CheckboxGroup } from "./ui/CheckboxGroup";
import { RangeSlider } from "./ui/RangeSlider";
import { ICourse } from "@/app/types";

interface FilterZoneProps {
  courses: ICourse[];
  setFilteredCourses: (courses: ICourse[]) => void;
}

export const FilterZone: React.FC<FilterZoneProps> = ({
  courses,
  setFilteredCourses,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const maxDuration = Math.max(...courses.map((course) => Number(course.duration) || 0), 6);
  const [duration, setDuration] = useState<number>(maxDuration); // Valeur max par défaut

  const [isFirstRender, setIsFirstRender] = useState(true); // Etat pour vérifier si c'est le premier rendu

  const handleCheckboxChange = (selectedList: string[], value: string) => {
    return selectedList.includes(value)
      ? selectedList.filter((item) => item !== value)
      : [...selectedList, value];
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false); // Première exécution terminée, on change l'état
      return;
    }

    let filteredCourses = [...courses];

    // Vérifie si un filtre est actif
    const isFilterActive =
      selectedGenre.length > 0 ||
      selectedType.length > 0 ||
      selectedDifficulty.length > 0 ||
      duration < maxDuration;

    if (!isFilterActive) {
      setFilteredCourses(courses); // Aucun filtre actif → afficher tous les cours
      return;
    }

    // 🔹 Filtrer par genre (gratuite/payante)
    if (selectedGenre.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        (course?.price > 0 && selectedGenre.includes("payante")) ||
        (course?.price <= 0 && selectedGenre.includes("gratuite"))
      );
    }
    

    // 🔹 Filtrer par type de formation
    if (selectedType.length > 0) {
      filteredCourses = filteredCourses.filter(
        (course) => course.category_id?.name && selectedType.includes(course.category_id.name)
      );
    }

    // 🔹 Filtrer par niveau de difficulté
    if (selectedDifficulty.length > 0) {
      filteredCourses = filteredCourses.filter(
        (course) => course.studyLevel_id?.name && selectedDifficulty.includes(course.studyLevel_id.name)
      );
    }

    // 🔹 Filtrer par durée
    filteredCourses = filteredCourses.filter(
      (course) => Number(course.duration) <= duration
    );

    setFilteredCourses(filteredCourses);
  }, [selectedGenre, selectedType, selectedDifficulty, duration, courses, setFilteredCourses, isFirstRender]);

  return (
    <div className="p-6 space-y-8">
      <CheckboxGroup
        title="Genre de formation"
        options={[{ label: "Formation payante", value: "payante" }, { label: "Formation gratuite", value: "gratuite" }]}
        selectedOptions={selectedGenre}
        onChange={(value) => setSelectedGenre(handleCheckboxChange(selectedGenre, value))}
      />

      <div>
        <h3 className="font-semibold text-lg">Durée de formation (en heure)</h3>
        <RangeSlider
          min={1}
          max={maxDuration}
          value={duration}
          onChange={(value) => setDuration(value)}
        />
      </div>

      <CheckboxGroup
        title="Type de formation"
        options={[
          { label: "Informatique", value: "Informatique" },
          { label: "Droits", value: "Droits" },
        ]}
        selectedOptions={selectedType}
        onChange={(value) => setSelectedType(handleCheckboxChange(selectedType, value))}
      />

      <CheckboxGroup
        title="Niveau de difficulté"
        options={[{ label: "Avancé", value: "avancee" }]}
        selectedOptions={selectedDifficulty}
        onChange={(value) => setSelectedDifficulty(handleCheckboxChange(selectedDifficulty, value))}
      />
    </div>
  );
};
