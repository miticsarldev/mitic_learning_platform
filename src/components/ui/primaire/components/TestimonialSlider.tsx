import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  feedback: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold text-[#1A013F] mb-8">Avis</h2>
      <div className="flex justify-center items-center gap-4">
        {/* Bouton Précédent */}
        <button
          onClick={handlePrevious}
          className="bg-[#29015D] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          &#8249;
        </button>

        {/* Carte actuelle */}
        <div className="w-[90%] md:w-[70%]">
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>

        {/* Bouton Suivant */}
        <button
          onClick={handleNext}
          className="bg-[#29015D] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
