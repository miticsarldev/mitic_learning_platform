import * as React from 'react';
import { StatisticItem } from './StatisticItem';
import { StatisticsProps } from './types';

export const Statistics: React.FC<StatisticsProps> = ({ title, description, statistics }) => {
  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full mt-4 mb-4" aria-labelledby="statistics-title">
      <div className="flex flex-col items-center max-w-full text-center w-[839px] mt-8">
        <h2 className="text-3xl font-bold text-[#1A013F] mb-8">{title}</h2>
        <p className="mt-4 text-2xl leading-10 text-slate-950 text-opacity-80 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-start justify-center mb-8 mt-8 w-full h-[133px] max-md:max-w-full">
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
};