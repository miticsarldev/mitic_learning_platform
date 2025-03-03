import * as React from 'react';
import { StatisticItem } from './StatisticItem';
import { StatisticsProps } from './types';

export const Statistics: React.FC<StatisticsProps> = ({ title, description, statistics }) => {
  return (
    <section
      className="flex flex-col items-center w-full mt-4 mb-4 px-4"
      aria-labelledby="statistics-title"
    >
      <div className="flex flex-col items-center text-center w-full max-w-4xl mt-8">
        <h2 className="text-3xl font-bold text-[#1A013F] mb-4">{title}</h2>
        <p className="mt-2 text-lg md:text-2xl leading-8 md:leading-10 text-slate-950 text-opacity-80">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-6 w-full">
        {statistics.map((stat, index) => (
          <StatisticItem key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
        ))}
      </div>
    </section>

  );
};