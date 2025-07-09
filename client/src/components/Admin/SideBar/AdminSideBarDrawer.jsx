import React from 'react';
import { FaTimes, FaHome, FaUser, FaImages, FaPhoneAlt, FaInfoCircle, FaQuestionCircle, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/beyond_blush-logo-BLACK.png';

const navItems = [
  { name: 'My Profile', path: '/profile', icon: <FaUser /> },
  { name: 'Dashboard', path: '/admin', icon: <FaUserShield /> },
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'About', path: '/about', icon: <FaInfoCircle /> },
  { name: 'Services', path: '/services', icon: <FaUser /> },
  { name: 'Gallery', path: '/gallery', icon: <FaImages /> },
  { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  { name: 'FAQs', path: '/faqs', icon: <FaQuestionCircle /> },
];

const AdminSidebarDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-white`}>
      <div className="flex justify-between items-center px-4 py-4 border-b shadow-sm">
        <img src={logo} alt="Logo" className="h-10" />
        <button onClick={onClose} className="text-[#582f21] text-2xl">
          <FaTimes />
        </button>
      </div>
      <nav className="flex flex-col p-6 gap-4">
        {navItems.map(({ name, path, icon }) => (
          <Link
            to={path}
            key={name}
            onClick={onClose}
            className="flex items-center gap-3 text-[#582f21] font-medium hover:text-pink-500 transition"
          >
            <span>{icon}</span>
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebarDrawer;
