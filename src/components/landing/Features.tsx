import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Features: React.FC = () => {
  const images = [
    {
      src: "/images/student_college.jpg",
      alt: "Image 1",
      title: "Collaboration créative",
      description: "Un processus de travail inspirant et dynamique.",
    },
    {
      src: "/images/student_college2.jpg",
      alt: "Image 2",
      title: "Exploration technologique",
      description: "Découvrez les dernières tendances en technologie.",
    },
    {
      src: "/images/student_college3.jpg",
      alt: "Image 3",
      title: "Design unique",
      description: "Un style captivant et élégant.",
    },
    {
      src: "/images/student_college4.jpg",
      alt: "Image 4",
      title: "Innovation durable",
      description: "Créer un avenir plus vert grâce à l'innovation.",
    },
  ];

  // État pour suivre l'index actif
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-[#1A013F] mb-8">Nos Fonctionnalité</h2>
        <p className="mt-12 mx-auto text-2xl leading-10 text-center text-gray-500 max-md:mt-10 max-md:max-w-full">
  Transformez votre manière d&apos;apprendre ! Plongez dans nos outils
  interactifs et nos ressources riches qui vous accompagnent à chaque
  étape.
</p>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true  }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablette
            1024: { slidesPerView: 3 }, // Grand écran
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-500`}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />

                {/* Texte en superposition */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 transition-opacity duration-500 flex flex-col justify-end ${index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
