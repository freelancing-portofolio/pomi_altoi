"use client";

import type React from "react";
import { useContext, useState } from "react";
import {
   TreeDeciduous,
   MenuIcon,
   CloverIcon as CloseIcon,
   Phone,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollContext } from "../context/scrollcontext";
import Image from "next/image";

const menuContainer = {
   closed: {
      opacity: 0,
      scaleY: 0,
      transition: {
         when: "afterChildren",
         staggerChildren: 0.02,
      },
   },
   open: {
      opacity: 1,
      scaleY: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.05,
         duration: 0.15,
      },
   },
};

const menuItem = {
   closed: { opacity: 0, y: -10, transition: { duration: 0.1 } },
   open: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};

export default function Navbar() {
   const { handleScroll } = useContext(ScrollContext);
   const [isOpen, setIsOpen] = useState(false);

   const labels = ["Despre Noi", "Servicii", "Produse", "Contact"];

   const handleLinkClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      label: string
   ) => {
      e.preventDefault();
      if (label === "Produse") {
         window.location.href = "/produse";
      } else {
         handleScroll(e, label);
      }
      setIsOpen(false);
   };

   return (
      <header className='sticky top-0 z-50 w-full px-6 xl:px-15 py-4 bg-background/70 backdrop-blur-lg'>
         <div className='mx-auto max-w-site flex items-center justify-between'>
            {/* Logo / Home */}
            <Link href='/' className='flex items-center gap-2 cursor-pointer'>
               <Image
                  src='/icon.jpeg'
                  alt='Pomi Altoi Logo'
                  width={64}
                  height={64}
                  className='h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 object-contain rounded-full'
               />
               <h1 className='text-2xl md:text-xl lg:text-2xl font-bold text-black'>
                  Pomi Altoi
               </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className='hidden md:flex items-center gap-6 text-md lg:text-lg font-medium text-black'>
               {labels.map((label) => (
                  <Link
                     key={label}
                     href={
                        label === "Produse"
                           ? "/produse"
                           : `/#${label.toLowerCase().replace(/\s+/g, "")}`
                     }
                     onClick={(e) => {
                        if (label !== "Produse") {
                           e.preventDefault();
                           handleScroll(e, label);
                        }
                     }}
                     className='hover:text-green-700 transition-colors'
                  >
                     {label}
                  </Link>
               ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className='hidden md:flex flex-row gap-2 items-center'>
               <Phone className='h-6 w-6 shrink-0 text-green-600' />
               <p className='text-xl text-black'>+40 743 329 612</p>
            </div>

            {/* Mobile Toggle */}
            <button
               aria-label={isOpen ? "Close menu" : "Open menu"}
               aria-expanded={isOpen}
               aria-controls='mobile-menu'
               className='md:hidden bg-transparent focus:outline-none'
               onClick={() => setIsOpen((o) => !o)}
            >
               {isOpen ? (
                  <CloseIcon className='h-8 w-8 text-black' />
               ) : (
                  <MenuIcon className='h-8 w-8 text-black' />
               )}
            </button>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  id='mobile-menu'
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={menuContainer}
                  className='md:hidden absolute top-full left-0 w-full bg-white border-t origin-top overflow-hidden'
               >
                  <motion.nav className='flex flex-col items-center gap-4 py-4'>
                     {labels.map((label) => (
                        <motion.div
                           key={label}
                           variants={menuItem}
                           className='w-full text-center'
                        >
                           <Link
                              href={
                                 label === "Produse"
                                    ? "/produse"
                                    : `/#${label
                                         .toLowerCase()
                                         .replace(/\s+/g, "")}`
                              }
                              onClick={(e) => handleLinkClick(e, label)}
                              className='block py-2 text-xl font-medium text-black hover:text-green-700 transition-colors'
                           >
                              {label}
                           </Link>
                        </motion.div>
                     ))}
                  </motion.nav>
                  <motion.div
                     variants={menuItem}
                     className='flex justify-center pb-4'
                  >
                     <button
                        onClick={(e) => handleLinkClick(e as any, "Contact")}
                        className='py-2 px-6 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md text-white'
                     >
                        Contactați-ne
                     </button>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
}
