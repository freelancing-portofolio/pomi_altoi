"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface Product {
   id: number;
   name: string;
   category: string;
   description: string;
   price: number;
   inStock: boolean;
}

interface ProductModalProps {
   product: Product | null;
   isOpen: boolean;
   onClose: () => void;
}

export default function ProductModal({
   product,
   isOpen,
   onClose,
}: ProductModalProps) {
   // Close modal on escape key
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            onClose();
         }
      };

      if (isOpen) {
         document.addEventListener("keydown", handleEscape);
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.removeEventListener("keydown", handleEscape);
         document.body.style.overflow = "unset";
      };
   }, [isOpen, onClose]);

   if (!isOpen || !product) return null;

   return (
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
         {/* Backdrop */}
         <div
            className='absolute inset-0 bg-black/50 backdrop-blur-sm'
            onClick={onClose}
         />

         {/* Modal */}
         <div className='relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto'>
            {/* Close Button */}
            <button
               onClick={onClose}
               className='absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors'
               aria-label='Închide'
            >
               <X className='h-5 w-5 text-gray-600' />
            </button>

            {/* Product Image */}
            <div className='w-full h-80 bg-gray-50 flex items-center justify-center rounded-t-2xl'>
               <div className='text-center'>
                  <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                     <svg
                        className='w-12 h-12 text-green-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={1.5}
                           d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                     </svg>
                  </div>
                  <p className='text-gray-400 text-lg font-medium'>
                     {product.name}
                  </p>
               </div>
            </div>

            {/* Product Details */}
            <div className='p-8'>
               <div className='flex justify-between items-start mb-4'>
                  <h2 className='text-3xl font-bold text-black'>
                     {product.name}
                  </h2>
                  <span
                     className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.inStock
                           ? "bg-green-100 text-green-800"
                           : "bg-red-100 text-red-800"
                     }`}
                  >
                     {product.inStock ? "În stoc" : "Epuizat"}
                  </span>
               </div>

               <div className='mb-6'>
                  <span className='text-4xl font-bold text-green-600'>
                     {product.price} RON
                  </span>
               </div>

               <div className='mb-8'>
                  <h3 className='text-xl font-semibold text-black mb-3'>
                     Descriere
                  </h3>
                  <p className='text-gray-700 text-lg leading-relaxed'>
                     {product.description}
                  </p>
               </div>

               {/* Additional Info */}
               <div className='border-t pt-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
                     <div>
                        <span className='font-medium text-gray-900'>
                           Categorie:
                        </span>
                        <span className='ml-2 text-gray-600 capitalize'>
                           {product.category === "apple"
                              ? "Măr"
                              : product.category === "pear"
                              ? "Păr"
                              : product.category === "plum"
                              ? "Prun"
                              : product.category === "cherry"
                              ? "Cireș"
                              : product.category === "sour_cherry"
                              ? "Vișin"
                              : product.category === "walnut"
                              ? "Nuc"
                              : product.category === "peach"
                              ? "Piersic"
                              : product.category}
                        </span>
                     </div>
                     <div>
                        <span className='font-medium text-gray-900'>
                           Status:
                        </span>
                        <span
                           className={`ml-2 ${
                              product.inStock
                                 ? "text-green-600"
                                 : "text-red-600"
                           }`}
                        >
                           {product.inStock ? "Disponibil" : "Indisponibil"}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
