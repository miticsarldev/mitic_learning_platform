import React from "react";

const Contact: React.FC = () => {
  // const contactServices: { name: string; iconPath: string }[] = [
  //     { name: 'viber', iconPath: '/icons/viber.svg' },
  //     { name: 'telegram', iconPath: '/icons/telegram.svg' },
  //     { name: 'whatsapp', iconPath: '/icons/whatsapp.svg' },
  // ];

  return (
    <div className="text-white">
      {/* <div className="flex space-x-3 mb-4">
                {contactServices.map((service) => (
                    <a href="#" key={service.name}>
                        <img
                            src={service.iconPath}
                            alt={`${service.name} icon`}
                            className="w-6 h-6"
                        />
                    </a>
                ))}
            </div> */}
      <p>+19292371208</p>
      <p>mitics@ggmail.com</p>
      <p>Bamako - Mali - ACI 2000</p>
      <button className="mt-2 px-4 py-2 bg-transparent border border-white rounded text-white hover:bg-white hover:text-purple-700">
        Écrivez au réalisateur
      </button>
    </div>
  );
};

export default Contact;
