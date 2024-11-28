import * as React from "react";
import { CourseHero } from "./CourseHero";

export const CoursesPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full max-md:max-w-full">
      <h1 className="text-5xl font-semibold leading-tight text-violet-950 max-md:max-w-full max-md:text-4xl">
        Decouver nos cours
      </h1>
      <CourseHero
        title="Nous créons des programmes avec les universités et les meilleures entreprises du pays"
        description="Prenez le temps d'explorer notre vaste sélection de programmes afin de découvrir le cours parfait qui répond à vos aspirations et à vos besoins d'apprentissage."
        onJoin={() => {}}
        imageSrc="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/50fc891c8f0b53d9213392e50dbd8a7f1ac51c9ae5474c750bc976e03635191c?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
        imageAlt="University programs and courses illustration"
      />
    </main>
  );
};