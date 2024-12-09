"use client";
import React, { useState } from "react";

interface Lecture {
    id: number;
    title: string;
}

interface Section {
    id: number;
    title: string;
    lectures: Lecture[];
}

const StepThree: React.FC<{ onNext: () => void; onBack: () => void }> = ({
    onNext,
    onBack,
}) => {
    const [sections, setSections] = useState<Section[]>([
        {
            id: 1,
            title: "Introduction",
            lectures: [
                { id: 1, title: "Introduction" },
                { id: 2, title: "Installing Development Software" },
                { id: 3, title: "Hello World Project from GitHub" },
            ],
        },
    ]);

    const addLecture = (sectionId: number) => {
        const lectureTitle = prompt("Entrez le titre de la leçon :");
        if (lectureTitle) {
            setSections((prevSections) =>
                prevSections.map((section) =>
                    section.id === sectionId
                        ? {
                            ...section,
                            lectures: [
                                ...section.lectures,
                                { id: Date.now(), title: lectureTitle },
                            ],
                        }
                        : section
                )
            );
        }
    };

    const editLecture = (sectionId: number, lectureId: number) => {
        const newTitle = prompt("Modifier le titre de la leçon :");
        if (newTitle) {
            setSections((prevSections) =>
                prevSections.map((section) =>
                    section.id === sectionId
                        ? {
                            ...section,
                            lectures: section.lectures.map((lecture) =>
                                lecture.id === lectureId ? { ...lecture, title: newTitle } : lecture
                            ),
                        }
                        : section
                )
            );
        }
    };

    const deleteLecture = (sectionId: number, lectureId: number) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette leçon ?")) {
            setSections((prevSections) =>
                prevSections.map((section) =>
                    section.id === sectionId
                        ? {
                            ...section,
                            lectures: section.lectures.filter(
                                (lecture) => lecture.id !== lectureId
                            ),
                        }
                        : section
                )
            );
        }
    };

    const addSection = () => {
        const sectionTitle = prompt("Entrez le titre de la section :");
        if (sectionTitle) {
            setSections((prevSections) => [
                ...prevSections,
                { id: Date.now(), title: sectionTitle, lectures: [] },
            ]);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white p-6 shadow-md rounded-md mt-10">
            {/* Barre de progression */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[#29015D] font-semibold text-lg">Leçons</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
                    <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
                    <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
                    <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>Information basique</span>
                    <span>Fichier des cours</span>
                    <span>Leçons</span>
                    <span>Valider</span>
                </div>
            </div>

            {/* Contenu */}
            <div className="mb-6">
                <button
                    onClick={addSection}
                    className="bg-[#29015D] text-white px-4 py-2 rounded-md mb-4"
                >
                    Ajouter une Section
                </button>

                {sections.map((section) => (
                    <div key={section.id} className="mb-4 border p-4 rounded-md">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">
                                Section {section.id}: {section.title}
                            </h3>
                            <button
                                onClick={() => addLecture(section.id)}
                                className="text-sm text-[#29015D]hover:underline"
                            >
                                Ajouter une Leçon
                            </button>
                        </div>
                        <ul>
                            {section.lectures.map((lecture) => (
                                <li
                                    key={lecture.id}
                                    className="flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2"
                                >
                                    <span>{lecture.title}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => editLecture(section.id, lecture.id)}
                                            className="text-sm text-gray-500 hover:underline"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => deleteLecture(section.id, lecture.id)}
                                            className="text-sm text-red-500 hover:underline"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex justify-between">
                <button
                    type="button"
                    className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    onClick={onBack}
                >
                    Retour
                </button>
                <button
                    type="button"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={onNext}
                >
                    Continuer
                </button>
            </div>
        </div>
    );
};

export default StepThree;
