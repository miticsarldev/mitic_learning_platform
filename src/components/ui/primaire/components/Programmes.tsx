import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaBook, FaChalkboardTeacher, FaPalette, FaFootballBall } from "react-icons/fa";

const programs = [
  {
    title: "Matières Académiques",
    description: "Français, Mathématiques, Sciences, Histoire et Géographie.",
    icon: <FaBook className="text-blue-500 text-5xl" />,
  },
  {
    title: "Activités Pédagogiques",
    description: "Méthodes interactives, jeux éducatifs et sorties scolaires.",
    icon: <FaChalkboardTeacher className="text-green-500 text-5xl" />,
  },
  {
    title: "Arts et Culture",
    description: "Musique, dessin, théâtre et ateliers créatifs.",
    icon: <FaPalette className="text-purple-500 text-5xl" />,
  },
  {
    title: "Sports et Bien-être",
    description: "Football, danse, gymnastique et activités en plein air.",
    icon: <FaFootballBall className="text-red-500 text-5xl" />,
  },
];

export default function Programmes() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Programmes et Cursus
        </motion.h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
          Découvrez nos cursus adaptés pour offrir un enseignement complet et enrichissant à votre enfant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition rounded-2xl h-full flex flex-col justify-between p-6 bg-white">
                <CardHeader className="flex flex-col items-center text-center">
                  {program.icon}
                  <CardTitle className="text-xl font-semibold mt-4 text-gray-800">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-md leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
