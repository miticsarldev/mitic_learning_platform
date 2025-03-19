import { motion } from "framer-motion";
import { CheckCircle, Users, School, BookOpen, Smile, Globe } from "lucide-react";

const features = [
    { icon: Users, title: "Enseignants Qualifiés", desc: "Nos professeurs sont expérimentés et passionnés par l'enseignement." },
    { icon: School, title: "Environnement Sûr", desc: "Un cadre sécurisé et bienveillant pour l'épanouissement des enfants." },
    { icon: BookOpen, title: "Méthodes Innovantes", desc: "Pédagogie moderne et adaptée aux besoins des élèves." },
    { icon: Smile, title: "Activités Extrascolaires", desc: "Diverses activités pour stimuler la créativité et l'esprit d'équipe." },
    { icon: CheckCircle, title: "Excellents Résultats", desc: "Un taux de réussite élevé grâce à un suivi personnalisé." },
    { icon: Globe, title: "Ouverture Internationale", desc: "Des échanges culturels et linguistiques pour une vision globale." }
];


export default function WhyChooseUs() {
    return (
        <section className="py-16 bg-gray-100 text-gray-900 px-6 md:px-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Pourquoi Choisir Notre École ?</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Découvrez ce qui fait de notre établissement un lieu d'excellence pour vos enfants.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <feature.icon className="text-[#1A013F] w-12 h-12 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
