import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminPoliciesTable = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/terms-and-cond`
        );
        setTerms(res.data?.data?.terms || []);
      } catch (err) {
        setError("Failed to load Terms & Conditions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this policy?")) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/terms/${id}/delete`,
        { withCredentials: true }
      );
      setTerms((prev) => prev.filter((term) => term._id !== id));
    } catch (err) {
      alert("Failed to delete policy.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
          Terms & Conditions
        </h2>
        <button
          onClick={() => navigate("/admin/add-terms")}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
        >
          <FaPlusCircle />
          Add Policy
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-orange-500 font-medium">Loading policies...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : terms.length === 0 ? (
        <p className="text-gray-600">No policies available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-orange-200">
          <table className="min-w-full text-sm text-left text-[#582f21]">
            <thead className="bg-orange-100 text-[#582f21] uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Policy</th>
                <th className="px-4 py-3 text-center">Edit</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-200 bg-white">
              {terms.map((term) => (
                <tr
                  key={term._id}
                  className="hover:bg-orange-50 transition duration-200"
                >
                  <td className="px-4 py-3 max-w-[400px] truncate text-[#784d33] font-medium">
                    {term.terms}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/admin/terms/${term._id}/edit`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      aria-label="Edit Term"
                    >
                      <FaEdit size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(term._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Delete Term"
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

export default AdminPoliciesTable;
