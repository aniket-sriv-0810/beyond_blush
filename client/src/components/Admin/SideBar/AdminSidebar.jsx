import React from 'react';
import { FaHome, FaUser, FaImages, FaPhoneAlt, FaInfoCircle, FaQuestionCircle, FaUserShield } from 'react-icons/fa';
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

const AdminSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-[#f3d2b3] text-[#582f21] fixed top-0 left-0 shadow-md">
      <div className="p-6 border-b flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <nav className="flex flex-col mt-6 gap-4 px-6">
        {navItems.map(({ name, path, icon }) => (
          <Link
            key={name}
            to={path}
            className="flex items-center gap-3 text-lg font-medium hover:text-pink-500 transition"
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
