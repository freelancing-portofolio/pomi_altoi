"use client";

import { Scroll, TreeDeciduous } from "lucide-react";
import { useCallback, useContext } from "react";
import Link from "next/link";
import { ScrollContext } from "../context/scrollcontext";

export default function Footer() {
   const { handleScroll } = useContext(ScrollContext);

   return (
      <footer>
         <div className='bg-gray-900 py-16 px-15 flex flex-col justify-center max-w-site mx-auto gap-10 text-white'>
            <div className='grid grid-cols-3'>
               <div className='flex flex-col gap-5'>
                  <div className='flex items-center gap-2'>
                     <TreeDeciduous className='h-7 w-7 text-green-600' />
                     <h3 className='text-2xl font-bold tracking-tight'>
                        Pomi Altoi
                     </h3>
                  </div>
                  <p className='text-lg'>
                     Experți în altoirea pomilor fructiferi, oferind produse de
                     calitate superioară din 2004.
                  </p>
               </div>
               <div className='flex flex-col gap-5 items-start justify-center'>
                  <h3 className='text-2xl font-bold tracking-tight'>
                     Link-uri Rapide
                  </h3>
                  <nav className='flex flex-col gap-2 text-lg'>
                     {[
                        "Despre Noi",
                        "Servicii",
                        "Produse",
                        "Păreri Clienți",
                        "Contact",
                     ].map((label) => (
                        <Link
                           key={label}
                           href={`#${label.toLowerCase().replace(/\s+/g, "")}`}
                           onClick={(e) => handleScroll(e, label)}
                           className='hover:text-green-700 transition-colors'
                        >
                           {label}
                        </Link>
                     ))}
                  </nav>
               </div>
               <div className='flex flex-col items-start gap-5'>
                  <h3 className='text-2xl font-bold tracking-tight'>
                     Vizitați-ne
                  </h3>
                  <p className='text-lg'>
                     Vă invităm să vizitați pepiniera noastră pentru a vedea
                     personal calitatea pomilor noștri altoiți.
                  </p>
                  <button
                     onClick={() =>
                        window.open(
                           "https://maps.app.goo.gl/fTzzn8TTEDq5boDu7",
                           "_blank",
                           "noopener,noreferrer"
                        )
                     }
                     className='cursor-pointer px-6 py-2 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'
                  >
                     Cum Ajungeți La Noi
                  </button>
               </div>
            </div>
            <hr className='text-gray-700'></hr>
            <p className='text-md text-center'>
               © 2025 Pomi Altoi. Toate drepturile rezervate.
            </p>
         </div>
      </footer>
   );
}
