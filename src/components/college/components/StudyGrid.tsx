import React from "react";
import StudyCard from "./StudyCard";

interface StudyGridProps {
  domains: {
    title: string;
    description: string;
    image: string;
  }[];
}

const StudyGrid: React.FC<StudyGridProps> = ({ domains }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-[#29015D] p-10 rounded-md">
      {domains.map((domain, index) => (
        <StudyCard
          key={index}
          title={domain.title}
          description={domain.description}
          image={domain.image}
        />
      ))}
    </div>
  );
};

export default StudyGrid;
