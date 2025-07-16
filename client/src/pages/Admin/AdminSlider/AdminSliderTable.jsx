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
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/all-slides`);
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
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/img-slider/${id}/delete`);
      setSliders((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert("Failed to delete slider.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl m-auto font-bold text-[#d95e35]">All Image Slides</h2>
        <button
          className="hover:cursor-pointer flex items-center m-auto md:m-0  gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
          onClick={() => navigate("/admin/add-slider")}
        >
          <FaPlusCircle />
          Add Slider
        </button>
      </div>

      {/* Table Content */}
      {loading ? (
        <p className="text-orange-500 font-medium">Loading sliders...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : sliders.length === 0 ? (
        <p className="text-gray-600">No sliders available.</p>
      ) : (
        <div className=" border border-rose-100 rounded-lg">
          <table className="w-full text-sm text-center text-[#582f21]">
            <thead className="bg-rose-100 text-[#582f21] capitalize text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Slide No</th>
                <th className="px-4 py-3">Slider Images</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="h-max  divide-rose-200 bg-white">
              {sliders.map((slider, index) => (
                <tr
                  key={slider._id}
                  className="hover:bg-rose-50 transition duration-200"
                >
                  <td className="px-4 py-3 text-center">{index + 1}</td>

                  {/* Image Grid Column */}
                  <td className="px-4 py-3">
                    <div className="grid grid-cols-1 max-w-[300px]  gap-2 m-auto   overflow-auto">
                      {slider.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Slide ${i}`}
                          className="w-full h-32 object-cover  rounded-md border"
                        />
                      ))}
                    </div>
                  </td>

                  {/* Delete Button */}
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(slider._id)}
                      className="m-auto flex items-center gap-2  p-3 hover:cursor-pointer bg-red-500 hover:bg-red-600 text-white md:px-5 md:py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
                      aria-label="Delete Slider"
                    >
                   <span className="hidden md:block"> Delete </span>
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSliderTable;
