"use client";
import Avis from "@/components/college/section/Avis";
import DomainesEtudes from "@/components/college/section/DomaineEtudes";
import HeroSection from "@/components/ui/primaire/section/HeroSection";
import PopularCourses from "@/components/ui/primaire/section/PopularCourse";

export default function AcceuilCollege() {
    return (
        <div >
            <HeroSection />
            <PopularCourses />
            <DomainesEtudes />
            <Avis />
        </div>
    );
}
