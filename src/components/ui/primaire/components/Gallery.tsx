import React, { useEffect, useState } from "react";
import { GalleryRow } from "./GalleryRow";
import { fetchCourses } from "@/app/services/courseService";

interface Course {
    _id: string;
    title: string;
    description?: string;
    path_image: string;
    duration?: string;
    price?: number;
    isCertified?: boolean;
}

export const Gallery: React.FC = () => {
    const [courses, setCourses] = useState<Course[][]>([]);
    const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEiK9CyQy0VSMyiAhWrIMNfyafl-bblTFMQ&s"; // Image par défaut si nécessaire

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const allCourses = await fetchCourses();
                console.log(allCourses);

                const rows: Course[][] = [];
                const processedCourses = allCourses?.data.map(course => ({
                    ...course,
                    path_image: course.path_image || DEFAULT_IMAGE // Assurer une image par défaut
                }));

                for (let i = 0; i < processedCourses.length; i += 3) {
                    rows.push(processedCourses.slice(i, i + 3));
                }
                setCourses(rows);
            } catch (error) {
                console.error("Erreur lors du chargement des cours :", error);
            }
        };

        loadCourses();
    }, []);

    return (
        <main className="flex flex-col px-12 py-14 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                Cours populaires
            </h2>
            {courses.length > 0 && (
                <GalleryRow cards={courses[0].map(course => ({
                    imageSrc: course.path_image,
                    title: course.title,
                    duration: course.duration,
                    hasOverlay: true
                }))} />
            )}
        </main>
    );
};
