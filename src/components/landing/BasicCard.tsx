import * as React from "react";

export interface StudentCardProps {
  imageSrc: string;
  title: string;
  price?: string;
}

export const NotificationCard: React.FC<StudentCardProps> = ({
  imageSrc,
  title,
  price = "250k",
}) => {
  return (
    <article
      className="flex flex-col text-xl font-semibold tracking-wide leading-9 text-gray-600 rounded-none max-w-[400px]"
      role="region"
      aria-label="Student assistance card"
    >
      <div className="flex gap-4 items-start px-7 pt-6 pb-4 rounded-3xl bg-white bg-opacity-80">
        {/* Image de l'icône */}
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} icon`}
          className="object-contain shrink-0 rounded-none aspect-square w-[50px]"
        />

        {/* Conteneur texte avec largeur dynamique */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Prix agrandi */}
          <span
            className="text-xl font-bold text-gray-700 mb-1"
            aria-label="Price"
          >
            {price}
          </span>

          {/* Titre sans coupure avec limite */}
          <span
            role="heading"
            aria-level={2}
            className="text-base text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ maxWidth: "100%" }} // Limite à la largeur disponible
          >
            {title}
          </span>
        </div>
      </div>
    </article>
  );
};
