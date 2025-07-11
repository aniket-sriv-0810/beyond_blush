import React from 'react'
import AdminSideBarLayout from '../../pages/Admin/SideBar/AdminSideBarLayout'
import AdminUserDetails from './AdminPanel/AdminUserDetails'

const AdminHome = () => {
  const userId = "6871087c2b2934eb35f04fff";
  return (
    <>
     <div className="flex flex-col md:flex-row gap-6 p-4">

      <AdminSideBarLayout/>
        {/* User Info */}
      <div className="flex-1">
        <AdminUserDetails userId={userId} />
      </div>
     </div>
    </>
  )
}

export default AdminHome
