import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div 
        onClick={scrollToTop}
        className="bg-gray-700 hover:bg-gray-600 py-3 text-center cursor-pointer transition-colors"
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Get to Know Us */}
            <div>
              <h3 className="font-bold text-white mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Luminvera</Link></li>
                <li><Link to="/investor-relations" className="text-gray-300 hover:text-white">Investor Relations</Link></li>
                <li><Link to="/devices" className="text-gray-300 hover:text-white">Luminvera Devices</Link></li>
                <li><Link to="/science" className="text-gray-300 hover:text-white">Luminvera Science</Link></li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h3 className="font-bold text-white mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sell" className="text-gray-300 hover:text-white">Sell products on Luminvera</Link></li>
                <li><Link to="/sell-apps" className="text-gray-300 hover:text-white">Sell apps on Luminvera</Link></li>
                <li><Link to="/become-affiliate" className="text-gray-300 hover:text-white">Become an Affiliate</Link></li>
                <li><Link to="/advertise" className="text-gray-300 hover:text-white">Advertise Your Products</Link></li>
                <li><Link to="/self-publish" className="text-gray-300 hover:text-white">Self-Publish with Us</Link></li>
                <li><Link to="/host-hub" className="text-gray-300 hover:text-white">Host a Luminvera Hub</Link></li>
              </ul>
            </div>

            {/* Luminvera Payment Products */}
            <div>
              <h3 className="font-bold text-white mb-4">Luminvera Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/business-card" className="text-gray-300 hover:text-white">Luminvera Business Card</Link></li>
                <li><Link to="/shop-points" className="text-gray-300 hover:text-white">Shop with Points</Link></li>
                <li><Link to="/reload-balance" className="text-gray-300 hover:text-white">Reload Your Balance</Link></li>
                <li><Link to="/currency-converter" className="text-gray-300 hover:text-white">Luminvera Currency Converter</Link></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="font-bold text-white mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/covid-19" className="text-gray-300 hover:text-white">Luminvera and COVID-19</Link></li>
                <li><Link to="/account" className="text-gray-300 hover:text-white">Your Account</Link></li>
                <li><Link to="/orders" className="text-gray-300 hover:text-white">Your Orders</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Rates & Policies</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns & Replacements</Link></li>
                <li><Link to="/content-devices" className="text-gray-300 hover:text-white">Manage Your Content and Devices</Link></li>
                <li><Link to="/assistant" className="text-gray-300 hover:text-white">Luminvera Assistant</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white">Help</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* Logo and language */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <div className="bg-orange-500 px-3 py-2 rounded">
                  <span className="text-white font-bold text-xl">Luminvera</span>
                </div>
              </Link>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center border border-gray-600 rounded px-3 py-1 hover:bg-gray-800">
                  <Globe size={16} className="mr-2" />
                  <span className="text-sm">English</span>
                </button>
                
                <button className="flex items-center border border-gray-600 rounded px-3 py-1 hover:bg-gray-800">
                  <span className="text-sm">$ USD - U.S. Dollar</span>
                </button>
                
                <button className="flex items-center border border-gray-600 rounded px-3 py-1 hover:bg-gray-800">
                  <span className="text-sm">🇺🇸 United States</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* International sites */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-xs text-gray-400">
              <Link to="/au" className="hover:text-white">Luminvera Australia</Link>
              <Link to="/br" className="hover:text-white">Luminvera Brazil</Link>
              <Link to="/ca" className="hover:text-white">Luminvera Canada</Link>
              <Link to="/cn" className="hover:text-white">Luminvera China</Link>
              <Link to="/fr" className="hover:text-white">Luminvera France</Link>
              <Link to="/de" className="hover:text-white">Luminvera Germany</Link>
              <Link to="/in" className="hover:text-white">Luminvera India</Link>
              <Link to="/it" className="hover:text-white">Luminvera Italy</Link>
              <Link to="/jp" className="hover:text-white">Luminvera Japan</Link>
              <Link to="/mx" className="hover:text-white">Luminvera Mexico</Link>
              <Link to="/nl" className="hover:text-white">Luminvera Netherlands</Link>
              <Link to="/pl" className="hover:text-white">Luminvera Poland</Link>
              <Link to="/sg" className="hover:text-white">Luminvera Singapore</Link>
              <Link to="/es" className="hover:text-white">Luminvera Spain</Link>
              <Link to="/tr" className="hover:text-white">Luminvera Turkey</Link>
              <Link to="/ae" className="hover:text-white">Luminvera UAE</Link>
              <Link to="/uk" className="hover:text-white">Luminvera UK</Link>
            </div>
          </div>
          
          {/* Copyright and legal */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <div className="flex flex-wrap justify-center space-x-6 text-xs text-gray-400 mb-4">
              <Link to="/conditions" className="hover:text-white">Conditions of Use</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Notice</Link>
              <Link to="/interest-ads" className="hover:text-white">Interest-Based Ads</Link>
            </div>
            <p className="text-xs text-gray-400">
              © 1996-{new Date().getFullYear()}, Luminvera.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}