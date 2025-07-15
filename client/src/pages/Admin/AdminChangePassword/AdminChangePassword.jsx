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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Current Password", name: "currentPassword" },
          { label: "New Password", name: "newPassword" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm text-gray-600 mb-1">{label}</label>
            <input
              type="password"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-orange-400"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Change Password"}
        </button>
        {message && (
          <p className="text-sm mt-2 text-center text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AdminChangePassword;
