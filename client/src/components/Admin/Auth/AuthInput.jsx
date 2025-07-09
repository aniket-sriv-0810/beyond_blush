
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLock } from 'react-icons/fa';

const iconMap = {
  email: <FaEnvelope className="text-orange-500" />,
  phone: <FaPhoneAlt className="text-orange-500" />,
  password: <FaLock className="text-orange-500" />,
};

const AuthInput = ({ type, name, placeholder, value, onChange }) => (
  <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 ring-orange-400 transition">
    {iconMap[name]}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="ml-3 w-full outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
    />
  </div>
);

export default AuthInput;
