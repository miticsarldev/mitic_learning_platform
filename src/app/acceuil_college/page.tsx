"use client";
import Avis from "@/components/college/section/Avis";
import DomainesEtudes from "@/components/college/section/DomaineEtudes";
import { StatisticsContainer } from "@/components/landing/Chiffres";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/ui/contactForm/ContactSection";
import FooterSection from "@/components/ui/footer/FooterSection";
import { Gallery } from "@/components/ui/primaire/components/Gallery";
import { LandingPage } from "@/components/ui/primaire/section/heroSection/LandingPage";

export default function AcceuilCollege() {
    return (
        <div >
            <Navbar />
            <LandingPage />
            <Gallery />
            <DomainesEtudes />
            <Avis/>
            <StatisticsContainer />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
