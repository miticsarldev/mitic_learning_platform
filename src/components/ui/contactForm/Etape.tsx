import React from 'react';

interface EtapeProps {
    numero: number;
    texte: string;
}

const Etape: React.FC<EtapeProps> = ({ numero, texte }) => (
    <div className="flex items-start space-x-2">
        <div className="flex items-center justify-center w-8 h-8 text-white bg-[#1A013F] rounded-full font-bold">
            {numero}
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-gray-700">
            {texte}
        </div>
    </div>
);

export default Etape;
