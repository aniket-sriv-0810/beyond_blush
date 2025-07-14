import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";

const PricingSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/navigate/all-prices`)
      .then(res => setData(res.data.data.pricing))
      .finally(() => setLoading(false));
  }, []);

  const grouped = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) return <p className="p-6 text-center">Loading pricing...</p>;

  return (
    <section className="relative py-20 bg-[#fff9f6] text-[#582f21]">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Pricing</h2>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="bg-[#fef3ec] rounded-xl shadow-xl overflow-hidden">
              <div className="bg-[#f4d4dc] text-center py-4 font-bold">{cat}</div>
              <div className="p-6 space-y-4">
                {items.map(item => (
                  <div key={item._id} className="flex justify-between border-b pb-2">
                    <p className="w-3/4">{item.title}</p>
                    <span className="flex gap-1"><FaRupeeSign className="text-pink-400" />{item.price}</span>
                  </div>
                ))}
              </div>
              {items[0].includes && <p className="px-6 pb-4 text-xs italic">{items[0].includes}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
