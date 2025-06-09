import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-heading text-cta-text">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cta-text">Luminvera</h3>
            <p className="text-highlight mb-4">
              Your one-stop shop for affordable products. Quality goods at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561999464446" className="text-highlight hover:text-cta-text transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com" className="text-highlight hover:text-cta-text transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/luminvera?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-highlight hover:text-cta-text transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-highlight hover:text-cta-text transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cta-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-highlight hover:text-cta-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-highlight hover:text-cta-text transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-highlight hover:text-cta-text transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-highlight hover:text-cta-text transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-highlight hover:text-cta-text transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cta-text">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/electronics" className="text-highlight hover:text-cta-text transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/clothing" className="text-highlight hover:text-cta-text transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products/home" className="text-highlight hover:text-cta-text transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/products/beauty" className="text-highlight hover:text-cta-text transition-colors">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="/products/toys" className="text-highlight hover:text-cta-text transition-colors">
                  Toys
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cta-text">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-highlight flex-shrink-0 mt-1" size={18} />
                <span className="text-highlight"> 18 Street, Mera Mripur, Abbottabad</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-highlight" size={18} />
                <span className="text-highlight">+92 (0) 333-3551378</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-highlight" size={18} />
                <span className="text-highlight">luminvera.co@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-highlight">
          <p>© {new Date().getFullYear()} Lio Go. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}