import React from 'react'
import AdminSideBarLayout from './SideBar/AdminSideBarLayout'
import { Outlet } from 'react-router-dom';

const AdminHome = () => {
  
  return (
    <>
     <div className="flex flex-col md:flex-row gap-6 p-4">

      <AdminSideBarLayout/>
        {/* User Info */}
      <div className="flex-1">
       <Outlet/>
      </div>
     </div>
    </>
  )
}

export default AdminHome
