import React, { lazy } from 'react';
import { products } from '../utils/productData';
export const GalleryPage: React.FC = () => {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-bold mb-8 text-center">
        Product Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.flatMap(product => product.images.map((image, index) => <div key={`${product.id}-${index}`} className="aspect-square overflow-hidden rounded-lg">
              <img src={image} alt={`${product.name} - Image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>))}
      </div>
    </div>;
};