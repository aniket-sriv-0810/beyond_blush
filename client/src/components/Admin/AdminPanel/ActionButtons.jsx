import React from 'react';
import { FaUserEdit, FaKey } from 'react-icons/fa';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <button className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow transition">
        <FaUserEdit />
        Edit Details
      </button>

      <button className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow transition">
        <FaKey />
        Change Password
      </button>
    </div>
  );
};

export default ActionButtons;
