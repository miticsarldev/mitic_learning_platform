import React, { useState } from "react";
import { CheckboxGroup } from "./ui/CheckboxGroup";
import { RangeSlider } from "./ui/RangeSlider";


export const FilterZone: React.FC = () => {
  // États pour gérer les sélections
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [duration, setDuration] = useState<number>(3);

  const handleCheckboxChange = (selectedList: string[], value: string) => {
    if (selectedList.includes(value)) {
      return selectedList.filter((item) => item !== value);
    }
    return [...selectedList, value];
  };

  return (
    <div className="p-6 space-y-8">
      {/* Genre de formation */}
      <CheckboxGroup
        title="Genre de formation"
        options={[
          { label: "Formation payante", value: "payante" },
          { label: "Formation gratuite", value: "gratuite" },
        ]}
        selectedOptions={selectedGenre}
        onChange={(value) =>
          setSelectedGenre(handleCheckboxChange(selectedGenre, value))
        }
      />

      {/* Durée de formation */}
      <div>
        <h3 className="font-semibold text-lg">Durée de formation</h3>
        <RangeSlider
          min={1}
          max={6}
          value={duration}
          onChange={(value) => setDuration(value)}
        />
      </div>

      {/* Type de formation */}
      <CheckboxGroup
        title="Type de formation"
        options={[
          { label: "Académique", value: "academique" },
          { label: "Professionnelle", value: "professionnelle" },
          { label: "Entreprise", value: "entreprise" },
        ]}
        selectedOptions={selectedType}
        onChange={(value) =>
          setSelectedType(handleCheckboxChange(selectedType, value))
        }
      />

      {/* Niveau de difficulté */}
      <CheckboxGroup
        title="Niveau de difficulté"
        options={[
          { label: "Débutant", value: "debutant" },
          { label: "Intermédiaire", value: "intermediaire" },
          { label: "Difficile", value: "difficile" },
        ]}
        selectedOptions={selectedDifficulty}
        onChange={(value) =>
          setSelectedDifficulty(handleCheckboxChange(selectedDifficulty, value))
        }
      />
    </div>
  );
};
