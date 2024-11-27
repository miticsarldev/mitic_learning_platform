import React from 'react';

const Form: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
    <h2 className="text-xl font-semibold text-center mb-4">Inscrivez-vous maintenant</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nom complet"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:[#1A013F]"
      />
      <input
        type="text"
        placeholder="Téléphone"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:[#1A013F]"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:[#1A013F]"
      />
      <button
        type="submit"
        className="w-full py-2 bg-[#1A013F] text-white rounded font-semibold"
      >
        S'inscrire
      </button>
    </form>
  </div>
);

export default Form;
