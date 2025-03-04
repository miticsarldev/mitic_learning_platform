"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#191847] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Best online <br /> platform for <br /> education.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg text-gray-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, non! Tenetur omnis eum eos quisquam deleniti temporibus nam exercitationem.
        </motion.p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg font-semibold"
          >
            Learn More
          </motion.button>
        </div>
        <div className="mt-8 flex justify-center md:justify-start gap-8 text-lg font-semibold">
          <div>
            <span className="text-2xl font-bold text-green-400">260+</span>
            <p className="text-gray-300">Tutors</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-400">2260+</span>
            <p className="text-gray-300">Students</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-pink-400">60+</span>
            <p className="text-gray-300">Courses</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        >
          <Image
            src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4="
            alt="Student"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
