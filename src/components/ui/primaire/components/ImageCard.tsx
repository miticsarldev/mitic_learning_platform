import * as React from "react";

interface ImageCardProps {
    imageSrc: string;
    title?: string;
    duration?: string;
    hasOverlay?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, duration, hasOverlay }) => {
    return (
        <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full rounded-2xl">
            <div className="flex relative flex-col grow pt-96 min-h-[587px] max-md:pt-24 max-md:mt-10 max-md:max-w-full rounded-2xl">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={title || "Gallery image"}
                    className="object-cover absolute inset-0 size-full rounded-2xl"
                />
                {hasOverlay && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2 text-white pb-10 rounded-2xl">
                        <h2 className="text-2xl text-gray-200">{title}</h2>
                        {duration && (
                            <div className="flex gap-7 mt-3.5 text-xl text-white whitespace-nowrap">
                                <span>Durée:</span>
                                <span>{duration}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};