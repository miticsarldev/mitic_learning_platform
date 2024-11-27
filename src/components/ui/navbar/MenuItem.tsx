import React from 'react';

interface MenuItemProps {
    label: string;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="text-white text-sm font-medium hover:text-gray-300 transition"
    >
        {label}
    </button>
);

export default MenuItem;
