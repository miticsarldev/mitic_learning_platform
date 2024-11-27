import * as React from "react";
import { GalleryRow } from "./GalleryRow";

interface ImageCardProps {
    imageSrc: string;
    title?: string;
    duration?: string;
    hasOverlay?: boolean;
}

export const Gallery: React.FC = () => {
    const firstRowCards: ImageCardProps[] = [
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/54550e509178733c107e0b594d4a5a7a649ccd6f0375901e299d8042f5075047?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Comptabilité",
            duration: "6mois",
            hasOverlay: true
        },
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d8cce96b7b603fd9d3a0be02c8c3f232776533f03713a142e0e634bc449bd47?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Business plan",
            duration: "6mois",
            hasOverlay: true
        },
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c59c15b633a0c17f12967bdc276449bec62f503f32d3faffacab61487a0eac0a?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Comptabilité",
            duration: "6mois",
            hasOverlay: true
        }
    ];

    const secondRowCards: ImageCardProps[] = [
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9fd8444659af8f6f130f14a59bb46d2fce5fbf491bb022e4321606378ace15d?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Comptabilité",
            duration: "6mois",
            hasOverlay: true
        },
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f5ced5c560edb8e36762cf1bbe96532702a08db3575e628b8a58d38f106329?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Comptabilité",
            duration: "6mois",
            hasOverlay: true
        },
        {
            imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2acc3d258a5e391074ee138a2be4b8716abd562e70e4ec62c4c4ec482791cd1b?placeholderIfAbsent=true&apiKey=3a2067aab35e451b9d08bcadda09cdd4",
            title: "Comptabilité",
            duration: "6mois",
            hasOverlay: true
        }
    ];

    return (
        <main className="flex flex-col px-12 py-14 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                Cours populaires
            </h2>
            <GalleryRow cards={firstRowCards} />
            <div className="mt-20 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                <GalleryRow cards={secondRowCards} />
            </div>
        </main>
    );
};