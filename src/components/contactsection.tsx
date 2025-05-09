"use client";

import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
   return (
      <main>
         <section id='contact'>
            <div className='px-6 xl:px-15 py-16 text-white bg-green-800 flex flex-col gap-10'>
               <div className='flex flex-col gap-5'>
                  <h1 className='text-center sm:text-left tracking-tight text-4xl font-bold'>
                     Contactați-ne
                  </h1>
                  <p className='hidden md:block text-xl max-w-[50%]'>
                     Suntem aici pentru a răspunde întrebărilor dumneavoastră și
                     pentru a vă ajuta să alegeți cei mai potriviți pomi pentru
                     nevoile dumneavoastră.
                  </p>
               </div>
               <div className='flex flex-col gap-3'>
                  <div className='flex flex-row gap-2 items-center'>
                     <MapPin className='h-6 w-6 shrink-0' />
                     <p className='text-xl'>
                        Calea Adjudului 210, Onești, jud. Bacău, România
                     </p>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                     <Phone className='h-6 w-6 shrink-0' />
                     <p className='text-xl'>+40 743 329 612</p>
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <h3 className='text-2xl font-bold mb-1 tracking-tight'>
                     Program de lucru
                  </h3>
                  <p className='text-xl'>Luni - Duminică: 07:30 - 18:00</p>
               </div>
            </div>
         </section>
      </main>
   );
}
