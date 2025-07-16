import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminFaqTable = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/faqs`
        );
        setFaqs(res.data?.data?.faqs || []);
      } catch (err) {
        setError("Failed to load FAQs.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this FAQ?");
    if (!confirm) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/faq/${id}/delete`,
        { withCredentials: true }
      );
      setFaqs((prev) => prev.filter((faq) => faq._id !== id));
    } catch (err) {
      alert("Failed to delete FAQ.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
          Frequently Asked Questions
        </h2>
      </div>

      {loading ? (
        <p className="text-orange-500 font-medium">Loading FAQs...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : faqs.length === 0 ? (
        <p className="text-gray-600">No FAQs available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-orange-200">
          <table className="min-w-full text-sm text-left text-[#582f21]">
            <thead className="bg-orange-100 text-[#582f21] uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Ques</th>
                <th className="px-4 py-3">Ans</th>
                <th className="px-4 py-3 text-center">Edit</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-200 bg-white">
              {faqs.map((faq) => (
                <tr key={faq._id} className="hover:bg-orange-50 transition">
                  <td className="px-4 py-3 font-medium max-w-[200px] truncate">
                    {faq.ques}
                  </td>
                  <td className="px-4 py-3 max-w-[300px] truncate text-[#784d33]">
                    {faq.ans}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/admin/faq/${faq._id}/edit`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      aria-label="Edit FAQ"
                    >
                      <FaEdit size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(faq._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Delete FAQ"
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

export default AdminFaqTable;
