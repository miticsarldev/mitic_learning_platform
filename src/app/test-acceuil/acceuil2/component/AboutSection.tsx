'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-white">
      {/* Image Container */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="rounded-xl overflow-hidden shadow-lg w-80 h-96 relative">
          <img 
            src="https://t3.ftcdn.net/jpg/04/38/59/70/360_F_438597053_x6UPWNuxAtoB84HeKujiTEGeBfpxoefb.jpg" 
            alt="Students in class" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Info Boxes */}
        <div className="absolute -bottom-10 left-16 bg-[#FCEDE4] shadow-md rounded-lg p-4 flex flex-col items-center w-40">
          <FontAwesomeIcon icon={faChartLine} className="text-#1A013F text-3xl" />
          <h4 className="font-bold mt-2">Academy</h4>
          <p className="text-sm text-gray-600">Learning Ladder School</p>
        </div>

        <div className="absolute -bottom-20 left-60 bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-32">
          <h3 className="text-2xl font-bold text-#1A013F">10+</h3>
          <p className="text-sm text-gray-600">Learning Ladder School</p>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16"
      >
        <p className="text-#1A013F font-semibold">About Us</p>
        <h2 className="text-3xl font-bold mt-2 text-gray-900 leading-snug">
          Unlocking Potential, One Child at a Just Time in School
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. 
          Imperdiet massa turpis sit proin metus volutpat lorem ipsum.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
        >
          Get a quote
        </motion.button>
      </motion.div>
    </section>
  );
}
