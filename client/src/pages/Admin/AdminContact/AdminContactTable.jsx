import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const AdminContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all contact messages
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/all-contacts`,
          { withCredentials: true }
        );
        setContacts(res.data?.data?.contacts || []);
      } catch (err) {
        setError("Failed to load contact messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-4 md:p-6 bg-white rounded-3xl shadow-xl overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-rose-600">
          Contact Messages
        </h2>
      </div>

      {/* Table / Messages */}
      {loading ? (
        <p className="text-orange-500 font-medium">Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-600">No contact messages available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-rose-100">
          <table className="min-w-full text-sm text-left text-[#582f21]">
            <thead className="bg-rose-100 text-[#582f21] uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 py-3">Sr. No</th>
                <th className="px-4 py-3"><FaUser className="inline mr-1" />Name</th>
                <th className="px-4 py-3"><FaEnvelope className="inline mr-1" />Email</th>
                <th className="px-4 py-3"><FaPhone className="inline mr-1" />Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-200 bg-white">
              {contacts.map((contact, index) => (
                <tr key={contact._id} className="hover:bg-rose-50 transition duration-200">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{contact.name}</td>
                  <td className="px-4 py-3">{contact.email}</td>
                  <td className="px-4 py-3">{contact.phone || "N/A"}</td>
                  <td className="px-4 py-3 max-w-xs break-words">{contact.message}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()} <br />
                    <span className="text-xs">
                      {new Date(contact.createdAt).toLocaleTimeString()}
                    </span>
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

export default AdminContactTable;
