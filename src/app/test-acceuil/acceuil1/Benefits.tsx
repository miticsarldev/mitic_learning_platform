"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

const benefits = [
  {
    id: "1",
    title: "Kursus Gratis",
    description:
      "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu.",
  },
  {
    id: "2",
    title: "Akses Selamanya",
    description:
      "Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru.",
  },
  {
    id: "3",
    title: "Grup Konsultasi",
    description:
      "Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan dan kamu juga bisa membuka diskusi baru.",
  },
];

const BenefitCard = ({ id, title, description }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 p-6 rounded-xl shadow-lg text-center min-w-[250px]"
    >
      <div className="bg-blue-700 text-white font-bold w-10 h-10 flex items-center justify-center rounded-lg mx-auto">
        {id}
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const ElearningBenefits = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-bold text-gray-800">Keuntungan Bergabung Dengan</h2>
      <p className="text-2xl font-semibold text-gray-900 mt-2">E-Learning EDUFREE</p>
      <div className="mt-8 px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.id}>
              <BenefitCard {...benefit} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ElearningBenefits;
