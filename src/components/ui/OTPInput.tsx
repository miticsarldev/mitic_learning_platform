import React from "react";

interface OTPInputProps {
    id: string;
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({ id, value, onChange, autoFocus }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 1 && /^[0-9a-zA-Z]*$/.test(inputValue)) {
            onChange(inputValue);
        }
    };

    return (
        <input
            id={id}
            type="text"
            value={value}
            onChange={handleChange}
            maxLength={1}
            autoFocus={autoFocus}
            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25026B] focus:border-[#25026B]"
        />
    );
};
