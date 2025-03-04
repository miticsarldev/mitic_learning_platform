"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette, faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

const services = [
  {
    title: "Interaction Design",
    description: "Lessons on design that cover the most recent developments.",
    icon: faObjectGroup,
    bgColor: "bg-green-500",
  },
  {
    title: "UX Design Course",
    description: "Classes in development that cover the most recent advancements in web.",
    icon: faLaptopCode,
    bgColor: "bg-blue-500",
  },
  {
    title: "User Interface Design",
    description: "User Interface Design courses that cover the most recent trends.",
    icon: faPalette,
    bgColor: "bg-pink-500",
  },
];

const ServiceCard = ({ title, description, icon, bgColor }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl text-white ${bgColor} shadow-lg flex flex-col gap-4 min-w-[250px]`}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <a href="#" className="underline text-white">Learn More →</a>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-bold text-gray-800">Our Services</h2>
      <p className="text-2xl font-semibold text-gray-900 mt-2">
        Fostering a playful & engaging learning environment
      </p>
      <div className="mt-8 px-4">
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;
