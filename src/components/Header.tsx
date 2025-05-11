import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';
import './header.css'; // Import your custom CSS

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { cart } = useCart();
  const { user, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with image and text */}
          <div className="header-container">
            <img
              src="https://media-hosting.imagekit.io/ee40767cd7f04f13/Lio%20Gi%20Products%20Msacot%20Logo%20Type.png?Expires=1841508802&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ruVU0ekAlw0bWZTRFLA2~Hn23wYvbemNCuMfMqE-FLbSuCEsaAoCuA8H23ORFm1Nimoi9Ij9qq7AvqxKK0o8V5V3Qdk1QhKLSZ8zcKZ3bUm3w-Ul~SrzPt6qhIhiGCXWzQ2PPJwfbsdvDtIweS~hLFFVJYd8mrrVqtNbZ6skBQSsAlZcVftIG51frzVH7fLzKriSCCUSLowaNIo1hz-c02RDFjPnSIHnwtzbiC15iRKF7xuujMgPnc6~8bifkgyJeb-kTyyG09fOaTUDKvGnuEj2RmkZPUhS~ZcyJ0r0jutgJlZFvOe2ebsb4~K2Jm~anY4HsJcvFoUqDhJpxt994A__"
              alt="Lio Gi"
              className="header-logo"
            />
            <Link to="https://liogi-store.vercel.app/">Lio Gi</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-500 transition-colors">All Products</Link>
            <Link to="/products/electronics" className="text-gray-700 hover:text-blue-500 transition-colors">Electronics</Link>
            <Link to="/products/clothing" className="text-gray-700 hover:text-blue-500 transition-colors">Clothing</Link>
            <Link to="/products/home" className="text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Cart and Auth Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAuthClick}
              className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
            >
              <User size={20} />
              <span className="ml-2 hidden sm:inline">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </button>

            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-blue-500 transition-colors" />
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500">Home</Link></li>
              <li><Link to="/products" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500">All Products</Link></li>
              <li><Link to="/products/electronics" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500">Electronics</Link></li>
              <li><Link to="/products/clothing" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500">Clothing</Link></li>
              <li><Link to="/products/home" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-500">Home</Link></li>
            </ul>
          </nav>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}
