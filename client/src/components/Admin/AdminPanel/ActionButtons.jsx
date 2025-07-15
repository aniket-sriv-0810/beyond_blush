import React from 'react';
import { FaUserEdit, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const ActionButtons = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center sm:justify-start">
      <button 
      onClick={() => {navigate(`/admin/${user._id}/edit`)}}
      className="flex items-center justify-center gap-2 px-5 py-2 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition duration-200">

        <FaUserEdit />
        Edit Details
      </button>

      <button 
      onClick={() => {navigate(`/admin/${user._id}/change-password`)}}
      className="flex items-center justify-center gap-2 px-5 py-2 w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full shadow-md transition duration-200">
        <FaKey />
        Change Password
      </button>
    </div>
  );
};

export default ActionButtons;
