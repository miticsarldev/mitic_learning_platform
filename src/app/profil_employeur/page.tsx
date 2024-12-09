"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid"; // Icône de copie
import { FaLocationDot } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi"; // Import de l'icône GiBackwardTime

interface InfoLineProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // L'icône passée en prop
  text?: string; // Le texte de la ligne
  title?: string; // Titre facultatif
  emptyCard?: string;
}
const UserProfile: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="bg-white flex flex-col items-center justify-center p-6">
        <p className="text-lg font-semibold">
          Votre profil vu par un employeur
        </p>

        {/* Conteneur du texte et du bouton */}
        <div className="flex items-center mt-2">
          <p className="text-gray-700 text-center">
            J&apos;accepte de rendre mon profil avec les informations listées
            ci-dessous visibles auprès des employeurs inscrits
          </p>

          {/* Bouton glissable */}
          <div className="ml-4">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:bg-blue-600 relative">
                <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5 transition-transform duration-200 peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen p-6 w-full md:w-3/4 lg:w-3/4 mx-auto">
        {/* Progress Bar Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Complétez votre profil</h2>
          <p className="text-sm text-gray-500">
            Votre profil est complet à 10%
          </p>
          <div className="bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <div className="flex items-center">
            <div className="relative bg-[#2D4B85] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              SS
              {/* Icône de stylo cliquable */}
              <button className="absolute top-8 left-8 bg-white rounded-full p-1 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 17h2a2 2 0 002-2v-1h-4v1a2 2 0 002 2zm4.293-9.707a1 1 0 00-1.414 0L5 16.586V19h2.414l9.293-9.293a1 1 0 000-1.414z"
                  />
                </svg>
              </button>
            </div>
            <UserContact />
          </div>
          {/* Ligne Informations */}
          {/* Utilisation de InfoLine pour les informations */}
          <InfoLine Icon={FaLocationDot} text="informations non fournies" />
          <InfoLine Icon={MdMapsHomeWork} text="informations non fournies" />
        </div>

        {/* Info Sections */}
        <div className="mt-6 space-y-6">
          <InfoSection title="Présentation">
            <InfoLine
              text="Informations non fournies"
              title="Titre de la section"
            />
            <InfoLine
              text="Informations non fournies"
              title="Titre de la section"
            />
          </InfoSection>

          <InfoSection title="Expériences professionnelles">
            <InfoLine
              emptyCard="Vous n’avez pas encore ajouté d’expérience professionnelle
(stage, emploi, alternance, associatif)"
            />
          </InfoSection>

          <InfoSection title="Formations">
            <InfoLine emptyCard="Vous n’avez pas encore ajouté de formation" />
          </InfoSection>

          <InfoSection title="Niveau de langues">
            <InfoLine text="Informations non fournies" title="Anglais" />
            <InfoLine text="Informations non fournies" title="Francais" />
          </InfoSection>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6">
          <p className="text-lg">
            Souhaitez-vous modifier d&apos;autres informations ?
          </p>
          <a href="#" className="text-lg text-[#490AC6] hover:underline">
            Accéder à votre compte et paramètres
          </a>
        </div>
      </div>
    </div>
  );
};

const InfoLine: React.FC<InfoLineProps> = ({
  Icon,
  text,
  title,
  emptyCard,
}) => {
  // Si seule emptyCard est fournie, on affiche un message centré
  if (emptyCard && !title && !text && !Icon) {
    return (
      <div>
        <div className="border-b border-gray-300 mt-4"></div>
        {/* Contenu centré */}
        <div className="flex flex-col items-center justify-center mt-4">
          {/* Paragraphe centré */}
          <p className="text-gray-500 text-lg mb-4 text-center">{emptyCard}</p>

          {/* Bouton Ajouter centré */}
          <button className="bg-white text-[#490AC6] px-4 py-2 border border-[#490AC6] rounded-lg hover:bg-[#490AC6] hover:text-white">
            Ajouter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Ligne séparatrice */}
      <div className="border-b border-gray-300 mt-4"></div>
      <div className="flex justify-between items-center mt-4">
        {/* Partie Titre (si fourni) */}
        {title && (
          <div className="flex-1 mr-2">
            <h3 className="text-lg text-gray-800">{title}</h3>
          </div>
        )}

        {/* Partie Description (texte) */}
        {text && (
          <div className="flex-1 flex items-center gap-2">
            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
            <p className="text-gray-500 italic">{text}</p>
          </div>
        )}

        {/* Partie Bouton "à faire" */}
        <div className="flex items-center gap-2 text-gray-500 rounded-lg">
          <button className="flex items-center bg-[#DAD3F8] text-black gap-2 hover:bg-gray-600">
            <GiBackwardTime className="h-5 w-5" />
            <span>à faire</span>
            <ChevronRightIcon className="h-6 w-6 text-black flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
const UserContact = () => {
  const [, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Remettre l'état de copie après 2 secondes
    });
  };

  return (
    <div className="ml-4">
      <h2 className="text-xl font-semibold">Sadio Sy Savane</h2>

      {/* Ligne Email et Téléphone sur la même ligne */}
      <div className="flex items-center gap-4 mt-2">
        {/* Email */}
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-gray-500" />
          <p className="text-gray-500">sadiosysane@icloud.com</p>
          <DocumentDuplicateIcon
            className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-700"
            onClick={() => handleCopy("sadiosysane@icloud.com")}
          />
        </div>

        {/* Séparateur */}
        <span className="border-l-2 border-gray-300 h-6 mx-2"></span>

        {/* Téléphone */}
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5 text-gray-500" />
          <p className="text-gray-500">+33 7 53 92 77 21</p>
          <DocumentDuplicateIcon
            className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-700"
            onClick={() => handleCopy("+33 7 53 92 77 21")}
          />
        </div>
      </div>
    </div>
  );
};

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
);

export default UserProfile;
