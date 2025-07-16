import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../../assets/logo-brown.png';
import AdminSidebarDrawer from './AdminSideBarDrawer';

const AdminNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 bg-[#f3d2b3] shadow-md z-50 lg:hidden">
        <img src={logo} alt="Logo" className="h-10 mx-auto" />
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-[#582f21] text-2xl"
        >
          <FaBars />
        </button>
      </header>
      <AdminSidebarDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default AdminNavbar;
