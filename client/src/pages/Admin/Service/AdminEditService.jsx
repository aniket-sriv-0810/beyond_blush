import React, { useEffect, useState } from "react";
import axios from "axios";
import ImagePreview from "../../../components/ImagePreview/ImagePreview";
import { useParams, useNavigate } from "react-router-dom";

const AdminEditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/service/${id}`);
        const service = res.data?.data?.service;
        setTitle(service?.title || "");
        setExistingImage(service?.image || "");
      } catch (err) {
        console.error("Failed to load service.");
        setMsg("Failed to load service details.");
      }
    };

    if (id) fetchService();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData();
    formData.append("title", title);
    if (image) formData.append("image", image);

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/admin/service/${id}/edit`,
        formData,
        {
          withCredentials: true,
        }
      );
      setMsg("Service updated successfully!");
      setTimeout(() => navigate("/admin/services"), 1500);
    } catch (err) {
      setMsg("Failed to update service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
        Edit Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Service Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter service title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-orange-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload New Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700 file:bg-orange-400 file:hover:bg-orange-500 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none cursor-pointer"
          />
        </div>

        {/* Image Preview */}
        <ImagePreview image={image || existingImage} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
        >
          {loading ? "Updating..." : "Update Service"}
        </button>

        {/* Message */}
        {msg && (
          <p className="text-center text-sm text-gray-700 mt-2">{msg}</p>
        )}
      </form>
    </div>
  );
};

export default AdminEditService;
