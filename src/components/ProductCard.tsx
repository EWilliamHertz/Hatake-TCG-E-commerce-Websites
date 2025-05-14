import React, { lazy } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
import { Product } from '../utils/productData';
interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };
  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
  };
  return <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col" data-name={product.name} data-price={product.price} data-stock={product.stock} data-release-date={product.releaseDate}>
      <div className="relative pb-[75%] overflow-hidden">
        <img src={product.images[0]} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-heading font-bold mb-1">{product.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-amber-600'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Preorder'}
          </p>
        </div>
        <div className="mb-4">
          <CountdownTimer targetDate={product.releaseDate} />
        </div>
        <div className="mt-auto flex space-x-2">
          <button onClick={handleAddToCart} className="flex-1 btn-primary flex items-center justify-center">
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
          <button onClick={handleAddToWishlist} className="btn-secondary p-2" aria-label="Add to Wishlist">
            <HeartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
};