import React, { useEffect, useState } from "react";
import axios from "axios";
import { ICourse } from "@/app/types";
import { CheckboxGroup } from "./ui/CheckboxGroup";

interface FilterProps {
    courses: ICourse[];
    setFilteredCourses: React.Dispatch<React.SetStateAction<ICourse[]>>;
}

const CourseFilterZoneTest: React.FC<FilterProps> = ({ courses, setFilteredCourses }) => {
    const [selectedPrice, setSelectedPrice] = useState<"paid" | "free" | "both">("both");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Utilisation des _id des catégories
    const [selectedStudyLevels, setSelectedStudyLevels] = useState<string[]>([]); // Utilisation des _id des niveaux d'étude
    const [durationRange, setDurationRange] = useState([0, 100]);
    const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]); // Liste des catégories avec _id
    const [studyLevels, setStudyLevels] = useState<{ _id: string; name: string }[]>([]); // Liste des niveaux d'étude avec _id


    // Charger les catégories et les niveaux d'études via Axios
    useEffect(() => {
        const fetchCategoriesAndLevels = async () => {
            try {
                const [categoriesResponse, levelsResponse] = await Promise.all([
                    axios.get("http://localhost:4444/api/category"), // Assurez-vous que l'URL est correcte
                    axios.get("http://localhost:4444/api/studyLevels") // Assurez-vous que l'URL est correcte
                ]);
                setCategories(categoriesResponse.data); // Mettre à jour les catégories
                setStudyLevels(levelsResponse.data); // Mettre à jour les niveaux d'études
            } catch (error) {
                console.error("Erreur de récupération des catégories et niveaux :", error);
            }
        };

        fetchCategoriesAndLevels();
    }, []);

    const handleFilterChange = () => {
        let filtered = [...courses];

        // Filtrer par prix
        if (selectedPrice === "paid") {
            filtered = filtered.filter(course => course.price > 0);
        } else if (selectedPrice === "free") {
            filtered = filtered.filter(course => course.price === 0);
        }

        // Filtrer par catégories
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(course => selectedCategories.includes(course.category_id?._id || ""));
        }

        // Filtrer par niveaux d'étude
        if (selectedStudyLevels.length > 0) {
            filtered = filtered.filter(course => selectedStudyLevels.includes(course.studyLevel_id?._id || ""));
        }

        // Filtrer par durée
        filtered = filtered.filter(course => {
            const courseDuration = parseInt(course.duration.split(" ")[0]); // Assumons que la durée est sous la forme "XX heures"
            return courseDuration >= durationRange[0] && courseDuration <= durationRange[1];
        });

        setFilteredCourses(filtered);
    };

    const toggleCategory = (categoryId: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId) ? prev.filter(item => item !== categoryId) : [...prev, categoryId]
        );
    };

    const toggleStudyLevel = (levelId: string) => {
        setSelectedStudyLevels(prev =>
            prev.includes(levelId) ? prev.filter(item => item !== levelId) : [...prev, levelId]
        );
    };

    return (
        <div className="p-6 space-y-8">
            <div className="space-y-2">
                <div>
                    <h2 className="font-semibold text-lg">Prix</h2>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={selectedPrice === "both"} onChange={() => setSelectedPrice("both")} className="form-checkbox"/>
                        <span>Tous</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={selectedPrice === "paid"} onChange={() => setSelectedPrice("paid")} className="form-checkbox"/>
                        <span>Payant</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={selectedPrice === "free"} onChange={() => setSelectedPrice("free")} className="form-checkbox"/>
                        <span>Gratuit</span>
                    </label>
                </div>



                <div>
                    <h3 className="font-bold">Durée (en heures)</h3>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={durationRange[0]}
                        onChange={(e) => setDurationRange([parseInt(e.target.value), durationRange[1]])}
                        className="w-full accent-[#25026B]"
                    />
                    {/* <input
                        type="range"
                        min={0}
                        max={100}
                        value={durationRange[1]}
                        onChange={(e) => setDurationRange([durationRange[0], parseInt(e.target.value)])}
                        className="w-full accent-[#25026B]"
                    /> */}
                    <p>{durationRange[0]} - {durationRange[1]} heures</p>
                </div>

                <CheckboxGroup
                    title="Catégorie"
                    options={categories.map((category) => ({
                        label: category.name,
                        value: category._id
                    }))}
                    selectedOptions={selectedCategories}
                    onChange={toggleCategory}
                />

                <CheckboxGroup
                    title="Niveau d'étude"
                    options={studyLevels.map((level) => ({
                        label: level.name,
                        value: level._id
                    }))}
                    selectedOptions={selectedStudyLevels}
                    onChange={toggleStudyLevel}
                />

                <button onClick={handleFilterChange} className="bg-[#25026B] text-white py-2 px-4 mt-4 w-full rounded-lg">Appliquer les filtres</button>
            </div>
        </div>
    );
};

export { CourseFilterZoneTest };
