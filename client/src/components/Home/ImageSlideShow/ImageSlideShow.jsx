import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRegCircle, FaCircle } from 'react-icons/fa';

const ImageSlideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-video bg-[#f3d2b3] rounded-lg shadow-xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#582f21] p-2 rounded-full shadow hover:bg-[#f8e2cc] transition-all z-20"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#582f21] p-2 rounded-full shadow hover:bg-[#f8e2cc] transition-all z-20"
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
    </div>
  );
};

export default ImageSlideshow;
