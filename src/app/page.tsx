"use client";

import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";

export default function LandingPage() {
   return (
      <div className='min-h-screen flex flex-col'>
         <Navbar />
         <HeroSection />
      </div>
   );
}
