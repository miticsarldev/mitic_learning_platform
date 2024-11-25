import React from 'react';

interface ColonneLiensProps {
    titre: string;
    liens: { label: string; url: string }[];
}

const ColonneLiens: React.FC<ColonneLiensProps> = ({ titre, liens }) => (
    <div>
        <h3 className="text-lg font-semibold text-white">{titre}</h3>
        <ul className="mt-2 space-y-1">
            {liens.map((lien, index) => (
                <li key={index}>
                    <a href={lien.url} className="text-gray-300 hover:text-white">
                        {lien.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default ColonneLiens;
