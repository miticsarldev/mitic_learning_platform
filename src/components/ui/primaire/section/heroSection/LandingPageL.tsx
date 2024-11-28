import * as React from 'react';
import { HeroContent } from './HeroContent';
import { NotificationCard } from '@/components/landing/BasicCard';
import { NotificationCard2 } from '@/components/landing/BasicCard2';

export const LandingPage: React.FC = () => {
  return (
    <header className="flex flex-col rounded-none">
      <div className="flex relative flex-col items-center px-20 pt-9 pb-2.5 w-full min-h-0 max-md:px-5 max-md:max-w-full">
        {/* Image de fond */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0570893bdf86d2d831598bbd46bad586d3dd798d1e90817a184ec26ea8bde7d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
          alt=""
          className="object-cover absolute inset-0 size-full z-0" // z-0 pour que l'image soit en arrière-plan
        />
        <div className="flex relative flex-col w-full max-w-[1665px] max-md:max-w-full z-10"> {/* z-10 pour placer le contenu au-dessus de l'image */}
          
          <main className="flex flex-wrap gap-10 mt-48 ml-5 w-full max-w-[1638px] max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* Section avec contenu principal */}
                <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <HeroContent
                    title="Etudier en ligne est désormais beaucoup plus facile"
                    description="Booster vos compétences grace à nos programmes éfficaces et interactives"
                  />
                </section>

                {/* Section avec image et Notification Card */}
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full -translate-y-1/4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c027d6b4d803487dec3e2aef313d1b9bcb5bbe52b79a3bfb6782703d3ede79d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
                    alt=""
                    className="object-contain grow  w-full aspect-[0.9]  max-md:max-w-full"
                  />
                  {/* Notification Card en avant-plan sur l'image */}
                <div className="absolute top-1/4 left-50 z-20">
                  <NotificationCard
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/2b46bcdbf44a56976f4de34166fcb16b4bb3ab10410f4d7e7e1eab04a6b72c65?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
                    title="Étudiant assisté"
                  />
                </div>
                  {/* Notification Card 2 avec positionnement personnalisé */}
                  <div className="absolute bottom-1/4 right-20 z-20">
                    <NotificationCard
                      imageSrc="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/2b46bcdbf44a56976f4de34166fcb16b4bb3ab10410f4d7e7e1eab04a6b72c65?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
                      title="Vous avez terminé vos cours"
                      price='Félicitation'
                    />
                  </div>

                  {/* Autre Notification Card 2 */}
                  <div className="absolute top-3/4 left-50 z-20">
                    <NotificationCard2
                      title="Cours de méthodologie"
                      time="Aujourd'hui à 12h30"
                      onJoin={() => {}}
                      imageSrc={''}
                    />
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
};
