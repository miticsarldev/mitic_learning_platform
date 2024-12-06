import * as React from 'react';
import { StatisticItemProps } from './types';

export const StatisticItem: React.FC<StatisticItemProps> = ({ value, label, suffix }) => {
  return (
    <div className="flex flex-col items-center text-gray-700 min-w-[180px]">
      <div className="text-6xl leading-none max-md:text-3xl">
        {value}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-xl leading-snug text-center">{label}</div>
    </div>
  );
};
