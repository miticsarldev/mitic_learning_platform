import Image from "next/image";
import React from "react";

type ImageProps = {
    imageUrl: string;
    alt: string;
};

const ImageSection: React.FC<ImageProps> = ({ imageUrl, alt }) => {
    return (
        <Image
            src={imageUrl}
            alt={alt}
            className="rounded-xl shadow-lg object-cover w-[300px] md:w-[600px]"
            fill
        />
    );
};

export default ImageSection;
