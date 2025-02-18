import React from "react";

type StatItem = {
  value: number | string; // Accepte des nombres et des chaînes de caractères
  label: string;
};

type StatsProps = {
  data: StatItem[];
};

const Stats: React.FC<StatsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Aucune statistique disponible.</p>;
  }

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex justify-around text-center">
        {data.map(({ value, label }, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-2xl font-bold text-[#25026B]">{value}</span>
            <span className="text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
