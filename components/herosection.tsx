"use client";

import { useContext } from "react";
import { ScrollContext } from "./../context/scrollcontext";

export default function Hero() {
   const { handleScroll } = useContext(ScrollContext);

   return (
      <main className='h-[600px] w-full'>
         <section
            id='hero'
            className='mx-auto max-w-site h-full flex flex-row justify-center items-center relative overflow-hidden'
         >
            {/* Video Background */}
            <video
               className='absolute inset-0 w-full h-full object-cover'
               src='/hero_background.mov'
               autoPlay
               loop
               muted
               playsInline
               preload='auto'
               aria-hidden='true'
            ></video>
            {/* Black tint */}
            <div className='absolute inset-0 bg-black/50' />
            {/* Hero Writing */}
            <div className='absolute flex flex-col justify-center items-center gap-8'>
               {/* Title */}
               <h1 className='tracking-tight text-7xl font-bold'>
                  Experți în Altoirea Pomilor
               </h1>
               {/* Subtitle */}
               <p className='text-xl mb-10'>
                  Cultivăm pomi fructiferi altoiți de cea mai înaltă calitate
                  pentru grădini, livezi și spații verzi.
               </p>
               {/* Buttons */}
               <div className='flex flex-row gap-10'>
                  <button className='cursor-pointer bg-green-600 hover:bg-green-700 text-lg px-6 py-2 rounded-md transition-colors'>
                     Descopera Produsele Noastre
                  </button>
                  <button
                     onClick={(e) => handleScroll(e, "Despre Noi")}
                     className='cursor-pointer text-lg px-6 py-2 rounded-md border-3 bg-background/10 hover:bg-background/40 transition-colors'
                  >
                     Afla Mai Multe
                  </button>
               </div>
            </div>
         </section>
      </main>
   );
}
