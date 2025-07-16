import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminChangePassword = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/${id}/change-password`,
        formData,
        { withCredentials: true }
      );
      setMessage("Password updated successfully!");
      setFormData({ currentPassword: "", newPassword: "" });
    } catch (error) {
      setMessage("Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-[#ffd1c2] rounded-3xl shadow-xl mt-10">
  <h2 className="text-3xl font-extrabold text-center text-[#d85e36] mb-6 tracking-tight">
    Change Password
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    {[
      { label: "Current Password", name: "currentPassword" },
      { label: "New Password", name: "newPassword" },
    ].map(({ label, name }) => (
      <div key={name}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type="password"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
          placeholder={`Enter ${label.toLowerCase()}`}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 transition duration-200"
        />
      </div>
    ))}

    {/* Submit Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 bg-[#e7752e] hover:bg-orange-600 text-white font-semibold rounded-xl shadow-sm transition-all duration-300"
    >
      {loading ? "Updating..." : "Change Password"}
    </button>

    {/* Status Message */}
    {message && (
      <div className="text-center text-sm text-gray-600 mt-3">
        {message}
      </div>
    )}
  </form>
</div>

  );
};

export default AdminChangePassword;
