import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Badge = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-red-500 text-white p-3 rounded-full">
      <FontAwesomeIcon icon={faAward} className="text-xl" />
    </div>
    <span className="font-semibold text-black">Guaranteed and certified</span>
  </div>
);

const FeatureItem = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <span className="absolute text-gray-200 text-8xl font-bold -z-10">{number}</span>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-500 text-sm max-w-xs">{description}</p>
  </motion.div>
);

const Button = () => (
  <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition">
    <span>Learn More</span>
    <span>&rarr;</span>
  </button>
);

const OnlineLearningSection = () => {
  return (
    <section className="container mx-auto px-6 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
      <div className="lg:w-1/2 space-y-6">
        <Badge />
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900"
        >
          Online learning <br /> wherever and whenever.
        </motion.h2>
        <p className="text-gray-500 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non repellendus aliquam, dicta blanditiis voluptatem autem error culpa inventore.
        </p>
        <Button />
      </div>
      <div className="lg:w-1/2 space-y-12">
        <FeatureItem number="01" title="Flexible schedule" description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet. Temporibus, similique?" />
        <FeatureItem number="02" title="Pocket Friendly" description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet. Temporibus, similique?" />
      </div>
    </section>
  );
};

export default OnlineLearningSection;
