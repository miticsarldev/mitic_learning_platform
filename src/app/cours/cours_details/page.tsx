import React from 'react';

import Navbar from '@/components/navbar';
import Header from './header';
import SecondaryNavBar from './secondaryNavBar'; // Nouveau composant
import Stats from './stat';
import Details from './details';
import Content from './content';
import Instructor from './instructor';
import StudentFeedback from './studentFeedBack';
import FAQs from './faq';

// const primaryColor = "#490AC6";
// const butonColor2 = "#25026B";

const CoursdetailsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
        <Header />
        <Stats />
        <SecondaryNavBar /> {/* Barre secondaire */}
        <Details />
        <Content />
        <Instructor />
        <StudentFeedback />
        <FAQs />
    </div>
  );
};

export default CoursdetailsPage;
