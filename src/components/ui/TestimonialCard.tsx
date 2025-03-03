import Image from "next/image";
import React from "react";

type TestimonialProps = {
    name: string;
    email: string;
    description: string;
    avatar: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
    name,
    email,
    description,
    avatar,
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-10 md:p-20 text-center md:text-left">
            {/* Avatar */}
            <div className="flex-shrink-0 relative w-24 h-24 md:w-36 md:h-36">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src={avatar}
                        alt={name}
                        layout="fill" // Utilisation de 'fill' pour remplir la div
                        objectFit="cover" // Couvre l'espace de la div tout en préservant les proportions
                        className="rounded-full" // On garde la bordure arrondie
                    />
                </div>
            </div>

            {/* Texte */}
            <div className="mt-4 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
                <h3 className="text-lg font-bold text-[#25026B]">{name}</h3>
                <p className="text-sm text-gray-500">{email}</p>
                <p className="text-gray-600 leading-relaxed mt-2">{description}</p>
            </div>
        </div>
    );
};


export default TestimonialCard;
