import * as React from "react";
import { HeroContent } from "./HeroContent";

// const navItems = ['Accueil', 'Cours', 'Classe', 'Enterprise'];

export const LandingPage: React.FC = () => {
  return (
    <header className="flex flex-col rounded-none">
      <div className="flex relative flex-col items-center px-20 pt-9 pb-2.5 w-full min-h-0 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0570893bdf86d2d831598bbd46bad586d3dd798d1e90817a184ec26ea8bde7d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col w-full max-w-[1665px] max-md:max-w-full">
          <main className="flex flex-wrap gap-10 mt-48 ml-5 w-full max-w-[1638px] max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <HeroContent
                    title="L'école où vous souhaitez étudier"
                    description="Nous préparons vos enfants de 5 à 17 ans à une carrière réussie dans l'informatique et dans d'autres domaines basés sur des programmes de formation modernes"
                  />
                </section>
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full -translate-y-1/4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c027d6b4d803487dec3e2aef313d1b9bcb5bbe52b79a3bfb6782703d3ede79d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
                    alt=""
                    className="object-contain grow  w-full aspect-[0.9]  max-md:max-w-full"
                  />
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
};
