import React from 'react';
import { FaTimes, FaHome, FaUser, FaImages,  FaQuestionCircle,  FaCoins, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/beyond_blush-logo-BLACK.png';
import { RiBrushAiFill, RiColorFilterAiFill } from 'react-icons/ri';
import { IoDocumentsSharp, IoMailUnread } from 'react-icons/io5';

const navItems = [
  { name: 'My Profile',key:'profile', path: '/profile', icon: <FaUser /> },
  { name: 'Services',key:'services', path: '/services', icon: <RiBrushAiFill /> },
  { name: 'Cards',key:'cards', path: '/cards', icon: <RiColorFilterAiFill /> },
  { name: 'Prices',key:'prices', path: '/prices', icon: <FaCoins /> },
  { name: 'Contacts',key:'contacts', path: '/contact', icon: <IoMailUnread /> },
  { name: 'Bookings',key:'bookings', path: '/booking', icon: <FaCalendarCheck  /> },
  { name: 'Sliders',key:'sliders', path: '/sliders', icon: <FaImages /> },
  { name: 'FAQs',key:'faqs', path: '/faqs', icon: <FaQuestionCircle /> },
  { name: 'Policies',key:'policies', path: '/faqs', icon: <IoDocumentsSharp /> },
  { name: 'My Home',key:'home', path: '/', icon: <FaHome /> },
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
