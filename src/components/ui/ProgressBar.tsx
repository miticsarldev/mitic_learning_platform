import React from "react";

interface ProgressBarProps {
    progress: number; // Pourcentage d'avancement (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
