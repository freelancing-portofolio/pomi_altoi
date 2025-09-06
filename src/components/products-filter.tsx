"use client";

import { Search, ChevronDown } from "lucide-react";

interface ProductsFilterProps {
   categories: string[];
   selectedCategory: string;
   onCategoryChange: (category: string) => void;
   searchTerm: string;
   onSearchChange: (term: string) => void;
   priceSort: string;
   onPriceSortChange: (sort: string) => void;
}

const categoryNames: { [key: string]: string } = {
   all: "Toate Produsele",
   apple: "Meri",
   pear: "Peri",
   plum: "Pruni",
   cherry: "Cireși",
   sour_cherry: "Vișini",
   walnut: "Nuci",
   peach: "Piersici",
};

const sortOptions = [
   { value: "none", label: "Fără sortare" },
   { value: "price_asc", label: "Preț crescător" },
   { value: "price_desc", label: "Preț descrescător" },
   { value: "name_asc", label: "Nume A-Z" },
   { value: "name_desc", label: "Nume Z-A" },
];

export default function ProductsFilter({
   categories,
   selectedCategory,
   onCategoryChange,
   searchTerm,
   onSearchChange,
   priceSort,
   onPriceSortChange,
}: ProductsFilterProps) {
   return (
      <div className='bg-white p-6 rounded-2xl shadow-md mb-8'>
         {/* Search Bar */}
         <div className='relative mb-6'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
               type='text'
               placeholder='Caută produse...'
               value={searchTerm}
               onChange={(e) => onSearchChange(e.target.value)}
               className='w-full pl-10 pr-4 py-3 border border-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
            />
         </div>

         {/* Filters Row */}
         <div className='flex flex-col lg:flex-row gap-6'>
            {/* Category Filters */}
            <div className='flex-1'>
               <h3 className='text-sm font-medium text-gray-700 mb-3'>
                  Categorii
               </h3>
               <div className='flex flex-wrap gap-2'>
                  {categories.map((category) => (
                     <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                           selectedCategory === category
                              ? "bg-green-600 text-black"
                              : "bg-gray-100 text-black hover:bg-gray-200"
                        }`}
                     >
                        {categoryNames[category] || category}
                     </button>
                  ))}
               </div>
            </div>

            {/* Sort Options */}
            <div className='lg:w-64'>
               <h3 className='text-sm font-medium text-gray-700 mb-3'>
                  Sortare
               </h3>
               <div className='relative'>
                  <select
                     value={priceSort}
                     onChange={(e) => onPriceSortChange(e.target.value)}
                     className='w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white'
                  >
                     {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                           {option.label}
                        </option>
                     ))}
                  </select>
                  <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none' />
               </div>
            </div>
         </div>
      </div>
   );
}
