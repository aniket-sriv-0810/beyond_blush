import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/beyond_blush-logo-BLACK.png";

const MobileDrawer = ({ isOpen, toggleDrawer, navLinks }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-max bg-green-700 text-[#582f21] transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 -mb-5 w-max object-contain"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 items-center mt-12 text-lg font-semibold px-4">
          {navLinks.map(({ name, path, icon }) => (
            <Link
              key={name}
              to={path}
              onClick={toggleDrawer}
              className="flex items-center gap-3 text-[#582f21] hover:text-pink-600 transition-colors"
            >
              <span className="text-xl">{icon}</span>
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-[#582f21]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
