"use client";
import React, { useState } from "react";

const StepTwo: React.FC<{ onNext: () => void; onBack: () => void }> = ({
    onNext,
    onBack,
}) => {
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

    return (
        <div className="w-full max-w-xl mx-auto bg-white p-6 shadow-md rounded-md mt-10">
            {/* Barre de progression */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[#29015D] font-semibold text-lg">Fichier des cours</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
                    <div className="flex-1 h-1 bg-[#29015D] rounded-md"></div>
                    <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
                    <div className="flex-1 h-1 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>Information basique</span>
                    <span>Fichier des cours</span>
                    <span>Leçons</span>
                    <span>Valider</span>
                </div>
            </div>

            {/* Formulaire */}
            <form>
                {/* Image de couverture */}
                <div className="mb-6">
                    <label
                        htmlFor="courseImage"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image de couverture
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
                                className="w-full h-auto"
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
            </form>
        </div>
    );
};

export default StepTwo;
