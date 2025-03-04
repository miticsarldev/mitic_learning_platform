"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "Jenny Wilson",
    role: "Vice President",
    text: "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
    image: "/jenny-wilson.jpg", // Remplace par l'image réelle
  },
  // Ajoute d'autres témoignages ici si nécessaire
];

const TestimonialCard = ({ name, role, text, image }: any) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
      <p className="text-xl font-medium text-gray-900">"{text}"</p>
      <div className="flex items-center mt-4">
        <Image src={image} alt={name} width={40} height={40} className="rounded-full" />
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Kata Mereka Tentang</h2>
          <h2 className="text-2xl font-bold text-gray-900">Kursus <span className="text-indigo-600">EDUFREE</span></h2>
          <p className="text-gray-600 mt-2">EDUFREE telah dipercaya lebih dari 10.000 siswa</p>
        </motion.div>

        {/* Right Content - Swiper */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full max-w-2xl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
