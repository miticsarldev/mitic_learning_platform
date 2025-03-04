import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ title, description, buttonText, image }: { title: string; description: string; buttonText: string; image: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl w-40 sm:w-1/2 shadow-lg min-h-[300px]"
        >
            {/* Image d'arrière-plan */}
            <Image 
                src={image} 
                alt={title} 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-xl font-bold text-center">{title}</h3>
                <p className="text-sm text-center mt-2">{description}</p>
                <button className="mt-4 border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
                    {buttonText}
                </button>
            </div>
        </motion.div>
    );
};

const InstructorStudentSection = () => {
    return (
        <section className="py-16 px-4 text-center">
            <h2 className="text-3xl font-bold">
                Qu'est-ce que <span className="text-teal-500">mitic-elearning</span> ?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                mitic-elearning est une plateforme qui permet aux éducateurs de créer des cours en ligne où ils peuvent stocker les matériaux, gérer les devoirs, surveiller les dates d'échéance, noter les résultats et fournir un retour aux étudiants en un seul endroit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10 px-6">
                <Card
                    title="POUR LES INSTRUCTEURS"
                    description="Commencez un cours dès aujourd'hui"
                    buttonText="Démarrer un cours"
                    image="https://plus.unsplash.com/premium_photo-1661380797814-d0bcc01342b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <Card
                    title="POUR LES ÉTUDIANTS"
                    description="Entrez votre code d'accès"
                    buttonText="Entrer le code"
                    image="https://t3.ftcdn.net/jpg/03/67/97/90/360_F_367979072_UdBgmIp2RuFgLsbruOMBVmruR6jCDqfX.jpg"
                />
            </div>
        </section>
    );
};

export default InstructorStudentSection;
