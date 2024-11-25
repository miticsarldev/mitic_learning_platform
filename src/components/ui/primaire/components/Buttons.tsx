import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-[#5F36F8] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#4E29D9] transition"
        >
            {label}
        </button>
    );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 text-white text-lg font-medium hover:text-gray-200 transition"
        >
            <span className="w-10 h-10 rounded-full bg-white text-[#5F36F8] flex items-center justify-center">
                ▶
            </span>
            <span>{label}</span>
        </button>
    );
};
