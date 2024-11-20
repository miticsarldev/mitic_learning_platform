import React from "react";

type RangeSliderProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{min} mois</span>
        <span>{max} mois</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#25026B]"
      />
    </div>
  );
};
