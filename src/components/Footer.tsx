import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Luminvera</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for affordable products. Quality goods at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561999464446" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/luminvera?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/clothing" className="text-gray-400 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/home" className="text-gray-400 hover:text-white transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/products/beauty" className="text-gray-400 hover:text-white transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/products/toys" className="text-gray-400 hover:text-white transition-colors">
                  Toys
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400"> 18 Street, Mera Mripur, Abbottabad</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-400" size={18} />
                <span className="text-gray-400">+92 (0) 333-3551378</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-400" size={18} />
                <span className="text-gray-400">muhammadrashi60776@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lio Go. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
