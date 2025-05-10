import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
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
    <div>
      <Hero />
      
      <FeaturedProducts 
        products={featuredProducts}
        title="Featured Products"
        onQuickView={setQuickViewProduct}
      />
      
      {/* Shop by Category Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Electronics', image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg' },
              { name: 'Clothing', image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg' },
              { name: 'Home', image: 'https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg' },
              { name: 'Beauty', image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg' },
              { name: 'Toys', image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg' },
              { name: 'Sports', image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg' },
            ].map(category => (
              <div key={category.name} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white font-medium text-lg">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
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
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
          <p className="text-xl mb-6">Get an extra 10% off your first order with code: WELCOME10</p>
          <button className="bg-white text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-full font-medium transition-colors">
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