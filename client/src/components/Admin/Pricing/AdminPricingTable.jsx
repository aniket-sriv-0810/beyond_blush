import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaPlusCircle, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminPricingTable = () => {
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch all pricing
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/all-prices`,
         
        );
        setPricing(res.data?.data?.prices || []);
      } catch (err) {
        setError("Failed to load pricing.");
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  // Delete pricing entry
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this pricing?")) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/price/${id}/delete`,
        { withCredentials: true }
      );
      setPricing((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Failed to delete pricing.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-600">
          All Pricing
        </h2>
        <button
          onClick={() => navigate("/admin/add-pricing")}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
        >
          <FaPlusCircle />
          Add Pricing
        </button>
      </div>

      {/* Table / Feedback */}
      {loading ? (
        <p className="text-orange-500 font-medium">Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : pricing.length === 0 ? (
        <p className="text-gray-600">No pricing data available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-rose-100">
          <table className="min-w-full text-sm text-left text-[#582f21]">
            <thead className="bg-rose-100 text-[#582f21] uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Sr. No</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-center">Edit</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-200 bg-white">
              {pricing.map((item, index) => (
                <tr key={item._id} className="hover:bg-rose-50 transition duration-200">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium max-w-[200px] truncate">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-1 text-[#dc5e43] font-semibold">
                    <FaRupeeSign size={12} />
                    {item.price}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/admin/price/${item._id}/edit`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      aria-label="Edit pricing"
                    >
                      <FaEdit size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Delete pricing"
                    >
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

export default AdminPricingTable;
