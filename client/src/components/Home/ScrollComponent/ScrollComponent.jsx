import React from "react";
import { motion } from "framer-motion";
const ScrollComponent = () => {
  const fadeInDown = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <div className="relative h-screen w-full mt-5 mb-5">
      {/* Background Image with Parallax Effect */}
      <div className="bg-[url('/assets/bg-img.jpg')]  absolute inset-0 bg-fixed bg-cover md:bg-bottom  bg-no-repeat"></div>

      {/* Dark Overlay with Glass Effect */}
      <div className="absolute inset-0 bg-black/30  "></div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInDown}
        className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white"
      >
        <h1 className="text-xl sm:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
          Beyond Blush By <span className="text-yellow-400">Tamanna</span>
        </h1>
        <p className="text-base sm:text-xl max-w-2xl mt-4 leading-relaxed opacity-90">
          Welcome to Urban Haven Hotels – Where Luxury Meets Tranquility
          Experience elegance and comfort in the heart of the city. With
          world-class hospitality, modern amenities, and a serene retreat, every
          stay—whether for business or leisure—is crafted for indulgence,
          relaxation, and sophistication.
        </p>
      </motion.div>
    </div>
  );
};

export default ScrollComponent;
