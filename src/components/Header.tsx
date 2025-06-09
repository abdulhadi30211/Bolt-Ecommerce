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
    <header className="sticky top-0 bg-bg-primary shadow-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with image and text */}
          <div className="header-container">
            <img
              src="https://ik.imagekit.io/123e/e71120f7-502c-4301-a02d-b1e49de0bf99.jpg?updatedAt=1749098718933"
              alt="Luminvera"
              className="header-logo"
            />
            <Link to="https://liogi-store.vercel.app/" className="text-heading font-bold text-xl">Luminvera</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-text-primary hover:text-heading transition-colors">Home</Link>
            <Link to="/products" className="text-text-primary hover:text-heading transition-colors">All Products</Link>
            <Link to="/products/electronics" className="text-text-primary hover:text-heading transition-colors">Electronics</Link>
            <Link to="/products/clothing" className="text-text-primary hover:text-heading transition-colors">Clothing</Link>
            <Link to="/products/home" className="text-text-primary hover:text-heading transition-colors">Home</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-primary hover:text-cta"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Cart and Auth Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAuthClick}
              className="flex items-center text-text-primary hover:text-heading transition-colors"
            >
              <User size={20} />
              <span className="ml-2 hidden sm:inline">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </button>

            <Link to="/cart" className="relative">
              <ShoppingCart className="text-text-primary hover:text-heading transition-colors" />
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-cta text-cta-text text-xs w-5 h-5 flex items-center justify-center rounded-full">
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
              className="w-full px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-cta bg-bg-primary text-text-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-primary hover:text-cta"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-text-primary hover:text-heading">Home</Link></li>
              <li><Link to="/products" onClick={() => setIsMenuOpen(false)} className="block py-2 text-text-primary hover:text-heading">All Products</Link></li>
              <li><Link to="/products/electronics" onClick={() => setIsMenuOpen(false)} className="block py-2 text-text-primary hover:text-heading">Electronics</Link></li>
              <li><Link to="/products/clothing" onClick={() => setIsMenuOpen(false)} className="block py-2 text-text-primary hover:text-heading">Clothing</Link></li>
              <li><Link to="/products/home" onClick={() => setIsMenuOpen(false)} className="block py-2 text-text-primary hover:text-heading">Home</Link></li>
            </ul>
          </nav>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}