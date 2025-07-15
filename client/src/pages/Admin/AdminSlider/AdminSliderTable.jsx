import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminSliderTable = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/all-sliders`);
        setSliders(res.data?.data?.sliders || []);
      } catch (err) {
        setError("Failed to fetch sliders.");
      } finally {
        setLoading(false);
      }
    };
    fetchSliders();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this slider?")) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/slider/${id}/delete`);
      setSliders((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert("Failed to delete slider.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-rose-600">All Sliders</h2>
        <button
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition"
          onClick={() => navigate("/admin/add-slider")}
        >
          <FaPlusCircle />
          Add Slider
        </button>
      </div>

      {loading ? (
        <p className="text-orange-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sliders.map((slider) => (
            <div
              key={slider._id}
              className="border border-rose-100 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {slider.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Slide ${idx}`}
                    className="w-full h-24 object-cover rounded-md"
                  />
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => navigate(`/admin/slider/${slider._id}/edit`)}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(slider._id)}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSliderTable;
