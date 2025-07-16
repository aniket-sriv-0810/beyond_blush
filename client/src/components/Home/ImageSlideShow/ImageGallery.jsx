import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageSlideshow from "./ImageSlideShow";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/navigate/all-slides`
        );
        const sliders = res.data?.data?.sliders || [];
        const allImages = sliders.flatMap((slider) => slider.images);
        setImages(allImages);
      } catch (err) {
        setError("Failed to load slideshow.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading)
    return (
      <p className="text-orange-500 text-center text-sm font-medium mt-6">
        Loading slides...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 text-center text-sm font-medium mt-6">
        {error}
      </p>
    );

  if (images.length === 0)
    return (
      <p className="text-gray-500 text-center text-sm font-medium mt-6">
        No slides available.
      </p>
    );

  return (
    <motion.div
      className="bg-[#ffeedd] py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-serif text-[#582f21] text-center mb-16 font-bold tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Our Client Showcase
      </motion.h2>

      <ImageSlideshow images={images} />
    </motion.div>
  );
};

export default ImageGallery;
