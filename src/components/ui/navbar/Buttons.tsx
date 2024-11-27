import React from 'react';

interface ButtonProps {
    label: string;
    variant?: 'default' | 'primary';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'default', onClick }) => {
    const baseStyle = "px-4 py-2 rounded-lg font-medium text-sm transition";
    const styles =
        variant === 'primary'
            ? `${baseStyle} bg-[#490AC6] text-white`
            : `${baseStyle} bg-white text-[#000] hover:bg-gray-100`;

    return (
        <button onClick={onClick} className={styles}>
            {label}
        </button>
    );
};

export default Button;
