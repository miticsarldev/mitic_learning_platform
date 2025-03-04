"use client";
import React from 'react'
import HeroSection from '../HeroSection'
import ElearningBenefits from '../Benefits'
import OnlineLearningSection from '../OnlineLearningSection'
import LearningSection from '../LearningSection';
import TestimonialSection from '../TestimonialSection';
import TestimonialSlider from '@/components/ui/primaire/components/TestimonialSlider';
import FooterSection from '@/components/ui/footer/FooterSection';
import LatestCourse from '../LatestCourse';
import CloudSoftwareSection from '../CloudSoftwareSection';
import InstructorStudentSection from '../InstructorStudentSection';

function Landing() {
    const testimonials = [
        {
            avatar: "/images/user_profil.png",
            name: "Mohamed papa Diarra",
            title: "Étudiant à propos du programme de préparation aux examens",
            feedback:
                "En tant qu'étudiant qui étudiera à l'Université de Toronto à Mississauga dans le domaine informatique, je tiens à exprimer ma profonde gratitude à SchoolManagement ! Grâce à ITGenio et Andrey Kottyar, j'ai pu développer mes compétences en programmation.",
        }, {
            avatar: "/images/user_profil.png",
            name: "sounkalo sidibe",
            title: "Étudiant à propos du programme",
            feedback:
                "En tant qu'étudiant qui étudiera à l'Université de Toronto à Mississauga dans le domaine informatique, je tiens à exprimer ma profonde gratitude à SchoolManagement ! Grâce à ITGenio et Andrey Kottyar, j'ai pu développer mes compétences en programmation.",
        },
        // Vous pouvez ajouter d'autres avis ici
    ];
    return (
        <div>
            <HeroSection />
            <CloudSoftwareSection />
            <InstructorStudentSection />
            <LatestCourse />
            <TestimonialSlider testimonials={testimonials}/>
            <FooterSection />
        </div>
    )
}

export default Landing
