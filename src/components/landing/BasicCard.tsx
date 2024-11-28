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
      className="flex flex-col text-lg font-medium tracking-wide leading-7 text-gray-600 rounded-none max-w-[300px] p-4"
      role="region"
      aria-label="Student assistance card"
    >
      <div className="flex gap-3 items-center px-5 py-3 rounded-2xl bg-white bg-opacity-90">
        {/* Image de l'icône */}
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} icon`}
          className="object-contain shrink-0 rounded-none aspect-square w-[40px]"
        />

        {/* Conteneur texte */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Prix */}
          <span
            className="text-base font-semibold text-gray-700 mb-1"
            aria-label="Price"
          >
            {price}
          </span>

          {/* Titre sans coupure avec limite */}
          <span
            role="heading"
            aria-level={2}
            className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ maxWidth: "100%" }}
          >
            {title}
          </span>
        </div>
      </div>
    </article>
  );
};
