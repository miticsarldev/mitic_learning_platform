'use client';

import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const articles = [
    {
        id: 1,
        author: 'John Doe',
        likes: 45,
        title: 'Understanding JavaScript',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo',
        image: '/images/article1.jpg',
    },
    {
        id: 2,
        author: 'Jane Smith',
        likes: 78,
        title: 'A Guide to Node.js Event Loop',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo',
        image: '/images/article2.jpg',
    },
    {
        id: 3,
        author: 'Alex Johnson',
        likes: 62,
        title: 'Introduction to React Hooks',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo',
        image: '/images/article3.jpg',
    },
];

export default function LatestCourse() {
    return (
        <section className="bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Courses
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <motion.div
                            key={article.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-gray-700 font-medium">{article.author}</p>
                                    <div className="flex items-center text-gray-500">
                                        <FaHeart className="text-red-500 mr-1" /> {article.likes}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{article.description}</p>
                                <a href="#" className="text-blue-600 font-semibold hover:underline">Learn More</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}