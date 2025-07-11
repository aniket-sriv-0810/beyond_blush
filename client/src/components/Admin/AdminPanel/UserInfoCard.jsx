import React from 'react';
import fallbackLogo from '../../../assets/beyond_blush-logo-BLACK.png';

const UserInfoCard = ({ user }) => {
  const imgSrc = user?.img || fallbackLogo;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <img
        src={imgSrc}
        alt="User"
        className="w-24 h-24 rounded-full object-cover border-4 border-orange-400 shadow-sm"
      />
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold text-orange-700">{user?.name}</h2>
        <p className="text-sm text-gray-600">{user?.role}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
