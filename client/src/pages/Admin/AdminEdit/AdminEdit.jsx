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

    <div className="max-w-xl m-auto p-6  sm:p-8 bg-[#f3d2b3] rounded-3xl shadow-xl mt-20">
  <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6 tracking-tight">
    Edit User Details
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Input Fields */}
    {["name", "email", "phone"].map((field) => (
      <div key={field}>
        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
          {field}
        </label>
        <input
          name={field}
          type={field === "email" ? "email" : "text"}
          value={formData[field]}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800 transition duration-200"
          placeholder={`Enter ${field}`}
        />
      </div>
    ))}

    {/* Submit Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-sm transition-all duration-300"
    >
      {loading ? "Updating..." : "Update"}
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

export default AdminEdit;
