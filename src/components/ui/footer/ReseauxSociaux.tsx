import React from 'react';

const ReseauxSociaux: React.FC = () => {
    const socialLinks: { name: string; url: string }[] = [
        { name: 'facebook', url: 'https://facebook.com' },
        { name: 'instagram', url: 'https://instagram.com' },
        { name: 'tiktok', url: 'https://vk.com' },
        { name: 'youtube', url: 'https://youtube.com' },
    ];

    return (
        <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((social) => (
                <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                    <img
                        src={`/images/logo_${social.name}.png`}
                        alt={`${social.name} icon`}
                        className="w-6 h-6"
                    />
                </a>
            ))}
        </div>
    );
};

export default ReseauxSociaux;
