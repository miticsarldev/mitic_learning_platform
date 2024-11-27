import React from 'react';
import Etape from './Etape';

interface ListeEtapesProps {
    etapes: { numero: number; texte: string }[];
}

const ListeEtapes: React.FC<ListeEtapesProps> = ({ etapes }) => (
    <div className="space-y-4">
        {etapes.map((etape) => (
            <Etape key={etape.numero} numero={etape.numero} texte={etape.texte} />
        ))}
    </div>
);

export default ListeEtapes;
