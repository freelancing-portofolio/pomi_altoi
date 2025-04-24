"use client";

export default function AboutSection() {
   return (
      <main>
         <section id='desprenoi' className='bg-green-200'>
            <div className='mx-auto max-w-site px-15 h-[600px] flex items-center justify-between gap-20'>
               {/* About */}
               <div className='w-1/2 flex flex-col gap-5 justify-center'>
                  <span className='text-4xl font-bold text-green-800'>
                     Despre Pomi Altoi
                  </span>
                  <span className='text-xl text-gray-700'>
                     Cu o experiență de peste 20 ani în domeniul altoirii
                     pomilor, firma Pomi Altoi s-a specializat în producerea și
                     comercializarea de pomi fructiferi altoiți de calitate
                     superioară.
                  </span>
                  <span className='text-xl text-gray-700'>
                     Folosim tehnici tradiționale combinate cu metode moderne
                     pentru a asigura o rată ridicată de prindere și o
                     dezvoltare sănătoasă a pomilor.
                  </span>
                  <span className='text-xl text-gray-700'>
                     Fiecare pom este crescut cu grijă în pepiniera noastră,
                     unde beneficiază de condiții optime de dezvoltare și este
                     monitorizat constant de specialiștii noștri.
                  </span>
               </div>
               <div className='w-1/2 flex justify-center'>
                  <video
                     className='w-full rounded-xl shadow-6xl'
                     src='/about_section.mov'
                     controls
                  />
               </div>
            </div>
         </section>
      </main>
   );
}
