import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileDrawer from './MobileDrawer';
import { Link } from 'react-router-dom';
import logo from '../../assets/beyond_blush-logo-BLACK.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Admin', path: '/admin' },
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Faqs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Center for small screens */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img src={logo} alt="Logo" className="h-10 sm:h-12 object-contain" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-6 font-medium text-[#582f21]">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-pink-400 cursor-pointer transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleDrawer}
          className="absolute right-4 text-white text-xl lg:hidden"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer */}
      <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} navLinks={navLinks} />
    </header>
  );
};

export default Navbar;
