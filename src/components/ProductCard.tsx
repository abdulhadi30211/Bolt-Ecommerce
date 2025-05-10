import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const { id, name, price, originalPrice, image, rating, isNew, discount } = product;
  
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Badge */}
      {isNew && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-full z-10">
          New
        </div>
      )}
      
      {discount && (
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded-full z-10">
          {discount}% OFF
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Quick Actions Overlay (visible on hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (onQuickView) onQuickView(product);
            }} 
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-sm sm:text-base font-medium text-gray-800 hover:text-blue-500 transition-colors line-clamp-2 min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button (Mobile Friendly) */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}