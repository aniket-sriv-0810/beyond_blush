import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminPricingTable = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/all-prices`)
      .then(res => setItems(res.data.data.pricing))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this pricing entry?")) return;
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/price/${id}/delete`, { withCredentials: true })
      .then(() => setItems(prev => prev.filter(i => i._id !== id)))
      .catch(() => alert("Error deleting."));
  };

  return (
    <div className="p-6 bg-orange-50 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Manage Pricing</h2>
      {loading ? "Loading..." : (
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-orange-200">
            <tr>
              <th className="p-2">Sr.</th>
              <th className="p-2">Category</th>
              <th className="p-2">Title</th>
              <th className="p-2">Includes</th>
              <th className="p-2">Price</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={i._id} className="hover:bg-orange-50">
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{i.category}</td>
                <td className="p-2">{i.title}</td>
                <td className="p-2">{i.includes}</td>
                <td className="p-2 flex items-center"><FaRupeeSign /> {i.price}</td>
                <td className="p-2 flex gap-4">
                  <Link to={`/admin/pricing/${i._id}/edit`} className="text-blue-600"><FaEdit /></Link>
                  <button className="text-red-600" onClick={() => handleDelete(i._id)}><FaTrashAlt /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPricingTable;
