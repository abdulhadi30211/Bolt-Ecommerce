import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  items?: string[];
}

function CategoryCard({ title, subtitle, image, link, size = 'medium', items }: CategoryCardProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-1'
  };

  return (
    <Link to={link} className={`${sizeClasses[size]} group`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 h-full border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mb-4">{subtitle}</p>}
        
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {items && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {items.slice(0, 4).map((item, index) => (
                <span key={index} className="hover:text-orange-600 cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center text-orange-600 font-medium text-sm group-hover:text-orange-700">
          <span>Shop now</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function CategoryGrid() {
  const categories = [
    {
      title: "Shop for your home essentials",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      link: "/products/home",
      items: ["Cleaning supplies", "Home storage", "Kitchen essentials", "Bathroom needs"]
    },
    {
      title: "Get your game on",
      subtitle: "Gaming accessories & more",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      link: "/products/electronics",
      items: ["Gaming headsets", "Controllers", "Gaming chairs", "Keyboards & mice"]
    },
    {
      title: "Shop Fashion for men",
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      link: "/products/clothing",
      items: ["Shirts", "Pants", "Shoes", "Accessories"]
    },
    {
      title: "Top categories in Kitchen",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      link: "/products/home",
      items: ["Cookware", "Small appliances", "Storage", "Dining"]
    },
    {
      title: "New home arrivals",
      subtitle: "Discover the latest",
      image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg",
      link: "/products/home",
      items: ["Furniture", "Decor", "Lighting", "Textiles"]
    },
    {
      title: "Toys under $25",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg",
      link: "/products/toys",
      items: ["Action figures", "Educational toys", "Board games", "Outdoor toys"]
    },
    {
      title: "Beauty & Personal Care",
      image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
      link: "/products/beauty",
      items: ["Skincare", "Makeup", "Hair care", "Fragrances"]
    },
    {
      title: "Electronics & Tech",
      subtitle: "Latest gadgets",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      link: "/products/electronics",
      items: ["Smartphones", "Laptops", "Headphones", "Smart home"]
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              subtitle={category.subtitle}
              image={category.image}
              link={category.link}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}