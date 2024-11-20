import React from "react";

type FilterDropdownProps = {
  options: string[];
  onSelect: (option: string) => void;
};

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  onSelect,
}) => {
  return (
    <select
      className="px-4 py-2 border bg-white rounded-md text-sm outline-none shadow-sm"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
