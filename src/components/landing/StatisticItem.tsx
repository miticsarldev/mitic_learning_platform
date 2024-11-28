import * as React from 'react';
import { StatisticItemProps } from './types';

export const StatisticItem: React.FC<StatisticItemProps> = ({ value, label, suffix }) => {
  return (
    <div className="flex flex-col items-center text-gray-700 min-w-[240px]">
      <div className="text-8xl leading-none max-md:text-4xl">
        {value}{suffix && <span>{suffix}</span>}
      </div>
      <div className="text-3xl leading-tight">{label}</div>
    </div>
  );
};