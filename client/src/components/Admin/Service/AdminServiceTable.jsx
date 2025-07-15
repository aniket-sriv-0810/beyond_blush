import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminServiceTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Fetch all services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/all-services`,
          {
            withCredentials: true,
          }
        );
        setServices(res.data?.data?.services || []);
      } catch (err) {
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Delete a service
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/service/${id}/delete`,
        {
          withCredentials: true,
        }
      );
      setServices((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert("Failed to delete service.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-600">
          All Services
        </h2>
        <button 
        className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
        onClick={() => {navigate('/admin/add-service')}}
        >

        
          <FaPlusCircle />
          Add Service
        </button>
      </div>

      {/* Table or Message */}
      {loading ? (
        <p className="text-orange-500 font-medium">Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : services.length === 0 ? (
        <p className="text-gray-600">No services available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-rose-100">
          <table className="min-w-full text-sm text-left text-[#582f21]">
            <thead className="bg-rose-100 text-[#582f21] uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Sr. No</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3 text-center">Edit</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-200 bg-white">
              {services.map((service, index) => (
                <tr
                  key={service._id}
                  className="hover:bg-rose-50 transition duration-200"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium max-w-[180px] truncate">
                    {service.title}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 rounded-md object-cover border"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/admin/service/{service._id}/edit`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      aria-label="Edit service"
                    >
                      <FaEdit size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Delete service"
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

export default AdminServiceTable;
