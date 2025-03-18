import * as React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTrophy, FaQuestionCircle, FaUserTie, FaCalendarAlt } from "react-icons/fa";

const statisticsData = [
  { value: "15K+", label: "Apprenants", icon: <FaUsers className="text-blue-500 text-5xl" /> },
  { value: "75%", label: "Succès total", icon: <FaTrophy className="text-yellow-500 text-5xl" /> },
  { value: "35", label: "Questions principales", icon: <FaQuestionCircle className="text-purple-500 text-5xl" /> },
  { value: "26", label: "Experts principaux", icon: <FaUserTie className="text-green-500 text-5xl" /> },
  { value: "16", label: "Années d'expérience", icon: <FaCalendarAlt className="text-red-500 text-5xl" /> }
];

export const StatisticsContainer: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <motion.h2 
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nos Chiffres Clés
      </motion.h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
        Découvrez quelques chiffres impressionnants qui illustrent le succès et l'impact de notre plateforme.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {statisticsData.map((stat, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {stat.icon}
            <p className="text-3xl font-bold text-gray-800 mt-4">{stat.value}</p>
            <p className="text-gray-600 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
