'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: 'Why do we have to go to school?',
        answer: 'It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Many desktop publish packages and web page editors now use Loremdefault model.',
    },
    {
        question: 'Why do we have to go to school?',
        answer: 'It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout.',
    },
    {
        question: 'Why do we have to go to school?',
        answer: 'It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-24 bg-white">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full lg:w-1/2 flex justify-center"
            >
                <div className="relative">
                    <img src="https://media.istockphoto.com/id/1285962627/photo/schoolgirl-studying-with-video-online-lesson-at-home.jpg?s=612x612&w=0&k=20&c=_FFhUCHU6-tgcGPd3nAu18DbkGFyrleL3JLBwkiJ0z0=" alt="Child with laptop" className="relative z-10 w-3/4" />
                    <div className="absolute inset-0 -z-10 flex justify-center items-center">
                        <div className="w-72 h-72 rounded-full bg-beige"></div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 mt-10 lg:mt-0"
            >
                <h4 className="text-#1A013F font-semibold text-lg">Some Faq</h4>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Empowering Children Through Education Playful Mind</h2>

                <div className="mt-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border rounded-lg overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="text-lg text-white flex justify-center items-center w-8 h-8 rounded bg-[#4a1698]">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="p-4 text-gray-700 bg-white"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
