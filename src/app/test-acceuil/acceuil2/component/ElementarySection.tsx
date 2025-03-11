'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ElementarySection() {
    return (
        <section className="bg-[#FCEDE4] py-16 px-4 flex flex-col items-center text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-black"
            >
                Exploring Minds
            </motion.h2>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-black mt-2"
            >
                <span className="text-black">Elementary </span>
                <span className="text-red-#1A013F">School</span>
            </motion.h3>
            <p className="text-gray-600 max-w-lg mt-4">
                Starting a corporate business typically involves several steps, such as developing a business.
            </p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 bg-[#1A013F] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1a013fa8]"
            >
                Learn More <FaArrowRight />
            </motion.button>

            <div className="flex justify-center items-center mt-10 gap-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative w-64 h-64 rounded-2xl border-4 border-orange-300 overflow-hidden"
                >
                    <img src="https://media.istockphoto.com/id/474967306/photo/cute-boy-reading-book-in-library.jpg?s=612x612&w=0&k=20&c=8uN2XTa1rGfOwBDVWOKy8SDZo1GDobRFbVtJkk03ncA=" alt="Kid with books" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative w-64 h-64 rounded-2xl border-4 border-blue-300 overflow-hidden"
                >
                    <img src="https://t4.ftcdn.net/jpg/06/96/16/63/360_F_696166359_TIleer11woeTm0nz4UUgqPujCZZ77lo3.jpg" alt="Happy kid" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex gap-6"
            >
                <img src="https://i.redd.it/who-is-arguably-the-most-famous-cartoon-character-of-all-v0-1y8q3zvs2rzb1.jpg?width=1043&format=pjpg&auto=webp&s=f4857bfe703690a8abef1e49b15b8a6307d4406d" alt="Cartoon Character" className="w-24 h-24" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-GWmy7g-y_KYTyIEDumaTqE6eBLe8EHlgA&s" alt="Cartoon Character" className="w-24 h-24" />
                <img src="https://cdn.shopify.com/s/files/1/0583/4820/8201/files/Picture4_480x480.png?v=1723119015" alt="Cartoon Character" className="w-24 h-24" />
            </motion.div>
        </section>
    );
}
