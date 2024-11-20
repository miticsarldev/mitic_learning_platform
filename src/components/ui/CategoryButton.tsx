import React from "react";

type CategoryButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold ${
        isActive
          ? "bg-[#25026B] text-white"
          : "bg-white text-[#25026B] hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
