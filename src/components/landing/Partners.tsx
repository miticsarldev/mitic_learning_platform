import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import des styles Swiper

import { PartnerCard } from "./PartnerCard";
import { PartnersData } from "./types";

export const Partners: React.FC = () => {
  const partnersData: PartnersData[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }, // Ajoutez plus de partenaires si nécessaire
    { id: 5 },
  ];

  return (
    <section
      className="flex flex-col mt-4 mb-4"
      role="region"
      aria-label="Partners Section"
    >
      <h1 className="self-center text-3xl font-bold text-[#1A013F] mb-8 leading-tight max-md:text-4xl">
        Nos partenaires
      </h1>
      <div className="w-full max-w-[80%] mx-auto max-md:max-w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Augmente l'espace entre les cartes
          slidesPerView={2} // Modifie le nombre de cartes visibles
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile, 1 carte visible
            768: { slidesPerView: 2 }, // Tablette, 2 cartes visibles
            1024: { slidesPerView: 3 }, // Grand écran, 3 cartes visibles
          }}
        >
          {partnersData.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex justify-center">
                <PartnerCard
                  id={partner.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
