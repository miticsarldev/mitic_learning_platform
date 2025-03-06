"use client";
import React, { useState } from "react";

type CheckboxGroupProps = {
  title: string;
  options: { label: string; value: string }[];
  selectedOptions: string[];
  onChange: (value: string) => void;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleOptions = showAll ? options : options.slice(0, 5); // Afficher 6 options max par défaut
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="p-2 space-y-2">
        {visibleOptions.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => onChange(option.value)}
              className="form-checkbox"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {options.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 text-sm mt-2"
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
};

