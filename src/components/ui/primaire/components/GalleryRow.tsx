import * as React from "react";
import { ImageCard } from "./ImageCard";


interface ImageCardProps {
    imageSrc: string;
    title?: string;
    duration?: string;
    hasOverlay?: boolean;
}
interface GalleryRowProps {
    cards: ImageCardProps[];
}

export const GalleryRow: React.FC<GalleryRowProps> = ({ cards }) => {
    return (
        <section className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                {cards.map((card, index) => (
                    <ImageCard key={index} {...card} />
                ))}
            </div>
        </section>
    );
};