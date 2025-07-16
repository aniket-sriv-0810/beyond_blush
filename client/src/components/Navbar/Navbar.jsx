import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-brown.png";
import {
  FaHome,
  FaUser,
  FaPhoneAlt,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaUser /> },
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
  const fadeInUp = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const fadeInDown = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-gradient-to-bl from-[#ea8b85] to-[#dba05b]"
      } px-4 py-3`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo Center on Mobile */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link to="/">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              src={logo}
              alt="Logo"
              className="h-10 sm:h-12 object-contain transition duration-300"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className={`hidden lg:flex gap-6 font-semibold ${
            isScrolled ? "text-[#582f21]" : "text-white"
          }`}
        >
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className=" hover:scale-110 hover:font-semibold hover:text-shadow-amber-300 transition-colors"
            >
              {name}
            </Link>
          ))}
        </motion.nav>

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
