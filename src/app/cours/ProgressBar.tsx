import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative bg-gray-200 h-4 w-full rounded-full">
      <div
        className="bg-[#25026B] h-full"
        style={{
          width: `${progress}%`, // Progrès dynamique en pourcentage
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
