
//src/app/historique_cours/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "@/components/navbar";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import clsx from "clsx";
import { Enrollment, HistoriqueCourse } from "@/app/types";



const CourseCard = ({ course }: { course: HistoriqueCourse }) => {
    return (
        <motion.div
            className="flex items-start gap-4 p-4 bg-white shadow-md rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={course.image}
                alt={course.title}
                className="w-24 h-24 object-cover rounded-lg"
                fill
            />
            <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: "#1C1E53" }}>
                    {course.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.status}</p>
                <p className="text-xs text-gray-500">Démarré le : {course.startDate}</p>
            </div>
            <FontAwesomeIcon
                icon={course.progress === 100 ? faCheckCircle : faCircle}
                style={{ fontSize: "1.5rem", color: course.progress === 100 ? "#1C1E53" : "#9CA3AF" }}
            />
        </motion.div>
    );
};

const CourseHistory = () => {
    const [courses, setCourses] = useState<HistoriqueCourse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const { user } = useAuthStore();
    const [userId, setUserId] = useState<string | null>(user ? user.id : null);

    useEffect(() => {
        if (user) {
            setUserId(user.id);
        }
    }, [user]);

    useEffect(() => {
        if (userId) {
            const fetchCourses = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get<Enrollment[]>(`http://localhost:4444/api/enrollment/student/${userId}`);

                    const formattedCourses = response.data.map((enrollment: Enrollment) => ({
                        category: "Développement",
                        title: enrollment.course_id.title,
                        status: enrollment.status === "completed" ? "Cours terminé!" : "En cours",
                        startDate: new Date(enrollment.start_date).toLocaleDateString("fr-FR"),
                        image: enrollment.course_id.path_image,
                        progress: enrollment.status === "completed" ? 100 : 50,
                    }));
                    setCourses(formattedCourses);
                } catch (err) {
                    setError("Vous n'êtes inscrit à aucun cours - Allez sur la liste des cours" + err);
                } finally {
                    setLoading(false);
                }
            };
            fetchCourses();
        }
    }, [userId]);

    const filteredCourses = courses.filter(course => {
        const isCategoryMatch = !selectedCategory || course.category === selectedCategory;
        const isStatusMatch = selectedStatus === "Tous" ||
            (selectedStatus === "Terminés" && course.progress === 100) ||
            (selectedStatus === "En cours" && course.progress < 100);
        return isCategoryMatch && isStatusMatch;
    });

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="px-20 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Cours suivis</h1>

                <div className="flex gap-2 mb-6">
                    {["Développement", "Bureautique"].map((category) => (
                        <button
                            key={category}
                            className={clsx("px-4 py-2 rounded-full border", {
                                "bg-[#1C1E53] text-white": selectedCategory === category,
                                "bg-white text-gray-800 border-gray-300": selectedCategory !== category,
                            })}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 mb-6">
                    {["Tous", "Terminés", "En cours"].map((status) => (
                        <button
                            key={status}
                            className={clsx("px-4 py-2 rounded-full border", {
                                "bg-[#1C1E53] text-white": selectedStatus === status,
                                "bg-white text-gray-800 border-gray-300": selectedStatus !== status,
                            })}
                            onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {loading && <p>Chargement des cours...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="grid gap-4">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.title} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseHistory;