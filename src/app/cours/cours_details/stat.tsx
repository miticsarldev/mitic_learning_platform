import React from "react";

type StatItem = {
  id: number;
  value: number | string;
  label: string;
};

type StatsProps = {
  data?: StatItem[];
};

const Stats: React.FC<StatsProps> = ({ data = [] }) => {
  if (!data.length) {
    return <p className="text-center text-gray-500">Aucune statistique disponible.</p>;
  }

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex justify-around text-center">
        {data.map((stat) => (
          <div key={stat.id} className="flex flex-col">
            <span className="text-2xl font-bold text-[#25026B]">{stat.value}</span>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Stats;
