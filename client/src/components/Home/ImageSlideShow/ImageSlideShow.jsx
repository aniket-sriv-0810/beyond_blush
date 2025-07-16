import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCircle,
  FaCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 , ease: "easeOut"  } },
  };
  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const variants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUp}
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl px-4 sm:px-0"
    >
      {/* Image Container */}
      <div className="relative aspect-video">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-[#582f21] p-1.5 rounded-full shadow hover:bg-[#f8e2cc] transition-all z-20"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-[#582f21] p-1.5 rounded-full shadow hover:bg-[#f8e2cc] transition-all z-20"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="focus:outline-none"
          >
            {index === current ? (
              <FaCircle className="text-[#582f21] text-sm" />
            ) : (
              <FaRegCircle className="text-[#c8a084] text-sm" />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageSlideshow;
