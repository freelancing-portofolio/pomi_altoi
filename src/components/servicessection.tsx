"use client";

import { TreeDeciduous, Sprout, Leaf } from "lucide-react";

export default function ServicesSection() {
   return (
      <main>
         <section id='servicii' className='bg-gray-100'>
            <div className='mx-auto max-w-site px-6 xl:px-15 py-16 flex flex-col justify-center items-center gap-20'>
               <p className='tracking-tight text-4xl font-bold text-green-800 mx-auto'>
                  Serviciile Noastre
               </p>
               <div className='flex flex-col lg:grid lg:grid-cols-3 mx-auto max-w-site gap-8'>
                  <div className='bg-white p-8 shadow-md rounded-2xl hover:shadow-2xl transition-shadow'>
                     <div className='w-12 h-12 rounded-full flex bg-green-100 justify-center items-center mb-6'>
                        <Sprout className='h-6 w-6 text-green-600' />
                     </div>
                     <h3 className='tracking-tight text-black text-2xl mb-3 font-bold'>
                        Comercializarea Pomilor
                     </h3>
                     <p className='text-left text-gray-700 text-xl'>
                        Punem la dispoziție clienților numeroase soiuri de pomi
                        fructiferi potrivite pentru orice grădină.
                     </p>
                  </div>
                  <div className='bg-white p-8 shadow-md rounded-2xl hover:shadow-2xl transition-shadow'>
                     <div className='w-12 h-12 rounded-full flex bg-green-100 justify-center items-center mb-6'>
                        <TreeDeciduous className='h-6 w-6 text-green-600' />
                     </div>
                     <h3 className='tracking-tight text-black text-2xl mb-3 font-bold'>
                        Consultanță Specializată
                     </h3>
                     <p className='text-left text-gray-700 text-xl'>
                        Oferim sfaturi personalizate pentru alegerea soiurilor
                        potrivite condițiilor specifice terenului dumneavoastră.
                     </p>
                  </div>
                  <div className='bg-white p-8 shadow-md rounded-2xl hover:shadow-2xl transition-shadow'>
                     <div className='w-12 h-12 rounded-full flex bg-green-100 justify-center items-center mb-6'>
                        <Leaf className='h-6 w-6 text-green-600' />
                     </div>
                     <h3 className='tracking-tight text-black text-2xl mb-3 font-bold'>
                        Întreținere și Îngrijire
                     </h3>
                     <p className='text-left text-gray-700 text-xl'>
                        Asigurăm servicii complete de întreținere, tăiere și
                        tratare a pomilor pentru o dezvoltare optimă.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
