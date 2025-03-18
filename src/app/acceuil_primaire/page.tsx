"use client";
import React from "react";
import { StatisticsContainer } from "@/components/landing/Chiffres";
import Features from "@/components/landing/Features";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/ui/footer/FooterSection";
import { Gallery } from "@/components/ui/primaire/components/Gallery";
import { LandingPage } from "@/components/ui/primaire/section/heroSection/LandingPageL";
import { useAuthStore } from "@/store/authStore";
import WhyChooseUs from "@/components/ui/primaire/section/heroSection/WhyChooseUs";
import Programmes from "@/components/ui/primaire/components/Programmes";
import Commentaires from "@/components/ui/primaire/components/Commentaire";



export default function Landing() {
  const { user } = useAuthStore();
  console.log(user);
  
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Gallery />
      <Features />
      {/* <CoursesPage /> */}
      <Programmes />
      <Commentaires />
      <StatisticsContainer />
      <WhyChooseUs />
      <FooterSection />
    </div>
  );
}