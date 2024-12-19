/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
