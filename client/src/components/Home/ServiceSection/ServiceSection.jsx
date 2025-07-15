import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/all-services`
        );
        setServices(res.data?.data?.services || []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-[#ffd8b5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-[#582f21] mb-12">
          What We Offer
        </h2>

        {loading ? (
          <div className="text-center text-orange-500 font-medium text-lg">
            Loading services...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-medium text-lg">
            {error}
          </div>
        ) : services.length === 0 ? (
          <div className="text-center text-gray-600 font-medium text-lg">
            No services available.
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-[#ffc391] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="  text-center py-4">
                  <h3 className="text-lg capitalize font-semibold text-[#582f21]">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
