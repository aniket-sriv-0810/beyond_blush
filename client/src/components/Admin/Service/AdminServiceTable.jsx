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
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
    <h2 className="text-2xl md:text-3xl m-auto font-bold text-[#d95e35]">All Services</h2>
    <button
      className="hover:cursor-pointer flex items-center m-auto md:m-0 gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
      onClick={() => navigate('/admin/add-service')}
    >
      <FaPlusCircle />
      Add Service
    </button>
  </div>

  {/* Table Content */}
  {loading ? (
    <p className="text-orange-500 font-medium">Loading services...</p>
  ) : error ? (
    <p className="text-red-500 font-medium">{error}</p>
  ) : services.length === 0 ? (
    <p className="text-gray-600">No services available.</p>
  ) : (
    <div className="border border-rose-100 rounded-lg">
      <table className="w-full text-sm text-center text-[#582f21]">
        <thead className="bg-rose-100 text-[#582f21] capitalize text-xs sm:text-sm">
          <tr>
            <th className="px-4 py-3">Sr. No</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Edit</th>
            <th className="px-4 py-3">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rose-200 bg-white">
          {services.map((service, index) => (
            <tr
              key={service._id}
              className="hover:bg-rose-50 transition duration-200"
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 font-medium max-w-[180px] truncate">{service.title}</td>
              <td className="px-4 py-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-28 h-28 rounded-md object-cover border mx-auto"
                />
              </td>

              {/* Edit Button */}
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => navigate(`/admin/service/${service._id}/edit`)}
                  className="m-auto flex items-center gap-2 p-3 hover:cursor-pointer bg-teal-500 hover:bg-teal-600 text-white md:px-5 md:py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
                  aria-label="Edit Service"
                >
                  <span className="hidden md:block">Edit</span>
                  <FaEdit size={18} />
                </button>
              </td>

              {/* Delete Button */}
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => handleDelete(service._id)}
                  className="m-auto flex items-center gap-2 p-3 hover:cursor-pointer bg-red-500 hover:bg-red-600 text-white md:px-5 md:py-2 rounded-full text-sm font-semibold shadow transition-all duration-300"
                  aria-label="Delete Service"
                >
                  <span className="hidden md:block">Delete</span>
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
