// pages/AdminAuthPage.jsx
import React from 'react';
import AuthForm from './AuthForm';
import logo from '../../../assets/beyond_blush-logo-BLACK.png';
const AdminAuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
        {/* Logo + Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <img src={logo} alt="Logo" className="h-20 object-contain" />
          <h1 className="text-3xl font-bold text-orange-700">Welcome Admin</h1>
          <p className="text-sm text-gray-700 max-w-sm">
            Please login to access the admin dashboard and manage your content.
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPage;
