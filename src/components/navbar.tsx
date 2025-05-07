"use client";

import React, { useContext, useState } from "react";
import { TreeDeciduous, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollContext } from "../context/scrollcontext";

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

   const labels = [
      "Despre Noi",
      "Servicii",
      "Produse",
      "Păreri Clienți",
      "Contact",
   ];

   const handleLinkClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      label: string
   ) => {
      e.preventDefault();
      handleScroll(e, label);
      setIsOpen(false);
   };

   return (
      <header className='sticky top-0 z-50 w-full px-6 xl:px-15 py-4 bg-background/70 backdrop-blur-lg'>
         <div className='mx-auto max-w-site flex items-center justify-between'>
            {/* Logo / Home */}
            <button
               onClick={(e) => {
                  e.preventDefault();
                  handleScroll(e as any, "Hero");
                  setIsOpen(false);
               }}
               className='flex items-center gap-2 cursor-pointer bg-transparent focus:outline-none'
            >
               <TreeDeciduous className='h-8 w-8 text-green-600' />
               <h1 className='text-2xl font-bold text-black'>Pomi Altoi</h1>
            </button>

            {/* Desktop Nav */}
            <nav className='hidden md:flex items-center gap-6 text-md xl:text-lg font-medium text-black'>
               {labels.map((label) => (
                  <Link
                     key={label}
                     href={`#${label.toLowerCase().replace(/\s+/g, "")}`}
                     onClick={(e) => {
                        e.preventDefault();
                        handleScroll(e, label);
                     }}
                     className='hover:text-green-700 transition-colors'
                  >
                     {label}
                  </Link>
               ))}
            </nav>

            {/* Desktop Contact Button */}
            <button
               onClick={(e) => {
                  e.preventDefault();
                  handleScroll(e as any, "Contact");
               }}
               className='hidden md:block py-2 px-6 text-md xl:text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'
            >
               Contactați-ne
            </button>

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
                              href={`#${label
                                 .toLowerCase()
                                 .replace(/\s+/g, "")}`}
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
                        className='py-2 px-6 text-lg font-medium bg-green-600 hover:bg-green-700 transition-colors rounded-md'
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
