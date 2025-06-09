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
    <div className="group relative bg-cta-text rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
      {/* Product Badge */}
      {isNew && (
        <div className="absolute top-2 left-2 bg-cta text-cta-text text-xs font-semibold py-1 px-2 rounded-full z-10">
          New
        </div>
      )}
      
      {discount && (
        <div className="absolute top-2 right-2 bg-border text-text-primary text-xs font-semibold py-1 px-2 rounded-full z-10">
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
        <div className="absolute inset-0 bg-text-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (onQuickView) onQuickView(product);
            }} 
            className="bg-cta-text text-text-primary p-2 rounded-full hover:bg-highlight transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-cta text-cta-text p-2 rounded-full hover:bg-opacity-90 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-sm sm:text-base font-medium text-text-primary hover:text-heading transition-colors line-clamp-2 min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-border fill-current" />
            <span className="ml-1 text-sm text-text-primary">{rating}</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className="text-lg font-semibold text-text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-text-primary opacity-60 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button (Mobile Friendly) */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full py-2 bg-cta text-cta-text rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}