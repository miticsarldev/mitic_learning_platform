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
    <article className="flex flex-col px-5 py-4 w-full max-w-[350px] rounded-2xl bg-white bg-opacity-80">
      <div className="flex gap-4 items-center">
        {/* Image dynamique via props */}
        <img
          src={imageSrc}
          alt="Course avatar"
          className="rounded-full h-14 w-14 object-cover"
          role="img"
          aria-label="Course avatar"
        />
        <div className="flex flex-col grow">
          {/* Titre */}
          <h2 className="text-lg font-bold tracking-wide leading-snug text-zinc-600">
            {title}
          </h2>
          {/* Heure */}
          <time
            className="text-sm font-medium text-gray-500"
            dateTime={new Date().toISOString()}
          >
            {time}
          </time>
        </div>
      </div>
      {/* Conteneur flex pour le bouton aligné à droite */}
      <div className="flex justify-end mt-1 mr-4">
        <JoinButton onClick={onJoin} />
      </div>
    </article>
  );
}
