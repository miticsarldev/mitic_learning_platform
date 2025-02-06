import React from "react";

type StatsProps = {
  data: any[]; // Utilisation de 'any' pour accepter n'importe quel type d'objet dans le tableau
};

const Stats: React.FC<StatsProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex justify-around text-center">
        {data.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl font-bold text-[#25026B]">{stat.value}</span>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
