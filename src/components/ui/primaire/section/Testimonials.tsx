import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      avatar: "https://via.placeholder.com/64",
      name: "Mohamed papa Diarra",
      title: "Étudiant à propos du programme de préparation aux examens",
      feedback:
        "En tant qu'étudiant qui étudiera à l'Université de Toronto à Mississauga dans le domaine informatique, je tiens à exprimer ma profonde gratitude à SchoolManagement ! Grâce à ITGenio et Andrey Kottyar, j'ai pu développer mes compétences en programmation.",
    },{
      avatar: "https://via.placeholder.com/64",
      name: "sounkalo sidibe",
      title: "Étudiant à propos du programme",
      feedback:
        "En tant qu'étudiant qui étudiera à l'Université de Toronto à Mississauga dans le domaine informatique, je tiens à exprimer ma profonde gratitude à SchoolManagement ! Grâce à ITGenio et Andrey Kottyar, j'ai pu développer mes compétences en programmation.",
    },
    // Vous pouvez ajouter d'autres avis ici
  ];

  return <TestimonialSlider testimonials={testimonials} />;
};

export default Testimonials;
