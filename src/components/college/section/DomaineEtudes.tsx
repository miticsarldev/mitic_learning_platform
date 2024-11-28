import React from "react";
import StudyGrid from "../components/StudyGrid";

const DomainesEtudes: React.FC = () => {
    const domains = [
        {
            title: "Développeur fullstack",
            description:
                "Créez des applications modernes et flexibles en maîtrisant le front-end et le back-end.",
            image: "/images/python.png", // Remplacez par votre image
        },
        {
            title: "Graphiste",
            description:
                "Maîtrisez les concepts fondamentaux du design et libérez votre créativité.",
            image: "/images/python.png",
        },
        {
            title: "Développeur Python",
            description:
                "Apprenez à coder des applications robustes avec un des langages les plus populaires.",
            image: "/images/python.png",
        },
        {
            title: "Développeur Java",
            description:
                "Créez des solutions performantes et sécurisées avec ce langage universel.",
            image: "/images/python.png",
        },
        {
            title: "Développeur front-end",
            description:
                "Donnez vie aux interfaces web modernes et dynamiques.",
            image: "/images/python.png",
        }, 
        {
            title: "Développeur front-end",
            description:
                "Donnez vie aux interfaces web modernes et dynamiques.",
            image: "/images/python.png",
        },
        // Ajoutez d'autres domaines ici
    ];

    return (
        <section className=" py-12 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Titre principal */}
                <h2 className="text-3xl font-bold text-center mb-4 text-[#29015D]">Domaine d’études</h2>
                <p className="text-center mb-8 text-[#29015D]">
                    Sélectionnez le domaine académique ou professionnel qui correspond le mieux à vos centres d'intérêt et objectifs de carrière.
                </p>

                {/* Grille d'études */}
                <StudyGrid domains={domains} />
            </div>
        </section>
    );
};

export default DomainesEtudes;
