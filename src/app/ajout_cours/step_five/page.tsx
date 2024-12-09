"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash, ChevronDown, ChevronRight } from "lucide-react";

type Section = {
    id: number;
    title: string;
    image?: string;
    video?: string;
    text?: string;
};

type Lesson = {
    id: number;
    title: string;
    sections: Section[];
};

const LessonManager: React.FC = () => {
    const [lessons, setLessons] = useState<Lesson[]>([
        {
            id: 1,
            title: "Leçon 1",
            sections: [
                { id: 1, title: "Section 1.1", text: "Description de la section 1.1" },
                { id: 2, title: "Section 1.2", text: "Description de la section 1.2" },
            ],
        },
        {
            id: 2,
            title: "Leçon 2",
            sections: [{ id: 1, title: "Section 2.1", text: "Description de la section 2.1" }],
        },
    ]);
    const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
    const [formType, setFormType] = useState<"lesson" | "section">("lesson");
    const [currentLessonId, setCurrentLessonId] = useState<number>(0);
    const [lessonName, setLessonName] = useState<string>('');
    const [sectionName, setSectionName] = useState<string>('');
    const [sectionDesc, setSectionDesc] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [videoPreview, setVideoPreview] = useState<string | null>(null);

    //methode pour afficher un Preview de l'image quand elle est televerser
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    //methode pour afficher un Preview de la video quand elle est televerser
    const handleVideoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVideoPreview(event.target.value);
    };

    const handleToggleLesson = (id: number) => {
        setSelectedLesson(selectedLesson === id ? null : id);
    };

    const handleLessonNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLessonName(event.target.value);
    };

    const handleSectionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSectionName(event.target.value);
    };

    const handleSectionDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSectionDesc(event.target.value);
    };


    const handleAddLesson = (title: string) => {
        const newLesson: Lesson = {
            id: lessons.length + 1,
            title: title,
            sections: [],
        };
        setLessons([...lessons, newLesson]);
        setLessonName("");
    };

    const handleChangeForm = (lessonId: number) => {
        setFormType("section");
        setCurrentLessonId(lessonId);
    }

    const handleAddSection = (lessonId: number, title: string, desc: string) => {
        if (!title.trim()) {
            alert("Le titre de la section est requis.");
            return;
        }

        const targetLesson = lessons.find((lesson) => lesson.id === lessonId);
        if (!targetLesson) {
            alert("Leçon non trouvée.");
            return;
        }

        const newSection: Section = {
            id: targetLesson.sections.length + 1,
            title: title,
            text: desc,
        };

        const updatedLessons = lessons.map((lesson) =>
            lesson.id === lessonId
                ? { ...lesson, sections: [...lesson.sections, newSection] }
                : lesson
        );

        setLessons(updatedLessons);
        setSectionName("");
        setSectionDesc("");
    };


    const handleDeleteLesson = (id: number) => {
        const updatedLessons = lessons.filter((lesson) => lesson.id !== id);
        setLessons(updatedLessons);
        setSelectedLesson(null);
    };

    const handleDeleteSection = (lessonId: number, sectionId: number) => {
        const updatedLessons = lessons.map((lesson) =>
            lesson.id === lessonId
                ? {
                    ...lesson,
                    sections: lesson.sections.filter((section) => section.id !== sectionId),
                }
                : lesson
        );
        setLessons(updatedLessons);
    };

    return (
        <div className="flex h-screen p-6 bg-gray-100">
            {/* Timeline à gauche */}
            <div className="w-1/3 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-4">Timeline des Leçons</h2>
                <div>
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="mb-2">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer p-3 bg-purple-100 rounded-lg flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2" onClick={() => handleToggleLesson(lesson.id)}>
                                    {selectedLesson === lesson.id ? (
                                        <ChevronDown className="text-purple-600" />
                                    ) : (
                                        <ChevronRight className="text-purple-600" />
                                    )}
                                    <span>{lesson.title}</span>
                                </div>
                                <div className="flex gap-2">
                                    <Plus
                                        className="text-green-600 cursor-pointer"
                                        onClick={() => handleChangeForm(lesson.id)}
                                    />
                                    <Trash
                                        className="text-red-600 cursor-pointer"
                                        onClick={() => handleDeleteLesson(lesson.id)}
                                    />
                                </div>
                            </motion.div>
                            {selectedLesson === lesson.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="ml-6 mt-2"
                                >
                                    {lesson.sections.map((section) => (
                                        <div
                                            key={section.id}
                                            className="p-2 bg-gray-200 rounded mb-1 flex justify-between items-center"
                                        >
                                            {section.title}
                                            <div className="flex gap-2">
                                                <Pencil className="text-blue-600 cursor-pointer" />
                                                <Trash
                                                    className="text-red-600 cursor-pointer"
                                                    onClick={() => handleDeleteSection(lesson.id, section.id)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full mt-4 p-2 bg-[#29015D]  text-white rounded flex items-center justify-center gap-2"
                    onClick={() => setFormType('lesson')}
                >
                    <Plus /> Ajouter une Leçon
                </motion.button>
            </div>

            {/* Formulaire à droite */}
            <div className="w-2/3 bg-white rounded-lg shadow p-6 ml-4">
                <h2 className="text-xl font-bold mb-4">
                    {formType === "lesson" ? "Ajouter une Leçon" : "Ajouter une Section"}
                </h2>
                <form>
                    {formType === "lesson" ? (
                        <div className="mb-4">
                            <label className="block text-gray-700">Titre de la leçon</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Titre de la leçon"
                                value={lessonName}
                                onChange={handleLessonNameChange}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700">Titre de la section</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Titre de la section"
                                    value={sectionName}
                                    onChange={handleSectionNameChange}
                                />
                            </div>
                            {/* Image de couverture */}
                            <div className="mb-6">
                                <label
                                    htmlFor="courseImage"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Image
                                </label>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="file"
                                        id="courseImage"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="courseImage"
                                        className="cursor-pointer text-white bg-[#29015D]  px-4 py-2 rounded-md text-sm"
                                    >
                                        Télécharger un fichier
                                    </label>
                                </div>
                                {imagePreview ? (
                                    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
                                        <img
                                            src={imagePreview}
                                            alt="Aperçu de l'image"
                                            className="w-full h-52 bg-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center">
                                        <span className="text-gray-500">Aperçu indisponible</span>
                                    </div>
                                )}
                            </div>
                            {/* URL de la vidéo */}
                            <div className="mb-6">
                                <label
                                    htmlFor="videoUrl"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    URL de la vidéo
                                </label>
                                <input
                                    type="url"
                                    id="videoUrl"
                                    placeholder="Url de la vidéo"
                                    onChange={handleVideoUrlChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {videoPreview ? (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-md flex items-center justify-center">
                                        <video controls className="w-full">
                                            <source src={videoPreview} type="video/mp4" />
                                            Votre navigateur ne supporte pas la lecture vidéo.
                                        </video>
                                    </div>
                                ) : (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-md flex items-center justify-center">
                                        <span className="text-red-500">Aperçu vidéo indisponible</span>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Texte</label>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    placeholder="Description de la section"
                                    value={sectionDesc}
                                    onChange={handleSectionDescChange}
                                ></textarea>

                            </div>
                        </>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="p-2 bg-[#29015D]  text-white rounded"
                        type="button"
                        onClick={
                            formType === "lesson"
                                ? () => handleAddLesson(lessonName)
                                : () => handleAddSection(currentLessonId, sectionName, sectionDesc)
                        }
                    >
                        {formType === "lesson" ? "Ajouter la Leçon" : "Ajouter la Section"}
                    </motion.button>

                </form>
            </div>
        </div>
    );
};

export default LessonManager;
