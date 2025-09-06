"use client";

interface Product {
   id: number;
   name: string;
   category: string;
   description: string;
   price: number;
   inStock: boolean;
}

interface ProductCardProps {
   product: Product;
   onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
   return (
      <div
         onClick={onClick}
         className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1'
      >
         {/* White background placeholder for image */}
         <div className='w-full h-48 bg-gray-50 flex items-center justify-center border-b relative overflow-hidden'>
            <div className='text-center'>
               <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <svg
                     className='w-8 h-8 text-green-600'
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
               <p className='text-gray-400 text-sm'>Click pentru detalii</p>
            </div>

            {/* Stock status overlay */}
            <span
               className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                  product.inStock
                     ? "bg-green-100 text-green-800"
                     : "bg-red-100 text-red-800"
               }`}
            >
               {product.inStock ? "În stoc" : "Epuizat"}
            </span>
         </div>

         <div className='p-6'>
            <h3 className='font-bold text-xl text-black mb-2 line-clamp-1'>
               {product.name}
            </h3>

            <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
               {product.description}
            </p>

            <div className='flex justify-between items-center'>
               <span className='text-2xl font-bold text-green-600'>
                  {product.price} RON
               </span>
               <div className='text-green-600 hover:text-green-700 font-medium text-sm'>
                  Vezi detalii →
               </div>
            </div>
         </div>
      </div>
   );
}
