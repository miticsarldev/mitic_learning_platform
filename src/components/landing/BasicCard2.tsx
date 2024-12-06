import * as React from "react";
import { JoinButton } from "./JoinButton";

export interface CourseCardProps {
  title: string;
  time: string;
  onJoin: () => void;
  imageSrc: string; // Image dynamique
}

export function NotificationCard2({
  title,
  time,
  onJoin,
  imageSrc,
}: CourseCardProps) {
  return (
    <article className="flex flex-col px-4 py-3 w-full max-w-[280px] rounded-xl bg-white bg-opacity-90">
      <div className="flex gap-3 items-center">
        {/* Image dynamique via props */}
        <img
          src={imageSrc}
          alt="Course avatar"
          className="rounded-full h-10 w-10 object-cover"
          role="img"
          aria-label="Course avatar"
        />
        <div className="flex flex-col grow">
          {/* Titre */}
          <h2 className="text-base font-semibold tracking-wide leading-snug text-zinc-600">
            {title}
          </h2>
          {/* Heure */}
          <time
            className="text-xs font-medium text-gray-500"
            dateTime={new Date().toISOString()}
          >
            {time}
          </time>
        </div>
      </div>
      {/* Conteneur flex pour le bouton aligné à droite */}
      <div className="flex justify-end mt-2 mr-3">
        <JoinButton onClick={onJoin} />
      </div>
    </article>
  );
}
