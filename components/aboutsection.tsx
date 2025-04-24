"use client";

export default function AboutSection() {
   return (
      <main className='h-[600px] w-full'>
         <section className='h-full w-full bg-green-200 flex flex-row'>
            {/* About */}
            <div className='h-full w-full flex flex-col ml-13 gap-5 justify-center'>
               <span className='text-green-800 text-4xl font-bold text-left w-[85%] mb-5'>
                  Despre Pomi Altoi
               </span>
               <span className='text-gray-700 w-[85%] text-xl'>
                  Cu o experiență de peste 20 ani în domeniul altoirii pomilor,
                  firma Pomi Altoi s-a specializat în producerea și
                  comercializarea de pomi fructiferi altoiți de calitate
                  superioară.
               </span>
               <span className='text-gray-700 w-[85%] text-xl'>
                  Folosim tehnici tradiționale combinate cu metode moderne
                  pentru a asigura o rată ridicată de prindere și o dezvoltare
                  sănătoasă a pomilor.
               </span>
               <span className='text-gray-700 w-[85%] text-xl'>
                  Fiecare pom este crescut cu grijă în pepiniera noastră, unde
                  beneficiază de condiții optime de dezvoltare și este
                  monitorizat constant de specialiștii noștri.
               </span>
            </div>
            <div className='h-full w-full flex flex-col justify-center items-center'>
               <video
                  className='w-[85%] rounded-xl shadow-6xl'
                  src='/about_section.mov'
                  controls
               ></video>
            </div>
         </section>
      </main>
   );
}
