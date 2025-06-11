import React from 'react';
import { Gift, Heart } from 'lucide-react';

export function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          <Gift className="text-white" size={24} />
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold">Father's Day Special</h2>
            <p className="text-sm md:text-base">Up to 50% off on gifts for Dad - Limited time offer!</p>
          </div>
          <Heart className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
}