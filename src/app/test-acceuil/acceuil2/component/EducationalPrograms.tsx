'use client';

import { motion } from 'framer-motion';
import { FaCar, FaBookOpen, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const features = [
    { title: 'Online Class', icon: FaCar },
    { title: 'Formal Tuition', icon: FaGraduationCap },
    { title: 'Preschool', icon: FaChalkboardTeacher },
    { title: 'Special Tuition', icon: FaBookOpen }
];

export default function EducationalPrograms() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-#1A013F font-semibold">Educational Programs</h3>
                <h2 className="text-3xl font-bold mt-2">Strong Foundation for Success For <br /> Nurturing Curiosity</h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex items-center bg-white p-6 rounded-lg shadow-md relative "
                    >
                        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#4a1698] p-4 rounded-full">
                            <feature.icon className="text-#1A013F text-2xl " />
                        </div>
                        <div className="ml-20">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit platea.</p>
                            <a href="#" className="text-#1A013F font-semibold mt-4 inline-flex items-center">Read More <span className="ml-2">→</span></a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
