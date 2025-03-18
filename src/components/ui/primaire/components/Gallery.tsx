import React, { useEffect, useState } from "react";
import { GalleryRow } from "./GalleryRow";
import { fetchCourses } from "@/app/services/courseService";
import { CourseDetails } from "@/app/types";

export const Gallery: React.FC = () => {
    const [courses, setCourses] = useState<CourseDetails[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEiK9CyQy0VSMyiAhWrIMNfyafl-bblTFMQ&s";

    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);
            setError(null);

            try {
                const allCourses = await fetchCourses();
                console.log("Données reçues:", allCourses);

                if (!allCourses || allCourses.length === 0) {
                    setError("Aucun cours disponible.");
                    return;
                }

                const processedCourses = allCourses.map(course => ({
                    ...course,
                    path_image: course.path_image || DEFAULT_IMAGE
                }));

                const rows: CourseDetails[][] = [];
                for (let i = 0; i < processedCourses.length; i += 3) {
                    rows.push(processedCourses.slice(i, i + 3));
                }

                console.log("Données transformées en rows:", rows);
                setCourses(rows);
            } catch (error) {
                console.error("Erreur lors du chargement des cours:", error);
                setError("Impossible de charger les cours.");
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, []);

    return (
        <main className="flex flex-col px-12 py-14 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                Cours populaires
            </h2>

            {loading && <p className="text-center text-gray-500">Chargement des cours...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {courses.length > 0 ? (
                <GalleryRow
                    cards={courses[0].map(course => ({
                        imageSrc: course.path_image,
                        title: course.title,
                        duration: course.duration,
                        hasOverlay: true
                    }))}
                />
            ) : (
                !loading && !error && <p className="text-center text-gray-500">Aucun cours disponible.</p>
            )}
        </main>
    );
};
