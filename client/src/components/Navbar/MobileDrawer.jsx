import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/beyond_blush-logo-BLACK.png';

const MobileDrawer = ({ isOpen, toggleDrawer, navLinks }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 text-white transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col justify-between h-full p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 items-center mt-12 text-lg font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={toggleDrawer}
              className="hover:text-pink-400 cursor-pointer transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-pink-400">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
