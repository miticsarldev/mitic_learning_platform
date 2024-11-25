import React from "react";

interface CardCourseProps {
  image: string;
  title: string;
  duration: string;
}

const CardCourse: React.FC<CardCourseProps> = ({ image, title, duration }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-80">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">Durée: {duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
