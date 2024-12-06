import * as React from 'react';
import { Statistics } from './Statistics';

export const StatisticsContainer: React.FC = () => {
  const statisticsData = {
    title: "Nos Chiffres",
    description: "Découvrez quelques chiffres impressionnants qui illustrent le succès et l'impact de notre plateforme",
    statistics: [
      { value: "15K+", label: "Apprenant" },
      { value: "75", label: "Succès total", suffix: "%" },
      { value: "35", label: "Questions principales" },
      { value: "26", label: "Chief experts" },
      { value: "16", label: "Years of experience" }
    ]
  };

  return <Statistics {...statisticsData} />;
};