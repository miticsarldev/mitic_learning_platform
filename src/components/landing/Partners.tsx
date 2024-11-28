import * as React from "react";
import { PartnerCard } from "./PartnerCard";
import { PartnersData } from "./types";

export const Partners: React.FC = () => {
  const partnersData: PartnersData[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  return (
    <section className="flex flex-col mt-4 mb-4" role="region" aria-label="Partners Section">
  <h1 className="z-10 self-center mt-0 text-3xl font-bold text-[#1A013F] mb-8 leading-tight max-md:text-4xl">
    Nos partenaires
  </h1>
  <div className="mt-14 w-full max-w-[80%] mx-auto max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col justify-center">
      {partnersData.map((partner) => (
        <PartnerCard key={partner.id} id={partner.id} />
      ))}
    </div>
  </div>
</section>


  );
};