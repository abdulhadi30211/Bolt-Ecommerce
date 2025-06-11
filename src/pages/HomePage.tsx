import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { AmazonStyleCategories } from '../components/AmazonStyleCategories';
import { QuickViewModal } from '../components/QuickViewModal';
import { Product } from '../types';
import { products } from '../data/products';

export function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew);
  const discountedProducts = products
    .filter(product => product.discount)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0));
  
  return (
    <div className="bg-bg-primary">
      <Hero />
      
      <FeaturedProducts 
        products={featuredProducts}
        title="Featured Products"
        onQuickView={setQuickViewProduct}
      />
      
      {/* Amazon-style Categories Section */}
      <AmazonStyleCategories />
      
      <FeaturedProducts 
        products={newArrivals}
        title="New Arrivals"
        onQuickView={setQuickViewProduct}
      />
      
      <FeaturedProducts 
        products={discountedProducts}
        title="Top Deals"
        onQuickView={setQuickViewProduct}
      />
      
      {/* Promotional Banner */}
      <div className="bg-border text-text-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-heading">Special Offer!</h2>
          <p className="text-xl mb-6">Get an extra 10% off your first order with code: WELCOME10</p>
          <button className="bg-cta text-cta-text hover:bg-opacity-90 px-6 py-3 rounded-full font-medium transition-colors">
            Shop Now
          </button>
        </div>
      </div>
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}