// components/AuthForm.jsx
import React, { useState } from 'react';
import AuthInput from './AuthInput';

const AuthForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg backdrop-blur-md"
    >
      <h2 className="text-2xl font-bold text-center text-orange-700 mb-4">
        Admin Login
      </h2>
      <AuthInput
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <AuthInput
        type="tel"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <AuthInput
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default AuthForm;
