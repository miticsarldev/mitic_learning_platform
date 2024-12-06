"use client";
import { StatisticsContainer } from "@/components/landing/Chiffres";
import { CoursesPage } from "@/components/landing/CoursePage";
import  Features  from "@/components/landing/Features";
import { Partners } from "@/components/landing/Partners";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/ui/footer/FooterSection";
import { Gallery } from "@/components/ui/primaire/components/Gallery";
import { LandingPage } from "@/components/ui/primaire/section/heroSection/LandingPageL";

export default function Landing() {
    return (
        <div >
            <Navbar />
            <LandingPage />
            <Gallery />
            <Features />
            <CoursesPage />
            <StatisticsContainer />
            <Partners />
            <FooterSection />
        </div>
    );
}
