import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${id}`);
        const { name, email, phone } = res.data.data.user;
        setFormData({ name, email, phone });
      } catch {
        setMessage("Failed to load user data.");
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/${id}/edit`,
        formData,
        { withCredentials: true }
      );
      setMessage("User updated successfully!");
    } catch {
      setMessage("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Edit User Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <label className="block text-sm text-gray-600 mb-1 capitalize">{field}</label>
            <input
              name={field}
              type="text"
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-orange-400"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
        {message && (
          <p className="text-sm mt-2 text-center text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AdminEdit;
