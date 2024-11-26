import React from "react";
import CardCourse from "../components/CardCourse";

const PopularCourses: React.FC = () => {
  const courses = [
    {
      image: "/images/category_images.jpg",
      title: "Design UX/UI",
      duration: "6 mois",
    },
    {
      image: "/images/category_images.jpg",
      title: "Business plan",
      duration: "6 mois",
    },
    {
      image: "/images/category_images.jpg",
      title: "Marketing digital",
      duration: "6 mois",
    },
    {
      image: "/images/category_images.jpg",
      title: "Comptabilité",
      duration: "6 mois",
    },
    {
      image: "/images/category_images.jpg",
      title: "E-commerce",
      duration: "6 mois",
    },
    {
      image: "/images/category_images.jpg",
      title: "Analyse de données",
      duration: "6 mois",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Cours populaires
        </h2>
        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-36">
          {courses.map((course, index) => (
            <CardCourse
              key={index}
              image={course.image}
              title={course.title}
              duration={course.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
