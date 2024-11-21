import React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const CategoryCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
      <div className="bg-[#25026B] text-white p-4 rounded-md inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
