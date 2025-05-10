import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  activeCategory: Category;
  onChangeCategory: (category: Category) => void;
}

export function CategoryFilter({ activeCategory, onChangeCategory }: CategoryFilterProps) {
  const categories: { label: string; value: Category }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Home & Kitchen', value: 'home' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Toys', value: 'toys' },
    { label: 'Sports', value: 'sports' },
  ];
  
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => onChangeCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}