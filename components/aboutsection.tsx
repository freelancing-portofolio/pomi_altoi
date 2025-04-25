"use client";

export default function AboutSection() {
   return (
      <main>
         <section id='desprenoi' className='bg-green-200 w-full'>
            <div className='mx-auto max-w-site px-15 h-[600px] flex items-center justify-between gap-20'>
               {/* About */}
               <div className='flex-1 flex flex-col gap-5 justify-center'>
                  <h1 className='tracking-tight text-4xl font-bold text-green-800 mb-6'>
                     Despre Pomi Altoi
                  </h1>
                  <p className='text-xl text-gray-700'>
                     Cu o experiență de peste 20 ani în domeniul altoirii
                     pomilor, Pomi Altoi s-a specializat în producerea și
                     comercializarea de pomi fructiferi altoiți de calitate
                     superioară.
                  </p>
                  <p className='text-xl text-gray-700'>
                     Folosim tehnici tradiționale combinate cu metode moderne
                     pentru a asigura o rată ridicată de prindere și o
                     dezvoltare sănătoasă a pomilor.
                  </p>
                  <p className='text-xl text-gray-700'>
                     Fiecare pom este crescut cu grijă în pepiniera noastră,
                     unde beneficiază de condiții optime de dezvoltare și este
                     monitorizat constant de specialiștii noștri.
                  </p>
               </div>
               <div className='flex-1 flex justify-center'>
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
