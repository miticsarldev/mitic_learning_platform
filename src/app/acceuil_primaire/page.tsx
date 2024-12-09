"use client";

import { LandingPage } from "@/components/ui/primaire/section/heroSection/LandingPage";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ui/contactForm/ContactSection";
import FounderSection from "@/components/ui/contactForm/FounderSection";
import FooterSection from "@/components/ui/footer/FooterSection";
import { Gallery } from "@/components/ui/primaire/components/Gallery";
import CategorySection from "@/components/ui/primaire/section/CategorySection";
import Testimonials from "@/components/ui/primaire/section/Testimonials";

export default function AcceuilPrimaire() {
  const programmingCourses = [
    {
      icon: "/images/scratch.png",
      title: "Scratch",
      description: "Nous créons des jeux à l'aide des blocs visuels.",
      age: "7 ans",
    },
    {
      icon: "/images/python.png",
      title: "Python",
      description:
        "Nous écrivons des applications, des jeux et des sites web en utilisant le code d'un programme.",
      age: "10 ans",
    },
    {
      icon: "/images/roblox.jpg",
      title: "Roblox",
      description:
        "Nous travaillons avec des graphiques 3D et créons des mondes virtuels.",
      age: "10 ans",
    },
  ];

  return (
    <>
      <Navbar />
      <LandingPage />
      <Gallery />
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1A013F]">
            Découvrir nos cours
          </h1>
          <div className="flex flex-col gap-10">
            <CategorySection
              title="Programmation"
              courses={programmingCourses}
            />
            <CategorySection
              title="Programmation"
              courses={programmingCourses}
            />
            <CategorySection
              title="Programmation"
              courses={programmingCourses}
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <FounderSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
