import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../utils/productData';
export const HomePage: React.FC = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Welcome to Hatake TCG
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Premium TCG accessories crafted with passion in Sweden
          </p>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </div>;
};