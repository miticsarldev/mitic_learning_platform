import React from "react";

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
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => onChange(option.value)}
            className="form-checkbox"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
