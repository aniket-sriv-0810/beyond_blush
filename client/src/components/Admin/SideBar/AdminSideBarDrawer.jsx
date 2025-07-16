import React from 'react';
import { FaTimes, FaHome, FaUser, FaImages,  FaQuestionCircle,  FaCoins, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-brown.png';
import { RiBrushAiFill, RiColorFilterAiFill } from 'react-icons/ri';
import { IoDocumentsSharp, IoMailUnread } from 'react-icons/io5';

const navItems = [
  { name: 'My Profile',key:'profile', path: 'profile', icon: <FaUser /> },
  { name: 'My Services',key:'services', path: 'services', icon: <RiBrushAiFill /> },
  { name: 'My Cards',key:'cards', path: 'cards', icon: <RiColorFilterAiFill /> },
  { name: 'My Prices',key:'prices', path: 'pricing', icon: <FaCoins /> },
  { name: 'My Contacts',key:'contacts', path: 'contacts', icon: <IoMailUnread /> },
  { name: 'My Bookings',key:'bookings', path: 'bookings', icon: <FaCalendarCheck  /> },
  { name: 'My Sliders',key:'sliders', path: 'sliders', icon: <FaImages /> },
  { name: 'FAQs',key:'faqs', path: 'faqs', icon: <FaQuestionCircle /> },
  { name: 'Policies',key:'policies', path: 'terms-and-cond', icon: <IoDocumentsSharp /> },
  { name: 'My Home',key:'home', path: '/', icon: <FaHome /> },
];

const AdminSidebarDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`h-max pb-10 fixed inset-0 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#edd4bb]`}>
      <div className="flex justify-between items-center px-4 py-4  ">
        <img src={logo} alt="Logo" className="h-12 mx-auto" />
        <button onClick={onClose} className="text-[#582f21] text-2xl">
          <FaTimes />
        </button>
      </div>
      <nav className=" flex flex-col items-center p-4 gap-6">
        {navItems.map(({ name, path, icon }) => (
          <Link
            to={path}
            key={name}
            onClick={onClose}
            className="flex items-center gap-3 text-[#582f21] font-medium hover:text-orange-500 transition"
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
