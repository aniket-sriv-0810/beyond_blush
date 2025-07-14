import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPricing = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ category: "", title: "", includes: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/all-prices`)
      .then(res => {
        const item = res.data.data.pricing.find(p => p._id === id);
        console.table("Item => " , item);
        
        if (item) setForm(item);
      }).finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setMsg("");
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/admin/price/${id}/edit`,
        form,
      );
      setMsg("✅ Updated successfully");
    } catch {
      setMsg("❌ Update failed.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? <p className="p-6">Loading...</p> : (
    <div className="p-6 bg-orange-100 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg border border-orange-300">
        <h2 className="text-2xl text-orange-600 font-bold">Edit Pricing</h2>
        <select name="category" value={form.category} onChange={handleChange} required className="w-full p-2 border rounded">
          <option>Basic Makeup</option><option>HD Makeup</option><option>Makeup Fusion</option>
        </select>
        <input name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="includes" value={form.includes} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" />

        <button type="submit" disabled={loading} className="w-full bg-orange-500 text-white py-2 rounded">
          {loading ? "Updating..." : "Update Pricing"}
        </button>
        {msg && <p className={`text-center ${msg.startsWith("✅")?"text-green-600":"text-red-600"}`}>{msg}</p>}
      </form>
    </div>
  );
};

export default EditPricing;
