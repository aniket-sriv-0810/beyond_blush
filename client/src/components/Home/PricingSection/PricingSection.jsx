import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { motion } from "framer-motion";
const PricingSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/navigate/all-prices`)
      .then((res) => setData(res.data.data.pricing))
      .finally(() => setLoading(false));
  }, []);

  const grouped = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) return <p className="p-6 text-center">Loading pricing...</p>;

  return (
    <section className="relative py-20 my-20  bg-[#f8eee9] text-[#582f21]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 font-bold tracking-tight">
          Pricing
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(grouped).map(([cat, items]) => (
            <div
              key={cat}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#f4ded1] transition-transform hover:scale-[1.02]"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-[#ffdabb] to-[#fbe6d9] text-center py-4 font-semibold text-lg tracking-wide text-[#8d4b2f] uppercase">
                {cat}
              </div>

              {/* Pricing Items */}
              <div className="p-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center border-b border-[#f7e3d6] pb-3"
                  >
                    <p className="text-sm sm:text-base capitalize  font-medium max-w-[70%]">
                      {item.title}
                    </p>
                    <span className="flex items-center  text-[#dc5e43] font-semibold text-sm">
                      <FaRupeeSign className="mt-0.5" size={14} />
                      {item.price.toLocaleString("INR")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Includes (if exists) */}
              {items[0].includes && (
                <p className="px-6 pb-5 text-xs italic text-[#8d4b2f]/70 leading-relaxed">
                  {items[0].includes}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
