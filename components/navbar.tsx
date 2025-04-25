"use client";

import { TreeDeciduous } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

export default function Navbar() {
   const handleScroll = useCallback(
      (e: { preventDefault: () => void }, label: string) => {
         e.preventDefault();
         const id = label.toLowerCase().replace(/\s+/g, "");
         const el = document.getElementById(id);
         if (el && label == "Hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
         } else if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
         }
      },
      []
   );

   return (
      <header className='sticky top-0 z-50 w-full bg-background/70 border-b backdrop-blur-sm'>
         <div className='mx-auto max-w-site px-15 py-4 flex items-center justify-between'>
            {/* Navbar div */}
            <div
               onClick={(e) => handleScroll(e, "Hero")}
               className='flex items-center gap-2 cursor-pointer'
            >
               {/* Icon and Writing Part */}
               <TreeDeciduous className='h-7 w-7 text-green-600' />
               <h1 className='text-2xl font-bold text-black'>Pomi Altoi</h1>
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
                     onClick={(e) => handleScroll(e, label)}
                     className='hover:text-green-700 transition-colors'
                  >
                     {label}
                  </Link>
               ))}
            </nav>
            {/* Contact button */}
            <button
               onClick={(e) => handleScroll(e, "Contact")}
               className='cursor-pointer py-2 px-6 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'
            >
               Contactați-ne
            </button>
         </div>
      </header>
   );
}
