import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const AdminServiceTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        `${import.meta.env.VITE_API_URL}/api/admin/delete-service/${id}`,
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
    <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-rose-600">All Services</h2>

      {loading ? (
        <p className="text-orange-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : services.length === 0 ? (
        <p className="text-gray-600">No services available.</p>
      ) : (
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-rose-100 text-[#582f21] uppercase">
            <tr>
              <th className="px-4 py-3">Sr. No</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-200">
            {services.map((service, index) => (
              <tr key={service._id} className="hover:bg-rose-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-medium">{service.title}</td>
                <td className="px-4 py-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 rounded-md object-cover border"
                  />
                </td>
                <td className="px-4 py-2 flex justify-center items-center gap-4">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      // Navigate or open edit modal
                      alert("Edit coming soon!");
                    }}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(service._id)}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminServiceTable;
