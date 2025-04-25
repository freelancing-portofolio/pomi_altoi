"use client";

import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import AboutSection from "../../components/aboutsection";
import ServicesSection from "../../components/servicessection";

export default function LandingPage() {
   return (
      <div className='min-h-screen flex flex-col'>
         <Navbar />
         <HeroSection />
         <AboutSection />
         <ServicesSection />
      </div>
   );
}
