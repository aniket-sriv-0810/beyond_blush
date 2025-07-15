import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSlider = () => {
  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData();
    images.forEach((img) => formData.append("images", img));

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/add-img-slider`, formData, {
        withCredentials: true,
      });
      setMsg("Slider created successfully!");
      setTimeout(() => navigate("/admin/sliders"), 1500);
    } catch (err) {
      setMsg("Failed to create slider.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Add Slider</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload up to 5 images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full border file:bg-orange-400 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={URL.createObjectURL(img)}
              alt={`preview-${i}`}
              className="rounded-md object-cover h-24 border"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
        >
          {loading ? "Uploading..." : "Create Slider"}
        </button>
        {msg && <p className="text-center text-sm text-gray-700">{msg}</p>}
      </form>
    </div>
  );
};

export default AddSlider;
