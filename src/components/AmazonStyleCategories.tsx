import React from 'react';
import { PromotionalBanner } from './PromotionalBanner';
import { CategoryGrid } from './CategoryGrid';

export function AmazonStyleCategories() {
  return (
    <section className="bg-gray-50">
      <PromotionalBanner />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <CategoryGrid />
        </div>
      </div>
    </section>
  );
}