"use client";

import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import ServicesSection from "../components/servicessection";
import ReviewsSection from "../components/reviewssection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

export default function LandingPage() {
   return (
      <div className='min-h-screen flex flex-col'>
         <Navbar />
         <HeroSection />
         <AboutSection />
         <ServicesSection />
         <ReviewsSection />
         <ContactSection />
         <Footer />
      </div>
   );
}
