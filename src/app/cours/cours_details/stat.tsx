import React from "react";

const Stats = () => {
  const stats = [
    { value: "24+", label: "Heures de cours" },
    { value: "18+", label: "Affectations totales" },
    { value: "20+", label: "Leçons vidéo" },
    { value: "4,312+", label: "Étudiants inscrits" },
  ];

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex justify-around text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl font-bold text-[#25026B] ">{stat.value}</span>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
