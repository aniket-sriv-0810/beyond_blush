import React, { useState } from 'react';
import AuthInput from './AuthInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false); // <- loading state
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const newErrors = {};

    if (!formData.emailOrPhone) newErrors.emailOrPhone = 'Email or phone is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    try {
      setLoading(true); // <- start spinner
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`, formData);

      if (res.data?.user?.role !== 'admin') {
        setServerError('Access denied. Only admins are allowed.');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      const msg =
        err.response?.data?.message || 'Something went wrong. Please try again.';
      setServerError(msg);
      setLoading(false);
    }
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
        type="text"
        name="emailOrPhone"
        placeholder="Enter Email or Phone"
        value={formData.emailOrPhone}
        onChange={handleChange}
        error={errors.emailOrPhone}
      />

      <AuthInput
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      {serverError && (
        <p className="text-red-600 text-sm text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center items-center gap-2 ${
          loading
            ? 'bg-orange-400 cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700'
        } text-white py-3 rounded-md font-semibold transition duration-300`}
      >
        {loading ? (
          <div className="flex justify-center items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Verifying...
          </div>
        ) : (
          'Verify Credentials'
        )}
      </button>
    </form>
  );
};

export default AuthForm;
