import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  items: Array<{
    name: string;
    image: string;
    link: string;
  }>;
  mainImage?: string;
  link: string;
}

function CategoryCard({ title, items, mainImage, link }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      
      {mainImage ? (
        <div className="mb-4">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {items.slice(0, 4).map((item, index) => (
            <Link key={index} to={item.link} className="group">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <p className="text-sm text-gray-700 mt-1 group-hover:text-orange-600">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
      
      <Link
        to={link}
        className="text-blue-600 hover:text-orange-600 text-sm font-medium hover:underline"
      >
        Shop now
      </Link>
    </div>
  );
}

export function CategorySection() {
  const categories = [
    {
      title: "Gaming accessories",
      link: "/products/electronics",
      items: [
        {
          name: "Headsets",
          image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
          link: "/products/electronics"
        },
        {
          name: "Keyboards",
          image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
          link: "/products/electronics"
        },
        {
          name: "Computer mice",
          image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
          link: "/products/electronics"
        },
        {
          name: "Chairs",
          image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
          link: "/products/electronics"
        }
      ]
    },
    {
      title: "Shop for your home",
      link: "/products/home",
      items: [
        {
          name: "Cleaning supplies",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
          link: "/products/home"
        },
        {
          name: "Home storage",
          image: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg",
          link: "/products/home"
        },
        {
          name: "Kitchen essentials",
          image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
          link: "/products/home"
        },
        {
          name: "Bathroom needs",
          image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg",
          link: "/products/home"
        }
      ]
    },
    {
      title: "Health & Personal Care",
      link: "/products/beauty",
      items: [
        {
          name: "Supplements",
          image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
          link: "/products/beauty"
        },
        {
          name: "Skincare",
          image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
          link: "/products/beauty"
        },
        {
          name: "Personal care",
          image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
          link: "/products/beauty"
        },
        {
          name: "Wellness",
          image: "https://images.pexels.com/photos/4498555/pexels-photo-4498555.jpeg",
          link: "/products/beauty"
        }
      ]
    },
    {
      title: "Fashion trends you like",
      link: "/products/clothing",
      items: [
        {
          name: "Dresses",
          image: "https://ik.imagekit.io/123e/download.jpg?updatedAt=1749461277742",
          link: "/products/clothing"
        },
        {
          name: "Knits",
          image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
          link: "/products/clothing"
        },
        {
          name: "Jackets",
          image: "https://ik.imagekit.io/123e/download%20(1).jpg?updatedAt=1749461277936",
          link: "/products/clothing"
        },
        {
          name: "Jewelry",
          image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg",
          link: "/products/clothing"
        }
      ]
    },
    {
      title: "Electronics",
      mainImage: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      link: "/products/electronics",
      items: []
    },
    {
      title: "Beauty picks",
      mainImage: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
      link: "/products/beauty",
      items: []
    },
    {
      title: "Discover fashion trends",
      mainImage: "https://ik.imagekit.io/123e/download.jpg?updatedAt=1749461277742",
      link: "/products/clothing",
      items: []
    },
    {
      title: "Home refresh ideas",
      mainImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      link: "/products/home",
      items: []
    }
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              items={category.items}
              mainImage={category.mainImage}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}