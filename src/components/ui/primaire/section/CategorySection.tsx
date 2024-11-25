import React from "react";
import FormationCard from "../components/FormationCard";

interface CategorySectionProps {
  title: string;
  courses: {
    icon: string;
    title: string;
    description: string;
    age: string;
  }[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, courses }) => {
  return (
    <div className="bg-[#1A013F] text-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="bg-[#29015D] text-white py-2 px-4 rounded-full text-sm hover:bg-[#3a027c] transition">
          Tous les cours
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <FormationCard
            key={index}
            icon={course.icon}
            title={course.title}
            description={course.description}
            age={course.age}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
