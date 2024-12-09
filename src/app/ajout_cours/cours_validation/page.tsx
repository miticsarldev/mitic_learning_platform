"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Clock, Tag, Award, BookOpen } from "lucide-react";

// Types pour les leçons et sections
type Section = {
    id: number;
    title: string;
    image?: string;
    text: string;
};

type Lesson = {
    id: number;
    title: string;
    sections: Section[];
};

type Course = {
    title: string;
    duration: string; // Exemple: "3 heures"
    image: string; // URL de l'image
    price: number;
    isCertifying: boolean;
    lessons: Lesson[];
};

const courseData: Course = {
    title: "Cours de Programmation React",
    duration: "5 heures",
    image: "/images/python.png",
    price: 49.99,
    isCertifying: true,
    lessons: [
        {
            id: 1,
            title: "Introduction à React",
            sections: [
                { id: 1, title: "Qu'est-ce que React ?", text: "Nous allons introduire une nouvelle classe Comment pour gérer les commentaires. Les utilisateurs (étudiants ou professeurs) pourront ajouter des commentaires et répondre à ceux des autres.", image: "/images/scratch.png" },
                { id: 2, title: "Premiers Pas", text: "Nous allons introduire une nouvelle classe Comment pour gérer les commentaires. Les utilisateurs (étudiants ou professeurs) pourront ajouter des commentaires et répondre à ceux des autres.", image: "/images/roblox.jpg" },
            ],
        },
        {
            id: 2,
            title: "Composants React",
            sections: [
                { id: 1, title: "Fonctionnement des Composants", text: "Description Composants 1", image: "https://via.placeholder.com/150" },
                { id: 2, title: "Props et State", text: "Description Composants 2", image: "https://via.placeholder.com/150" },
            ],
        },
    ],
};

const PreviewCourse: React.FC = () => {
    const [selectedLesson, setSelectedLesson] = useState<number>(courseData.lessons[0].id);
    const [selectedSection, setSelectedSection] = useState<number>(courseData.lessons[0].sections[0].id);

    const currentLesson = courseData.lessons.find((lesson) => lesson.id === selectedLesson);
    const currentSection = currentLesson?.sections.find((section) => section.id === selectedSection);

    const handleNextSection = () => {
        if (currentLesson && currentSection) {
            const currentIndex = currentLesson.sections.findIndex((s) => s.id === currentSection.id);
            if (currentIndex < currentLesson.sections.length - 1) {
                setSelectedSection(currentLesson.sections[currentIndex + 1].id);
            }
        }
    };

    const handlePrevSection = () => {
        if (currentLesson && currentSection) {
            const currentIndex = currentLesson.sections.findIndex((s) => s.id === currentSection.id);
            if (currentIndex > 0) {
                setSelectedSection(currentLesson.sections[currentIndex - 1].id);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen p-6 bg-gray-100">
            {/* Informations principales */}
            <motion.div
                className="bg-white rounded-lg shadow p-6 flex gap-6 items-start mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Image du cours */}
                <img src={courseData.image} alt="Image du cours" className="w-40 h-40 rounded object-cover" />

                {/* Informations principales */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">{courseData.title}</h2>
                    <p className="text-gray-600 mb-4">
                        Maîtrisez les bases de ce cours et développez vos compétences pour un avenir prometteur.
                    </p>

                    <div className="flex items-center gap-4 text-gray-700">
                        {/* Icône pour la difficulté */}
                        <div className="flex items-center gap-2">
                            <BookOpen size={20} className="text-purple-600" />
                            <span>Nombre de leçons : {courseData.lessons.length}</span>
                        </div>

                        {/* Icône pour la durée */}
                        <div className="flex items-center gap-2">
                            <Clock size={20} className="text-blue-600" />
                            <span>Durée : {courseData.duration}</span>
                        </div>

                        {/* Icône pour le prix */}
                        <div className="flex items-center gap-2">
                            <Tag size={20} className="text-green-600" />
                            <span>Prix : {courseData.price}€</span>
                        </div>

                        {/* Icône pour le certificat */}
                        <div className="flex items-center gap-2">
                            <Award size={20} className="text-yellow-500" />
                            <span>{courseData.isCertifying ? "Certifiant" : "Non certifiant"}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Liste des leçons */}
            <div className="flex h-full">
                <div className="w-1/3 bg-white rounded-lg shadow p-4 overflow-auto">
                    <h2 className="text-xl font-bold mb-4">Leçons</h2>
                    {courseData.lessons.map((lesson) => (
                        <motion.div
                            key={lesson.id}
                            className={`cursor-pointer p-3 mb-2 rounded-lg ${selectedLesson === lesson.id ? "bg-purple-200" : "bg-gray-200"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {
                                setSelectedLesson(lesson.id);
                                setSelectedSection(lesson.sections[0].id); // Défaut : première section
                            }}
                        >
                            {lesson.title}
                        </motion.div>
                    ))}
                </div>

                {/* Détails de la section */}
                <div className="w-2/3 bg-white rounded-lg shadow p-6 ml-4 flex flex-col items-center">
                    {currentSection ? (
                        <motion.div
                            key={currentSection.id}
                            className="w-full"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl font-bold mb-4">{currentSection.title}</h2>
                            {currentSection.image && (
                                <img
                                    src={currentSection.image}
                                    alt={currentSection.title}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                            )}
                            <p>{currentSection.text}</p>
                        </motion.div>
                    ) : (
                        <p>Sélectionnez une leçon et une section pour les afficher</p>
                    )}

                    {/* Contrôles de navigation */}
                    <div className="flex gap-4 mt-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-gray-300 rounded"
                            onClick={handlePrevSection}
                            disabled={!currentLesson || selectedSection === currentLesson.sections[0].id}
                        >
                            <ChevronLeft />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-gray-300 rounded"
                            onClick={handleNextSection}
                            disabled={
                                !currentLesson || selectedSection === currentLesson.sections[currentLesson.sections.length - 1].id
                            }
                        >
                            <ChevronRight />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCourse;
