import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo-brown.png';

const Footer = () => {
  return (
    <footer className="bg-[#f3d2b3] text-[#582f21] -mb-6 py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
          <p className="text-sm italic max-w-xs">Empowering beauty & confidence through elegant makeup artistry.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">Quick Links</h4>
          <ul className="space-y-2 flex gap-4 justify-center lg:flex-col">
            {['Home', 'About', 'Services', 'Faqs', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#8d4b2f] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-center mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
           <li className="flex items-center  gap-3">
              <FaPhoneAlt className="text-[#8d4b2f]" />
              +91 9876543210
            </li>
            <li className="flex items-center  gap-3">
              <FaEnvelope className="text-[#8d4b2f]" />
              hello@beyondblush.com
            </li>
            <li className="flex items-center  gap-3">
              <FaMapMarkerAlt className="text-[#8d4b2f]" />
              123 Blush Lane, Beauty City, BL 10200
            </li>
           
            
          </ul>
        </div>

        {/* Newsletter or Social/Extra */}
        <div>
          <h4 className="text-lg font-semibold text-center mb-4">Stay Connected</h4>
          <p className="text-sm mb-4">Follow us on social platforms for latest updates and styles.</p>
          {/* You can later add social icons or newsletter */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d9a87c] mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Beyond Blush. All rights reserved. <br className="sm:hidden" />
        Developed with ❤️ by <span className="font-semibold">Aniket Srivastava</span>
      </div>
    </footer>
  );
};

export default Footer;
