import React, { useState } from "react";
import axios from "axios";

const AddPricing = () => {
  const [form, setForm] = useState({ category: "", title: "", includes: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setMsg("");

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/add-price`,
        form,
        { withCredentials: true }
      );
      setMsg("✅ Added successfully"); setForm({ category: "", title: "", includes: "", price: "" });
    } catch {
      setMsg("❌ Error adding pricing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 p-6">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-orange-300">
        <h2 className="text-2xl text-orange-600 font-bold">Add Pricing</h2>

        <select name="category" value={form.category} onChange={handleChange} required className="w-full p-2 border border-orange-300 rounded">
          <option value="">Select Category</option>
          <option>Basic Makeup</option><option>HD Makeup</option><option>Makeup Fusion</option>
        </select>

        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="w-full p-2 border rounded" />
        <textarea name="includes" value={form.includes} onChange={handleChange} placeholder="Includes..." className="w-full p-2 border rounded" />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 border rounded" />

        <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded flex justify-center items-center">
          {loading && <div className="animate-spin border-2 border-white w-5 h-5 mr-2 rounded-full"></div>}
          {loading ? "Saving..." : "Add Pricing"}
        </button>

        {msg && <p className={`text-center ${msg.startsWith("✅")?"text-green-600":"text-red-600"}`}>{msg}</p>}
      </form>
    </div>
  );
};

export default AddPricing;
