"use client";

import { TreeDeciduous } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
   return (
      <header className='sticky top-0 z-50 w-full bg-background/70 border-b backdrop-blur-sm'>
         <div className='mx-auto max-w-site px-15 h-18 flex items-center justify-between'>
            {/* Navbar div */}
            <div className='flex items-center gap-2 cursor-pointer'>
               {/* Icon and Writing Part */}
               <TreeDeciduous className='h-7 w-7 text-green-600' />
               <span className='text-2xl font-bold text-black'>Pomi Altoi</span>
            </div>
            {/* Navbar Links */}
            <nav className='flex items-center gap-6 text-lg font-medium text-black'>
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
                     className='hover:text-green-700 transition-colors'
                  >
                     {label}
                  </Link>
               ))}
            </nav>
            {/* Contact button */}
            <button className='h-12 px-6 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'>
               Contactați-ne
            </button>
         </div>
      </header>
   );
}
