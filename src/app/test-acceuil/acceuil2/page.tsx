"use client";
import React from 'react'
import ElementarySection from './component/ElementarySection';
import AboutSection from './component/AboutSection';
import EducationalPrograms from './component/EducationalPrograms';
import FAQSection from './component/FAQSection';
import FooterSection from '@/components/ui/footer/FooterSection';

function page() {
  return (
    <div>
        <ElementarySection />
        <AboutSection />
        <EducationalPrograms />
        <FAQSection />
        <FooterSection />
    </div>
  )
}

export default page