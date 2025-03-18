"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Alice Dupont",
    text: "Une école formidable avec des enseignants passionnés ! Mon enfant adore y aller chaque jour.",
    role: "Maman de Léa",
  },
  {
    name: "Marc Lemoine",
    text: "L'ambiance est excellente et les activités extrascolaires sont bien pensées. Je recommande vivement !",
    role: "Papa de Hugo",
  },
  {
    name: "Sophie Bernard",
    text: "Une équipe pédagogique à l'écoute et un programme adapté au développement des enfants.",
    role: "Maman de Emma",
  },
  {
    name: "David Morel",
    text: "Des infrastructures modernes et sécurisées, mon fils adore l'école !",
    role: "Papa de Nathan",
  },
  {
    name: "Camille Richard",
    text: "L'accompagnement des enfants est incroyable, et les enseignants sont vraiment investis.",
    role: "Maman de Chloé",
  },
  {
    name: "Julien Petit",
    text: "Une école où chaque enfant trouve sa place et évolue dans un cadre bienveillant.",
    role: "Papa de Lucas",
  },
];

const Commentaires = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Témoignages des parents</h2>
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-3xl  text-left transform transition duration-500 hover:scale-105">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-500 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Commentaires;
