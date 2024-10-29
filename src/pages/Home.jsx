/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../components/HeroSection'; 
import BenefitsSection from '../components/BenefitsSection';
import DEISection from '../components/DEISection'; 
import ServicesSection from '../components/ServicesSection'; 
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer'; 
import ContactUs from '../components/ContactUs'; 
import Img from '../components/Img';

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <Img />
      <BenefitsSection />
      <DEISection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
