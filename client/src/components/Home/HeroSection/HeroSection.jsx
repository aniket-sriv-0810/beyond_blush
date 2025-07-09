import React from 'react';
import { Link } from 'react-router-dom';
import showcase from '../../../assets/admin0-no-bg.png';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f3d2b3] to-[#d9a87c] pt-24 md:pt-32 pb-12 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left text-[#582f21]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-serif">
            Tamanna Srivastav
          </h1>
          <h2 className="mt-2 text-lg md:text-2xl font-medium">
            Makeup Artist | Hair Stylist | Nail Artist
          </h2>
          <p className="mt-4 text-base md:text-lg italic">
            Hello, I’m your trusted stylist! I love helping people feel beautiful — which is why I've spent years refining my passion for makeup & hair artistry.
          </p>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-[#582f21] text-white rounded shadow hover:bg-[#3c1e15] transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full  md:w-1/2 flex justify-center md:justify-end">
          <img
            src={showcase}
            alt="Makeup showcase"
            className="w-[80%] bg-gradient-to-bl from-[#4f091e] to-[#8e2c3d]  sm:w-[70%] md:w-[90%] max-w-xs  md:bg-none md:shadow-none sm:max-w-sm md:max-w-md lg:max-w-lg  object-contain shadow-2xl rounded-4xl "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
