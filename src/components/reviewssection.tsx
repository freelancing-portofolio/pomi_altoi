"use client";

import { useEffect } from "react";

export default function ReviewsSection() {
   return (
      <main>
         <section id='părericlienți'>
            <div className='bg-gray-100 mx-auto max-w-site px-15 py-16 flex flex-col justify-center items-center gap-20'>
               <p className='tracking-tight text-4xl font-bold text-green-800 mx-auto'>
                  Ce Spun Clienții Noștrii
               </p>
               <div className='grid grid-cols-3 mx-auto max-w-site gap-8'></div>
            </div>
         </section>
      </main>
   );
}
