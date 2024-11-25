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
        <div className="flex items-center bg-white rounded-lg shadow-lg p-20">
            {/* Avatar */}
            <div className="flex-shrink-0 relative w-36 h-36">
                <div className="absolute top-0 left-0 w-full h-full"></div>
                <img
                    src={avatar}
                    alt={name}
                    className="object-cover w-full h-full relative mx-auto"
                />
            </div>

            {/* Text Content */}
            <div className="ml-8">
                <h3 className="text-lg font-bold text-[#25026B]">{name}</h3>
                <p className="text-sm text-gray-500 mb-4">{email}</p>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
