import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-brown.png";

const MobileDrawer = ({ isOpen, toggleDrawer, navLinks }) => {

  return (
    <div
      className={`fixed top-0 right-0 w-full h-max bg-white text-[#582f21] transform transition-transform duration-300 ease-in-out z-40 ${
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
        <nav className="flex flex-col gap-8 items-center mt-12 text-lg font-semibold px-4">
          {navLinks.map(({ name, path, icon }) => (
            <Link
              key={name}
              to={path}
              onClick={toggleDrawer}
              className="flex items-center hover:cursor-pointer gap-3 text-[#582f21] hover:text-[#582f21] transition-colors"
            >
              <span className="text-xl">{icon}</span>
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-9 gap-6 text-xl  text-[#582f21]">
          <Link
            to="https://www.instagram.com/beyondblushbytamanna?igsh=MXQxOTd2Y3B3OGRrMg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram/>
          </Link>

          <Link
            to="https://www.facebook.com/share/1CNvmNQTo2/?mibextid=wwXIfr"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <a
            href="mailto:beyondblushbytamanna@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
