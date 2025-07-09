import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router-dom";
import logo from "../../assets/beyond_blush-logo-BLACK.png";
import { FaHome, FaUser, FaImages, FaPhoneAlt, FaInfoCircle, FaQuestionCircle, FaUserShield } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

const navLinks = [
  { name: "Admin", path: "/admin", icon: <FaUserShield /> },
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/services", icon: <FaUser /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "Faqs", path: "/faqs", icon: <FaQuestionCircle /> },
];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } px-4 py-3`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Center on Mobile */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 object-contain transition duration-300"
          />
        </div>

        {/* Desktop Links */}
        <nav
          className={`hidden lg:flex gap-6 font-medium ${
            isScrolled ? "text-[#582f21]" : "text-[#582f21]"
          }`}
        >
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-pink-400 transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Hamburger or Close Icon */}
        <button
          onClick={toggleDrawer}
          className={`absolute right-4 z-80 text-2xl lg:hidden transition-colors ${
            isScrolled ? "text-[#582f21]" : "text-white"
          }`}
        >
          {isOpen ? (
              <FaTimes className="text-3xl text-[#582f21]" />

          ) : (
            <FaBars className="text-[#582f21]" />
          )}
        </button>
      </div>

      {/* Drawer */}
      <MobileDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Navbar;
