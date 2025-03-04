import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';

const FeatureItem = ({ title, description } : { title: string ; description: string }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
    );
};

const LearningSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12">
            <div className="relative w-full md:w-1/2 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r  rounded-full"></div>
                    </div>
                    <Image
                        src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4="
                        alt="Student"
                        width={300}
                        height={300}
                        className="relative z-10 rounded-full"
                    />
                </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center space-x-3"
                >
                    <FaBriefcase className="text-red-500 text-xl" />
                    <span className="text-sm font-semibold text-gray-700">Premium learning experience</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-gray-900"
                >
                    Providing amazing online courses.
                </motion.h2>
                <FeatureItem
                    title="Master the skills that matter to you"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, adipisci?"
                />
                <FeatureItem
                    title="Increase your learning skills"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, adipisci?"
                />
            </div>
        </section>
    );
};

export default LearningSection;
