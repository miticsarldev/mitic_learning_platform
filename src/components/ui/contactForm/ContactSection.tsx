import React from 'react';
import ListeEtapes from './ListeEtapes';
import Form from './form';

const ContactSection: React.FC = () => {
  const etapes = [
    { numero: 1, texte: "Le coût de la séance : 0 $" },
    {
      numero: 2,
      texte: "Le formateur vous aidera à choisir la direction et élaborera un programme personnalisé.",
    },
    {
      numero: 3,
      texte: "Détendez-vous pendant que nous travaillons avec votre enfant.",
    },
    {
      numero: 4,
      texte: "L'élève réalisera son premier projet.",
    },
  ];

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 space-y-6 lg:space-y-0 lg:space-x-12 px-2">
        {/* Texte et étapes */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Essayez une leçon gratuite !</h1>
          <ListeEtapes etapes={etapes} />
        </div>

        {/* Formulaire */}
        <div className="flex-1 ml-10">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
