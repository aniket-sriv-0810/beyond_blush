import React from 'react';

const FormGroup = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 bg-gray-100 focus:outline-none transition"
    />
  </div>
);

const InfoGrid = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormGroup label="Admin ID" value={user?._id} />
      <FormGroup label="Phone" value={user?.phone} />
      <FormGroup label="Email" value={user?.email} />
      <FormGroup label="Role" value={user?.role} />
    </div>
  );
};

export default InfoGrid;
