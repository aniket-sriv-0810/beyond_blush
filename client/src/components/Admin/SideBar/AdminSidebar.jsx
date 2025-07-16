import React from "react";
import {
  FaCoins, FaUser, FaImages, FaCalendarCheck, FaQuestionCircle, FaHome
} from "react-icons/fa";
import { RiBrushAiFill, RiColorFilterAiFill } from "react-icons/ri";
import { IoMailUnread, IoDocumentsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-brown.png";

const navItems = [
  { name: "My Profile", key: "profile", path: "profile", icon: <FaUser /> },
  { name: "Services", key: "services", path: "services", icon: <RiBrushAiFill /> },
  { name: "Cards", key: "cards", path: "cards", icon: <RiColorFilterAiFill /> },
  { name: "Prices", key: "prices", path: "pricing", icon: <FaCoins /> },
  { name: "Contacts", key: "contacts", path: "contacts", icon: <IoMailUnread /> },
  { name: "Bookings", key: "bookings", path: "bookings", icon: <FaCalendarCheck /> },
  { name: "Sliders", key: "sliders", path: "sliders", icon: <FaImages /> },
  { name: "FAQs", key: "faqs", path: "faqs", icon: <FaQuestionCircle /> },
  { name: "Policies", key: "policies", path: "terms-and-cond", icon: <IoDocumentsSharp /> },
  { name: "My Home", key: "home", path: "/", icon: <FaHome /> },
];

const AdminSidebar = () => {
  return (
    <>
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-[#f3d2b3] text-[#582f21] fixed top-0 left-0 shadow-md">
        <div className="p-6  flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <nav className="flex flex-col mt-6 gap-6 px-6">
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
    </>
  );
};

export default AdminSidebar;
