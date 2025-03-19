import { FaChalkboardTeacher, FaLaptopCode, FaFlask, FaLanguage } from "react-icons/fa";
import { motion } from "framer-motion";

const OffresCours = () => {
    const courses = [
        {
            title: "Mathématiques",
            description: "Maîtrisez les bases et approfondissez vos connaissances en mathématiques.",
            icon: <FaChalkboardTeacher className="text-[#5F36F8] text-5xl mb-4" />,
        },
        {
            title: "Informatique",
            description: "Apprenez la programmation, le développement web et bien plus encore.",
            icon: <FaLaptopCode className="text-[#5F36F8] text-5xl mb-4" />,
        },
        {
            title: "Sciences",
            description: "Explorez le monde fascinant de la physique, chimie et biologie.",
            icon: <FaFlask className="text-[#5F36F8] text-5xl mb-4" />,
        },
        {
            title: "Langues",
            description: "Améliorez vos compétences linguistiques en anglais, espagnol et plus.",
            icon: <FaLanguage className="text-[#5F36F8] text-5xl mb-4" />,
        },
    ];

    return (
        <section className="py-16 bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-extrabold text-[#1A013F] mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Offres et Cours Disponibles
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Découvrez nos cours interactifs et adaptés à tous les niveaux, enseignés par des experts qualifiés.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 + index * 0.1 }}
                        >
                            {course.icon}
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-gray-600 mt-3 text-center">{course.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffresCours;
