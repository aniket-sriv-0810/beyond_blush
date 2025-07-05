// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import showcase from '../../../assets/admin-beyond-blush-1.jpg'; // use a high-quality image here

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#f3d2b3] to-[#d9a87c] overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left text-[#582f21]">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight font-serif">
              Beyond Blush<br />
              Makeup & Hair Artist
            </h1>
            <p className="mt-6 text-lg italic max-w-lg mx-auto lg:mx-0">
              Hello, I’m your trusted stylist! I love helping people feel beautiful — which is why I've spent years refining my passion for makeup & hair artistry.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-[#582f21] text-white rounded shadow hover:bg-[#3c1e15] transition-all duration-300"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={showcase}
              alt="Makeup showcase"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
