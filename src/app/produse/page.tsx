"use client";

import { useState, useMemo } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductsFilter from "../../components/products-filter";
import ProductCard from "../../components/product-card";
import ProductModal from "../../components/product-modal";
import productsData from "../../data/products.json";

interface Product {
   id: number;
   name: string;
   category: string;
   description: string;
   price: number;
   inStock: boolean;
}

export default function ProductsPage() {
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [searchTerm, setSearchTerm] = useState("");
   const [priceSort, setPriceSort] = useState("none");
   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const products: Product[] = productsData.products;

   // Get unique categories
   const categories = useMemo(() => {
      const uniqueCategories = Array.from(
         new Set(products.map((p) => p.category))
      );
      return ["all", ...uniqueCategories];
   }, [products]);

   // Filter and sort products
   const filteredAndSortedProducts = useMemo(() => {
      const filtered = products.filter((product) => {
         const matchesCategory =
            selectedCategory === "all" || product.category === selectedCategory;
         const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description
               .toLowerCase()
               .includes(searchTerm.toLowerCase());
         return matchesCategory && matchesSearch;
      });

      // Apply sorting
      if (priceSort === "price_asc") {
         filtered.sort((a, b) => a.price - b.price);
      } else if (priceSort === "price_desc") {
         filtered.sort((a, b) => b.price - a.price);
      } else if (priceSort === "name_asc") {
         filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (priceSort === "name_desc") {
         filtered.sort((a, b) => b.name.localeCompare(a.name));
      }

      return filtered;
   }, [products, selectedCategory, searchTerm, priceSort]);

   const handleProductClick = (product: Product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null);
   };

   return (
      <div className='min-h-screen bg-gray-50'>
         <Navbar />

         <main className='mx-auto max-w-site px-6 xl:px-15 py-16'>
            {/* Page Header */}
            <div className='text-center mb-12'>
               <h1 className='text-4xl font-bold text-green-800 mb-4'>
                  Produsele Noastre
               </h1>
               <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                  Descoperă varietatea noastră completă de pomi fructiferi
                  altoiți, crescuți cu grijă în pepiniera noastră pentru a-ți
                  oferi cele mai bune rezultate.
               </p>
            </div>

            {/* Filters */}
            <ProductsFilter
               categories={categories}
               selectedCategory={selectedCategory}
               onCategoryChange={setSelectedCategory}
               searchTerm={searchTerm}
               onSearchChange={setSearchTerm}
               priceSort={priceSort}
               onPriceSortChange={setPriceSort}
            />

            {/* Results Count */}
            <div className='mb-6'>
               <p className='text-gray-600'>
                  {filteredAndSortedProducts.length}{" "}
                  {filteredAndSortedProducts.length === 1
                     ? "produs găsit"
                     : "produse găsite"}
                  {searchTerm && ` pentru "${searchTerm}"`}
               </p>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                  {filteredAndSortedProducts.map((product) => (
                     <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleProductClick(product)}
                     />
                  ))}
               </div>
            ) : (
               <div className='text-center py-16'>
                  <div className='text-gray-400 mb-4'>
                     <svg
                        className='mx-auto h-16 w-16'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={1}
                           d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33'
                        />
                     </svg>
                  </div>
                  <h3 className='text-xl font-medium text-gray-900 mb-2'>
                     Nu am găsit produse
                  </h3>
                  <p className='text-gray-500'>
                     Încearcă să modifici filtrele sau termenul de căutare.
                  </p>
               </div>
            )}
         </main>

         {/* Product Modal */}
         <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
         />

         <Footer />
      </div>
   );
}
