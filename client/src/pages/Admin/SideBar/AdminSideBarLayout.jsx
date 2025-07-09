import React from 'react';
import AdminNavbar from '../../../components/Admin/SideBar/AdminNavbar'
import AdminSidebar from '../../../components/Admin/SideBar/AdminSideBar';


const AdminSideBarLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 lg:ml-64">
        <AdminNavbar />
        <main className="pt-20 px-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminSideBarLayout;
