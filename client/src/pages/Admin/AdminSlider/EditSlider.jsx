import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSlider = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/slider/${id}`);
        setExistingImages(res.data.data.slider.images);
      } catch (err) {
        setMsg("Failed to load slider.");
      }
    };
    if (id) fetchSlider();
  }, [id]);

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
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/admin/slider/${id}/edit`,
        formData,
        {
          withCredentials: true,
        }
      );
      setMsg("Slider updated successfully!");
      setTimeout(() => navigate("/admin/sliders"), 1500);
    } catch (err) {
      setMsg("Failed to update slider.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Edit Slider</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Replace Images (Max 5)
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
          {(images.length ? images : existingImages).map((img, i) => (
            <img
              key={i}
              src={typeof img === "string" ? img : URL.createObjectURL(img)}
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
          {loading ? "Updating..." : "Update Slider"}
        </button>
        {msg && <p className="text-center text-sm text-gray-700">{msg}</p>}
      </form>
    </div>
  );
};

export default EditSlider;
