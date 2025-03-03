import * as React from 'react';
import { HeroContent } from './HeroContent';
import { NotificationCard } from '@/components/landing/BasicCard';
import { NotificationCard2 } from '@/components/landing/BasicCard2';
import Image from 'next/image';

export const LandingPage: React.FC = () => {
  return (
    <header className="flex flex-col rounded-none">
      <div className="flex relative flex-col items-center px-20 pt-9 pb-2.5 w-full min-h-0 max-md:px-5 max-md:max-w-full">
        {/* Image de fond */}
        <div className="relative w-full h-full">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0570893bdf86d2d831598bbd46bad586d3dd798d1e90817a184ec26ea8bde7d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="flex relative flex-col w-full max-w-[1665px] max-md:max-w-full z-10">

          <main className="flex flex-wrap gap-10 mt-48 ml-5 w-full max-w-[1638px] max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* Section avec contenu principal */}
                <section className="flex flex-col w-6/12 max-md:w-full">
                  <HeroContent
                    title="Étudier en ligne est désormais beaucoup plus facile"
                    description="Booster vos compétences grâce à nos programmes efficaces et interactifs"
                  />
                </section>

                {/* Section avec image */}
                <section className="flex flex-col ml-5 w-6/12 max-md:w-full max-md:ml-0">
                  <div className="relative w-full h-0 pb-[90%] max-md:w-3/4 max-md:mx-auto">
                    <Image
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c027d6b4d803487dec3e2aef313d1b9bcb5bbe52b79a3bfb6782703d3ede79d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="grow w-full aspect-[0.9]"
                    />
                  </div>

                  {/* Notification Cards (cachées sur mobile) */}
                  <div className="absolute top-1/4 left-50 z-10 max-md:hidden">
                    <NotificationCard
                      imageSrc="https://cdn.builder.io/api/v1/image/assets/b0aa033756e746f9ae04e3e003be37d3/2b46bcdbf44a56976f4de34166fcb16b4bb3ab10410f4d7e7e1eab04a6b72c65?apiKey=b0aa033756e746f9ae04e3e003be37d3&"
                      title="Étudiant assisté"
                    />
                  </div>

                  <div className="absolute bottom-1/3 right-20 z-20 max-md:hidden">
                    <NotificationCard
                      imageSrc="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                      title="Vous avez terminé vos cours"
                      price="Félicitation"
                    />
                  </div>

                  <div className="absolute top-3/4 left-50 z-20 max-md:hidden">
                    <NotificationCard2
                      title="Cours de méthodologie"
                      time="Aujourd'hui à 12h30"
                      onJoin={() => { }}
                      imageSrc=""
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
