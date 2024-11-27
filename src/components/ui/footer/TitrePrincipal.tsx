import React from 'react';
import ReseauxSociaux from './ReseauxSociaux';

const TitrePrincipal: React.FC = () => (
    <div className="text-left text-white border-b-2 pb-3">
        <h1 className="text-2xl font-bold">MITIC Sarl</h1>
        <p className="mt-2">Rejoignez-nous sur les réseaux sociaux</p>
        <ReseauxSociaux />
    </div>
);

export default TitrePrincipal;
