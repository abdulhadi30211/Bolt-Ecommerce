import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-cta text-cta-text overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cta-text"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cta-text"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-cta-text">
              Unbeatable Deals on<br />Everything You Love
            </h1>
            <p className="text-lg md:text-xl text-highlight mb-8 max-w-lg mx-auto md:mx-0">
              Shop thousands of high-quality products at prices you won't believe. New items added daily!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/products" 
                className="bg-cta-text text-cta hover:bg-highlight px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/deals" 
                className="bg-transparent border-2 border-cta-text hover:bg-cta-text hover:text-cta px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                Today's Deals
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative bg-cta-text p-4 rounded-lg shadow-xl transform rotate-3 transition-transform hover:rotate-0 duration-300">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                alt="Online shopping"
                className="rounded w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-border text-text-primary font-bold py-2 px-4 rounded-full transform rotate-12">
                Up to 70% OFF!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}