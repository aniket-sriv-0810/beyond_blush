import React from 'react';
import fallbackLogo from '../../../assets/profile-admin.jpg';

const UserInfoCard = ({ user }) => {
  const imgSrc = user?.img || fallbackLogo;

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img
        src={imgSrc}
        alt="User"
        className="w-28 h-28 rounded-full object-cover border-4 border-orange-400 shadow-lg"
      />
      <div className="text-center sm:text-left space-y-1">
        <h2 className="text-2xl font-bold text-orange-700">{user?.name}</h2>
        <p className="text-sm text-gray-500 font-medium capitalize">{user?.role}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
