"use client";

import { TreeDeciduous } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
   return (
      <header className='sticky top-0 z-50 h-18 w-full bg-white/95 border-b backdrop-blur-md'>
         {/* Navbar div */}
         <div className='h-full w-full flex justify-around'>
            {/* Icon and Writing Part */}
            <div className='flex items-center gap-2 cursor-pointer'>
               <TreeDeciduous className='h-7 w-7 text-green-600' />
               <span className='text-2xl font-bold text-black'>Pomi Altoi</span>
            </div>
            {/* Navbar Links */}
            <nav className='flex items-center justify-center gap-6 text-lg font-medium text-black'>
               <Link
                  className='hover:text-green-700 transition-colors'
                  href='#desprenoi'
               >
                  Despre Noi
               </Link>
               <Link
                  className='hover:text-green-700 transition-colors'
                  href='#desprenoi'
               >
                  Servicii
               </Link>
               <Link
                  className='hover:text-green-700 transition-colors'
                  href='#desprenoi'
               >
                  Produse
               </Link>
               <Link
                  className='hover:text-green-700 transition-colors'
                  href='#desprenoi'
               >
                  Păreri Clienți
               </Link>
               <Link
                  className='hover:text-green-700 transition-colors'
                  href='#desprenoi'
               >
                  Contact
               </Link>
            </nav>
            {/* Contact button */}
            <div className='flex flex-row items-center justify-center'>
               <button className='cursor-pointer h-12 px-8 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'>
                  Contactați-ne
               </button>
            </div>
         </div>
      </header>
   );
}
